use std::path::PathBuf;

use ratatui::{
    Frame,
    layout::Rect,
    style::{Color, Style},
    text::Text,
    widgets::{Block, BorderType, Borders, Paragraph},
};

use crate::components::{EditableComponent, tree::tree_node::TreeNode};

pub struct TreeBlock {
    pub content: Option<TreeNode>,
    pub is_visiable: bool,
    pub is_editing: bool,
}

impl TreeBlock {
    pub fn new() -> Self {
        Self {
            content: None,
            is_visiable: false,
            is_editing: false,
        }
    }

    pub fn draw(&self, frame: &mut Frame, area: Rect) {
        let block = Block::default()
            .borders(Borders::ALL)
            .border_style(Style::default().fg(self.border_color()))
            .border_type(BorderType::Rounded);

        if let Some(tree) = &self.content {
            let text = Text::from(tree.format_tree(0));
            let paragraph = Paragraph::new(text)
                .block(block)
                .style(Style::default().fg(Color::White));

            frame.render_widget(paragraph, area);
        } else {
            frame.render_widget(block, area);
        }
    }

    pub fn load_collection(&mut self) -> Result<(), Box<dyn std::error::Error>> {
        let path = PathBuf::from("config").join("collection.json");

        if !path.exists() {
            return Err(format!("Collection not found: {:?}", path).into());
        }

        self.content = Some(super::tree_node::PostmanCollection::parse_from_file(
            path.to_str().unwrap(),
        )?);

        Ok(())
    }
}
