use std::{collections::HashMap, fs, path::PathBuf};

use ratatui::{
    Frame,
    layout::Rect,
    style::{Color, Style},
    text::Line,
    widgets::{Block, BorderType, Borders, Paragraph},
};

use crate::{
    components::EditableComponent,
    converter::collection::{Collection, Item, Request},
    errors::AppResult,
};

pub struct TreeBlock {
    pub content: Vec<Line<'static>>,
    pub is_visible: bool,
    pub is_editing: bool,
}

impl TreeBlock {
    pub fn new() -> Self {
        Self {
            content: vec![],
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

    pub fn load_collections(&mut self) -> AppResult<()> {
        let mut content = Vec::new();

        let mut paths: Vec<PathBuf> = fs::read_dir(PathBuf::from("collections"))?
            .filter_map(|e| e.ok())
            .map(|e| e.path())
            .filter(|p| p.is_file() && p.extension().and_then(|e| e.to_str()) == Some("json"))
            .collect();

        paths.sort();

        for path in paths {
            let collection = Collection::from_file(path.to_str().unwrap())?;

            if collection.is_visible {
                let items = load_items(collection.item);
            } else {
                content.push(Line::from(collection.name));
            }
        }

        fs::write("collections_debug.txt", format!("{:#?}\n", content))?;

        Ok(())
    }

    fn load_items(items: HashMap<String, Item>) {
      match  {

      }
    }
}
