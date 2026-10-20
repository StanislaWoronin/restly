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
    Request(RequestItem),
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct Folder {
    pub item: HashMap<String, Item>,
    pub is_visible: bool,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct RequestItem {
    pub name: String,
    pub request: Request,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct Request {
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
                Item::Request(request) => RawItem::Request(request.to_raw()),
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
                Item::Request(request) => RawItem::Request(request.to_raw()),
            };
            items.push(raw_item);
        }

        RawFolder {
            name: name.to_string(),
            item: items,
        }
    }
}

impl RequestItem {
    pub fn to_raw(&self) -> RawRequestItem {
        RawRequestItem {
            name: self.name.clone(),
            request: self.request.to_raw(),
        }
    }
}

impl Request {
    pub fn to_raw(&self) -> RawRequest {
        RawRequest {
            method: self.method.clone(),
            url: self.url.to_raw(),
            header: self.header.clone(),
            body: Some(RawBody {
                raw: Some(self.body.clone()),
            }),
        }
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

impl Folder {
    pub fn new() -> Self {
        Self {
            item: HashMap::new(),
            is_visible: false,
        }
    }
}

impl RequestItem {
    pub fn get_full_url(&self) -> String {
        if let Some(raw) = &self.request.url.raw {
            raw.clone()
        } else {
            format!("{}", self.request.method)
        }
    }
}
