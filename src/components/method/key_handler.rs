use crossterm::event::{KeyCode, KeyEvent};

use crate::{FocusArea, components::MethodBlock, key_handler::KeyHandler};

impl KeyHandler for MethodBlock {
    fn get_component_name(&self) -> FocusArea {
        FocusArea::Method
    }

    fn process_key(&mut self, key: KeyEvent) -> Result<bool, Box<dyn std::error::Error>> {
        match key.code {
            KeyCode::Tab | KeyCode::Down | KeyCode::Char('k') => {
                self.method = self.method.next();
                Ok(true)
            }
            KeyCode::BackTab | KeyCode::Up | KeyCode::Char('j') => {
                self.method = self.method.previos();
                Ok(true)
            }
            _ => Ok(false),
        }
    }
}
