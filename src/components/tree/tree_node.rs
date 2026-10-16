use std::collections::HashMap;

use serde::{Deserialize, Serialize};

use crate::{app::log::LogLevel, debug_log, errors::AppResult};

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

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct Collection {
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
    pub fn new() -> Self {
        Self {
            item: HashMap::new(),
            is_visible: false,
        }
    }

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

#[derive(Debug, Clone, PartialEq, Eq, PartialOrd, Ord)]
pub enum NodeKind {
    Collection,
    Folder,
    Request,
}

#[derive(Debug, Clone)]
pub enum NodeData {
    RequestData {
        name: String,
        method: String,
        url: String,
        headers: Option<Vec<Header>>,
        body: String,
    },
    FolderData {
        is_visible: bool,
    },
    CollectionData {
        name: String,
        is_visible: bool,
    },
}

#[derive(Debug, Clone)]
pub struct TreeNode {
    pub path: Vec<String>,
    pub label: String,
    pub kind: NodeKind,
    pub children: Vec<TreeNode>,
    pub expanded: bool,
    pub data: Option<NodeData>,
}

impl TreeNode {
    pub fn new(label: String, kind: NodeKind, parent_path: &[String]) -> Self {
        let mut path = parent_path.to_vec();
        path.push(label.clone());

        Self {
            path,
            label,
            kind,
            children: Vec::new(),
            expanded: false,
            data: None,
        }
    }
}
