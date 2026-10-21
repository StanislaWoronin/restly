use std::collections::HashMap;

use serde::{Deserialize, Serialize};

use crate::converter::collection::{Collection, Folder, Header, Item, QueryParam, Request, Url};

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct RawCollection {
    pub info: RawInfo,
    pub item: Vec<RawItem>,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct RawInfo {
    pub name: String,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
#[serde(untagged)]
pub enum RawItem {
    Folder(RawFolder),
    Request(RawRequestItem),
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct RawFolder {
    pub name: String,
    pub item: Vec<RawItem>,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct RawRequestItem {
    pub name: String,
    pub request: RawRequest,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct RawRequest {
    pub method: String,
    pub url: RawUrl,
    pub header: Option<Vec<Header>>,
    pub body: Option<RawBody>,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct RawUrl {
    pub raw: Option<String>,
    pub query: Option<Vec<QueryParam>>,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct RawBody {
    pub raw: Option<String>,
}

impl From<RawCollection> for Collection {
    fn from(raw: RawCollection) -> Self {
        let mut items = HashMap::new();

        for raw_item in raw.item {
            match raw_item {
                RawItem::Folder(folder) => {
                    items.insert(folder.name.clone(), Item::Folder(folder.into()));
                }
                RawItem::Request(req) => {
                    items.insert(
                        req.name.clone(),
                        Item::Request(req.request.into_request(req.name)),
                    );
                }
            }
        }

        Collection {
            name: raw.info.name,
            item: items,
            is_visible: true,
        }
    }
}

impl From<RawFolder> for Folder {
    fn from(raw: RawFolder) -> Self {
        let mut items = HashMap::new();

        for raw_item in raw.item {
            match raw_item {
                RawItem::Folder(folder) => {
                    items.insert(folder.name.clone(), Item::Folder(folder.into()));
                }
                RawItem::Request(req) => {
                    items.insert(
                        req.name.clone(),
                        Item::Request(req.request.into_request(req.name)),
                    );
                }
            }
        }

        Folder {
            name: raw.name,
            item: items,
            is_visible: true,
        }
    }
}

impl RawRequest {
    fn into_request(self, name: String) -> Request {
        Request {
            name,
            method: self.method,
            url: self.url.into(),
            header: self.header,
            body: self.body.and_then(|b| b.raw).unwrap_or_default(),
        }
    }
}

impl From<RawUrl> for Url {
    fn from(raw: RawUrl) -> Self {
        Url {
            raw: raw.raw,
            query: raw.query,
        }
    }
}
