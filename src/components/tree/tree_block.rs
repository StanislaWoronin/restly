use std::{collections::HashMap, fs, path::PathBuf};

use indexmap::IndexMap;
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
    pub content: IndexMap<String, Line<'static>>,
    request_data: HashMap<String, Request>,
    pub is_visible: bool,
    pub is_editing: bool,
}

impl TreeBlock {
    pub fn new() -> Self {
        Self {
            content: IndexMap::new(),
            request_data: HashMap::new(),
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

        let lines: Vec<Line> = self.content.values().cloned().collect();

        let paragraph = Paragraph::new(lines)
            .block(block)
            .style(Style::default().fg(Color::White));

        frame.render_widget(paragraph, area);
    }

    pub fn load_content(&mut self) -> AppResult<()> {
        let mut collections = self.load_collections()?;
        collections.sort_by(|a, b| a.name.cmp(&b.name));

        for collection in collections {
            let name = collection.name.clone();
            self.content
                .insert(name.clone(), Self::get_line(name.clone(), 1));

            if collection.is_visible {
                self.load_items(name, collection.item, 2);
            }
        }

        Ok(())
    }

    fn get_line(content: String, level: usize) -> Line<'static> {
        let content = format!("{}{}", " ".repeat(level), content);
        Line::from(content)
    }

    fn load_collections(&self) -> AppResult<Vec<Collection>> {
        let mut collections = Vec::new();

        let mut paths: Vec<PathBuf> = fs::read_dir("collections")?
            .filter_map(|e| e.ok())
            .map(|e| e.path())
            .filter(|p| p.is_file() && p.extension().and_then(|e| e.to_str()) == Some("json"))
            .collect();

        paths.sort();

        for path in paths {
            let collection = Collection::from_file(&path.to_string_lossy())?;
            collections.push(collection);
        }

        Ok(collections)
    }

    fn load_items(&mut self, path: String, mut items: HashMap<String, Item>, level: usize) {
        let mut names: Vec<String> = items.keys().cloned().collect();
        names.sort();

        for item_name in names {
            let item = items.remove(&item_name).expect("key exists");
            let full_path = format!("{}/{}", path, item_name);

            match item {
                Item::Folder(folder) => {
                    self.content
                        .insert(full_path.clone(), Self::get_line(folder.name, level));

                    if folder.is_visible {
                        self.load_items(full_path, folder.item, level + 1);
                    }
                }
                Item::Request(req) => {
                    let name = req.name.clone();

                    self.request_data.insert(full_path.clone(), req);
                    self.content.insert(full_path, Self::get_line(name, level));
                }
            }
        }
    }
}
