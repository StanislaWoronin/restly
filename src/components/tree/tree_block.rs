use std::collections::HashMap;
use std::path::PathBuf;

use ratatui::{
    Frame,
    layout::Rect,
    style::{Color, Style},
    text::Text,
    widgets::{Block, BorderType, Borders, Paragraph},
};

use crate::components::{
    EditableComponent,
    tree::tree_node::{Collection, NodeData::RequestData, NodeKind, TreeBuilder, TreeNode},
};

pub struct TreeBlock {
    pub content: HashMap<String, TreeNode>,
    pub is_visible: bool,
    pub is_editing: bool,
}

impl TreeBlock {
    pub fn new() -> Self {
        Self {
            content: HashMap::new(),
            is_visible: false,
            is_editing: false,
        }
    }

    pub fn draw(&self, frame: &mut Frame, area: Rect) {
        let block = Block::default()
            .borders(Borders::ALL)
            .border_style(Style::default().fg(self.border_color()))
            .border_type(BorderType::Rounded);

        if self.content.is_empty() {
            let block_with_text = block.title(" Load Collection ");
            frame.render_widget(block_with_text, area);
            return;
        }

        let tree_text = self.format_trees();
        let text = Text::from(tree_text);

        let paragraph = Paragraph::new(text)
            .block(block)
            .style(Style::default().fg(Color::White));

        frame.render_widget(paragraph, area);
    }

    fn format_trees(&self) -> String {
        let mut result = String::new();

        for (name, tree_node) in &self.content {
            result.push_str(&format!("{}\n", name));
            result.push_str(&self.format_tree_node(tree_node, 1));
        }

        result
    }

    fn format_tree_node(&self, node: &TreeNode, indent: usize) -> String {
        let mut result = String::new();
        let indent_str = "  ".repeat(indent);

        for child in &node.children {
            match child.kind {
                NodeKind::Collection => {
                    continue;
                }
                NodeKind::Folder => {
                    result.push_str(&format!("{} {}\n", indent_str, child.label));
                    result.push_str(&self.format_tree_node(child, indent + 1));
                }
                NodeKind::Request => {
                    if let Some(data) = &child.data {
                        if let RequestData { method, name, .. } = data {
                            result.push_str(&format!("{} {} {}\n", indent_str, method, name));
                        } else {
                            result.push_str(&format!("{} {}\n", indent_str, child.label));
                        }
                    } else {
                        result.push_str(&format!("{} {}\n", indent_str, child.label));
                    }
                }
            }
        }

        result
    }

    pub fn load_collection(&mut self) -> Result<(), Box<dyn std::error::Error>> {
        let path = PathBuf::from("config").join("collection.json");

        if !path.exists() {
            return Err(format!("Collection not found: {:?}", path).into());
        }

        let collection = Collection::from_file(path.to_str().unwrap())?;
        let name = path
            .file_stem()
            .unwrap_or_default()
            .to_string_lossy()
            .to_string();

        let mut collections = HashMap::new();
        collections.insert(name.clone(), collection);

        let mut builder = TreeBuilder::new();
        builder.build_from_collections(&collections);

        self.content.clear();
        for child in &builder.root.children {
            if let Some(data) = &child.data {
                if let crate::components::tree::tree_node::NodeData::CollectionData {
                    name, ..
                } = data
                {
                    self.content.insert(name.clone(), child.clone());
                }
            }
        }

        Ok(())
    }
}
