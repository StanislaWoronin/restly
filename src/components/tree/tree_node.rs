use serde::{Deserialize, Serialize};

use crate::{app::log::LogLevel, debug_log};

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct PostmanCollection {
    pub info: Info,
    pub item: Vec<Item>,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct Info {
    pub name: String,
    #[serde(rename = "_postman_id")]
    pub postman_id: Option<String>,
    pub description: Option<String>,
    pub schema: Option<String>,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
#[serde(untagged)]
pub enum Item {
    Folder(Folder),
    Request(RequestItem),
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct Folder {
    pub name: String,
    pub item: Vec<Item>,
    pub description: Option<String>,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct RequestItem {
    pub name: String,
    pub request: Request,
    pub response: Option<Vec<Response>>,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct Request {
    pub method: String,
    pub url: Url,
    pub header: Option<Vec<Header>>,
    pub body: Option<Body>,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct Url {
    pub raw: Option<String>,
    pub host: Option<Vec<String>>,
    pub path: Option<Vec<String>>,
    pub query: Option<Vec<QueryParam>>,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct Header {
    pub key: String,
    pub value: String,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct Body {
    pub mode: String,
    pub raw: Option<String>,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct QueryParam {
    pub key: String,
    pub value: String,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct Response {
    pub name: Option<String>,
    pub status: Option<String>,
    pub body: Option<String>,
}

#[derive(Debug, Clone)]
pub struct TreeNode {
    pub label: String,
    pub kind: NodeKind,
    pub children: Vec<TreeNode>,
}

#[derive(Debug, Clone, PartialEq)]
pub enum NodeKind {
    Collection,
    Folder,
    Request,
    Response,
}

impl TreeNode {
    pub fn new(label: String, kind: NodeKind) -> Self {
        Self {
            label,
            kind,
            children: Vec::new(),
        }
    }

    pub fn add_child(&mut self, child: TreeNode) {
        self.children.push(child);
    }

    pub fn format_tree(&self, indent: usize) -> String {
        let indent_str = "  ".repeat(indent);
        let mut result = format!("{}{}\n", indent_str, self.label);

        for child in &self.children {
            result.push_str(&child.format_tree(indent + 1));
        }

        result
    }
}

impl PostmanCollection {
    pub fn parse_from_file(path: &str) -> Result<TreeNode, Box<dyn std::error::Error>> {
        let content = std::fs::read_to_string(path)?;
        let collection: PostmanCollection = serde_json::from_str(&content)?;

        debug_log!(LogLevel::Debug, "Path: {}. Content: {}", path, content,);

        Ok(collection.into_tree_node())
    }

    pub fn into_tree_node(self) -> TreeNode {
        let mut root = TreeNode::new(format!(" {}", self.info.name), NodeKind::Collection);

        for item in self.item {
            let node = item.into_tree_node();
            root.add_child(node);
        }

        root
    }
}

impl Item {
    pub fn into_tree_node(self) -> TreeNode {
        match self {
            Item::Folder(folder) => folder.into_tree_node(),
            Item::Request(request) => request.into_tree_node(),
        }
    }
}

impl Folder {
    pub fn into_tree_node(self) -> TreeNode {
        let mut node = TreeNode::new(format!("> {}", self.name), NodeKind::Folder);

        for item in self.item {
            let child = item.into_tree_node();
            node.add_child(child);
        }

        node
    }
}

impl RequestItem {
    pub fn into_tree_node(self) -> TreeNode {
        let method = self.request.method.clone();
        let path = self.request.url.path.unwrap_or_default().join("/");

        let label = format!(
            " {} {}{}",
            method,
            if path.is_empty() { "/" } else { " " },
            if path.is_empty() { "" } else { &path }
        );

        let mut node = TreeNode::new(label, NodeKind::Request);

        if let Some(responses) = self.response {
            for response in responses {
                let status = response.status.unwrap_or_else(|| "??".to_string());
                let resp_node =
                    TreeNode::new(format!("  Response: {}", status), NodeKind::Response);
                node.add_child(resp_node);
            }
        }

        node
    }
}
