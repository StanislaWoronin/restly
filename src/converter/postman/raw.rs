use std::collections::HashMap;

use serde::{Deserialize, Serialize};

use crate::converter::collection::{
    Collection, Folder, Header, Item, QueryParam, Request, RequestItem, Url,
};

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
                    let name = folder.name.clone();
                    let folder: Folder = folder.into();
                    items.insert(name, Item::Folder(folder));
                }
                RawItem::Request(request) => {
                    let request_item: RequestItem = request.into();
                    items.insert(request_item.name.clone(), Item::Request(request_item));
                }
            }
        }

        Collection {
            name: raw.info.name,
            item: items,
            is_visible: false,
        }
    }
}

impl From<RawFolder> for Folder {
    fn from(raw: RawFolder) -> Self {
        let mut items = HashMap::new();

        for raw_item in raw.item {
            match raw_item {
                RawItem::Folder(folder) => {
                    let name = folder.name.clone();
                    let folder: Folder = folder.into();
                    items.insert(name, Item::Folder(folder));
                }
                RawItem::Request(request) => {
                    let request_item: RequestItem = request.into();
                    items.insert(request_item.name.clone(), Item::Request(request_item));
                }
            }
        }

        Folder {
            item: items,
            is_visible: false,
        }
    }
}

impl From<RawRequestItem> for RequestItem {
    fn from(raw: RawRequestItem) -> Self {
        RequestItem {
            name: raw.name,
            request: raw.request.into(),
        }
    }
}

impl From<RawRequest> for Request {
    fn from(raw: RawRequest) -> Self {
        Request {
            method: raw.method,
            url: raw.url.into(),
            header: raw.header,
            body: raw.body.and_then(|b| b.raw).unwrap_or_default(),
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
