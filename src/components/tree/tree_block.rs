use std::path::PathBuf;

use ratatui::{
    Frame,
    layout::Rect,
    style::{Color, Style},
    text::Line,
    widgets::{Block, BorderType, Borders, Paragraph},
};

use crate::{
    app::log::LogLevel,
    components::{EditableComponent, tree::tree_node::Collection},
    errors::{AppError, AppResult},
};

use crate::debug_log;

pub struct TreeBlock {
    pub content: Vec<Line<'static>>,
    pub is_visible: bool,
    pub is_editing: bool,
}

impl TreeBlock {
    pub fn new() -> Self {
        Self {
            content: vec![Line::default()],
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

        let paragraph = Paragraph::new(self.content.clone())
            .block(block)
            .style(Style::default().fg(Color::White));

        frame.render_widget(paragraph, area);
    }

    pub fn load_collection(&mut self) -> AppResult<()> {
        let path = PathBuf::from("config").join("collection.json");

        if !path.exists() {
            debug_log!(LogLevel::Debug, "Collection path: {:?}", path);

            return Err(AppError::CollectionNotFound(path));
        }

        let collection = Collection::from_file(path.to_str().unwrap())?;
        let name = path
            .file_stem()
            .unwrap_or_default()
            .to_string_lossy()
            .to_string();

        Ok(())
    }
}
