use std::collections::HashMap;

use serde::{Deserialize, Serialize};

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

    pub fn from_file(path: &str) -> Result<Self, Box<dyn std::error::Error>> {
        let content = std::fs::read_to_string(path)?;
        let raw: RawCollection = serde_json::from_str(&content)?;
        Ok(raw.into())
    }

    pub fn save_to_file(&self, path: &str, name: &str) -> Result<(), Box<dyn std::error::Error>> {
        let raw = self.to_raw(name);
        let json = serde_json::to_string_pretty(&raw)?;
        std::fs::write(path, json)?;
        Ok(())
    }

    pub fn flatten(&self) -> Vec<(String, &Item)> {
        let mut result = Vec::new();
        for (name, item) in &self.item {
            result.push((name.clone(), item));
            if let Item::Folder(folder) = item {
                for (sub_name, sub_item) in folder.flatten() {
                    result.push((format!("{} / {}", name, sub_name), sub_item));
                }
            }
        }
        result
    }

    pub fn search(&self, query: &str) -> Vec<(String, &Item)> {
        let query = query.to_lowercase();
        self.flatten()
            .into_iter()
            .filter(|(name, _)| name.to_lowercase().contains(&query))
            .collect()
    }
}

impl Folder {
    pub fn new() -> Self {
        Self {
            item: HashMap::new(),
            is_visible: false,
        }
    }

    pub fn get_item(&self, name: &str) -> Option<&Item> {
        self.item.get(name)
    }

    pub fn add_item(&mut self, name: String, item: Item) {
        self.item.insert(name, item);
    }

    pub fn flatten(&self) -> Vec<(String, &Item)> {
        let mut result = Vec::new();
        for (name, item) in &self.item {
            result.push((name.clone(), item));
            if let Item::Folder(folder) = item {
                for (sub_name, sub_item) in folder.flatten() {
                    result.push((format!("{} / {}", name, sub_name), sub_item));
                }
            }
        }
        result
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

    pub fn with_data(
        label: String,
        kind: NodeKind,
        parent_path: &[String],
        data: NodeData,
    ) -> Self {
        let mut node = Self::new(label, kind, parent_path);
        node.data = Some(data);
        node
    }

    pub fn id(&self) -> String {
        self.path.join("/")
    }

    pub fn add_child(&mut self, child: TreeNode) {
        self.children.push(child);
    }

    pub fn toggle(&mut self) {
        self.expanded = !self.expanded;
    }

    pub fn expand(&mut self) {
        self.expanded = true;
    }

    pub fn collapse(&mut self) {
        self.expanded = false;
    }

    pub fn is_expanded(&self) -> bool {
        self.expanded
    }

    pub fn sort_children(&mut self) {
        self.children.sort_by(|a, b| {
            let kind_order = a.kind.cmp(&b.kind);
            if kind_order != std::cmp::Ordering::Equal {
                return kind_order;
            }
            a.label.to_lowercase().cmp(&b.label.to_lowercase())
        });

        for child in &mut self.children {
            child.sort_children();
        }
    }

    pub fn find_by_path(&self, path: &[String]) -> Option<&TreeNode> {
        if self.path == path {
            return Some(self);
        }

        for child in &self.children {
            if let Some(found) = child.find_by_path(path) {
                return Some(found);
            }
        }
        None
    }

    pub fn find_by_path_mut(&mut self, path: &[String]) -> Option<&mut TreeNode> {
        if self.path == path {
            return Some(self);
        }

        for child in &mut self.children {
            if let Some(found) = child.find_by_path_mut(path) {
                return Some(found);
            }
        }
        None
    }

    pub fn get_visible_nodes(&self) -> Vec<&TreeNode> {
        let mut nodes = Vec::new();
        self.collect_visible_nodes(&mut nodes);
        nodes
    }

    fn collect_visible_nodes<'a>(&'a self, nodes: &mut Vec<&'a TreeNode>) {
        nodes.push(self);
        if self.expanded {
            for child in &self.children {
                child.collect_visible_nodes(nodes);
            }
        }
    }

    pub fn get_visible_index(&self) -> Option<usize> {
        None
    }

    pub fn format_visible(&self, indent: usize, selected_path: Option<&[String]>) -> String {
        let indent_str = "  ".repeat(indent);
        let expand_symbol = if self.expanded { "▼" } else { "▶" };
        let is_selected = selected_path == Some(&self.path);
        let prefix = if is_selected { "▶ " } else { "  " };

        let mut result = format!("{}{}{} {}\n", prefix, indent_str, expand_symbol, self.label);

        if self.expanded {
            for child in &self.children {
                result.push_str(&child.format_visible(indent + 1, selected_path));
            }
        }

        result
    }
}

pub struct TreeBuilder {
    pub root: TreeNode,
}

impl TreeBuilder {
    pub fn new() -> Self {
        Self {
            root: TreeNode::new("Collection".to_string(), NodeKind::Collection, &[]),
        }
    }

    pub fn build_from_collections(&mut self, collections: &HashMap<String, Collection>) {
        let mut root_node = TreeNode::new("Collection".to_string(), NodeKind::Collection, &[]);
        root_node.expanded = true;

        for (name, collection) in collections {
            let collection_node = self.build_collection_node(name, collection, &[]);
            root_node.add_child(collection_node);
        }

        root_node.sort_children();
        self.root = root_node;
    }

    fn build_collection_node(
        &self,
        name: &str,
        collection: &Collection,
        parent_path: &[String],
    ) -> TreeNode {
        let mut node = TreeNode::with_data(
            name.to_string(),
            NodeKind::Collection,
            parent_path,
            NodeData::CollectionData {
                name: name.to_string(),
                is_visible: collection.is_visible,
            },
        );
        node.expanded = true;

        let mut path = parent_path.to_vec();
        path.push(name.to_string());

        for (item_name, item) in &collection.item {
            let child_node = self.build_item_node(item_name, item, &path);
            node.add_child(child_node);
        }

        node.sort_children();
        node
    }

    fn build_item_node(&self, name: &str, item: &Item, parent_path: &[String]) -> TreeNode {
        match item {
            Item::Folder(folder) => self.build_folder_node(name, folder, parent_path),
            Item::Request(request) => self.build_request_node(name, request, parent_path),
        }
    }

    fn build_folder_node(&self, name: &str, folder: &Folder, parent_path: &[String]) -> TreeNode {
        let mut node = TreeNode::with_data(
            name.to_string(),
            NodeKind::Folder,
            parent_path,
            NodeData::FolderData {
                is_visible: folder.is_visible,
            },
        );
        node.expanded = false;

        let mut path = parent_path.to_vec();
        path.push(name.to_string());

        for (item_name, item) in &folder.item {
            let child_node = self.build_item_node(item_name, item, &path);
            node.add_child(child_node);
        }

        node.sort_children();
        node
    }

    fn build_request_node(
        &self,
        name: &str,
        request: &RequestItem,
        parent_path: &[String],
    ) -> TreeNode {
        let full_url = request.get_full_url();
        let method = request.request.method.clone();
        let label = format!("{} {}", method, name);

        TreeNode::with_data(
            label,
            NodeKind::Request,
            parent_path,
            NodeData::RequestData {
                name: request.name.clone(),
                method: request.request.method.clone(),
                url: full_url,
                headers: request.request.header.clone(),
                body: request.request.body.clone(),
            },
        )
    }
}
