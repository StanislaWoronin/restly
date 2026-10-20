// use std::collections::HashMap;

// use serde::{Deserialize, Serialize};

// use crate::{app::log::LogLevel, debug_log, errors::AppResult};

// #[derive(Debug, Clone, PartialEq, Eq, PartialOrd, Ord)]
// pub enum NodeKind {
//     Collection,
//     Folder,
//     Request,
// }

// #[derive(Debug, Clone)]
// pub enum NodeData {
//     RequestData {
//         name: String,
//         method: String,
//         url: String,
//         headers: Option<Vec<Header>>,
//         body: String,
//     },
//     FolderData {
//         is_visible: bool,
//     },
//     CollectionData {
//         name: String,
//         is_visible: bool,
//     },
// }

// #[derive(Debug, Clone)]
// pub struct TreeNode {
//     pub path: Vec<String>,
//     pub label: String,
//     pub kind: NodeKind,
//     pub children: Vec<TreeNode>,
//     pub expanded: bool,
//     pub data: Option<NodeData>,
// }

// impl TreeNode {
//     pub fn new(label: String, kind: NodeKind, parent_path: &[String]) -> Self {
//         let mut path = parent_path.to_vec();
//         path.push(label.clone());

//         Self {
//             path,
//             label,
//             kind,
//             children: Vec::new(),
//             expanded: false,
//             data: None,
//         }
//     }
// }
