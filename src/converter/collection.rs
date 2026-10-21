use std::collections::HashMap;

use serde::{Deserialize, Serialize};

use crate::{app::log::LogLevel, debug_log};

use crate::{
    converter::postman::raw::{
        RawBody, RawCollection, RawFolder, RawInfo, RawItem, RawRequest, RawRequestItem, RawUrl,
    },
    errors::AppResult,
};

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct Collection {
    pub name: String,
    pub item: HashMap<String, Item>,
    pub is_visible: bool,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
#[serde(untagged)]
pub enum Item {
    Folder(Folder),
    Request(Request),
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct Folder {
    pub name: String,
    pub item: HashMap<String, Item>,
    pub is_visible: bool,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct Request {
    pub name: String,
    pub method: String,
    pub url: Url,
    pub header: Option<Vec<Header>>,
    pub body: String,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct Url {
    pub raw: Option<String>,
    pub query: Option<Vec<QueryParam>>,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct QueryParam {
    pub key: String,
    pub value: String,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct Header {
    pub key: String,
    pub value: String,
}

impl Collection {
    pub fn to_raw(&self, name: &str) -> RawCollection {
        let mut items = Vec::new();

        for (item_name, item) in &self.item {
            let raw_item = match item {
                Item::Folder(folder) => RawItem::Folder(folder.to_raw(item_name)),
                Item::Request(request) => RawItem::Request(request.to_raw(item_name)),
            };
            items.push(raw_item);
        }

        RawCollection {
            info: RawInfo {
                name: name.to_string(),
            },
            item: items,
        }
    }
}

impl Folder {
    pub fn to_raw(&self, name: &str) -> RawFolder {
        let mut items = Vec::new();

        for (item_name, item) in &self.item {
            let raw_item = match item {
                Item::Folder(folder) => RawItem::Folder(folder.to_raw(item_name)),
                Item::Request(request) => RawItem::Request(request.to_raw(item_name)),
            };
            items.push(raw_item);
        }

        RawFolder {
            name: name.to_string(),
            item: items,
        }
    }
}

impl Request {
    /// `name` берётся из ключа `HashMap` на уровне родителя —
    /// в Postman имя живёт на уровне элемента, а не внутри `request`.
    pub fn to_raw(&self, name: &str) -> RawRequestItem {
        RawRequestItem {
            name: name.to_string(),
            request: RawRequest {
                method: self.method.clone(),
                url: self.url.to_raw(),
                header: self.header.clone(),
                body: Some(RawBody {
                    raw: Some(self.body.clone()),
                }),
            },
        }
    }

    pub fn get_full_url(&self) -> String {
        self.url.raw.clone().unwrap_or_default()
    }
}

impl Url {
    pub fn to_raw(&self) -> RawUrl {
        RawUrl {
            raw: self.raw.clone(),
            query: self.query.clone(),
        }
    }
}

impl Collection {
    pub fn from_file(path: &str) -> AppResult<Self> {
        let content = std::fs::read_to_string(path)?;
        let raw: RawCollection = serde_json::from_str(&content)?;

        let collection: Collection = raw.into();
        debug_log!(LogLevel::Debug, "{:?}", collection);

        Ok(collection)
    }

    pub fn save_to_file(&self, path: &str, name: &str) -> Result<(), Box<dyn std::error::Error>> {
        let raw = self.to_raw(name);
        let json = serde_json::to_string_pretty(&raw)?;
        std::fs::write(path, json)?;
        Ok(())
    }
}
