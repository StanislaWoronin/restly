use crossterm::event::{KeyCode, KeyEvent};

use crate::{FocusArea, components::MethodBlock, key_handler::KeyHandler};

impl KeyHandler for MethodBlock {
    fn get_component_name(&self) -> FocusArea {
        FocusArea::Method
    }

    fn process_key(&mut self, key: KeyEvent) -> bool {
        match key.code {
            KeyCode::Tab | KeyCode::Down | KeyCode::Char('k') => {
                self.method = self.method.next();
                true
            }
            KeyCode::BackTab | KeyCode::Up | KeyCode::Char('j') => {
                self.method = self.method.previos();
                true
            }
            _ => false,
        }
    }
}
