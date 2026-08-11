use crossterm::event::KeyEvent;

use crate::{
    FocusArea, components::tab::request::request_tab::RequestTab, key_handler::KeyHandler,
};

impl KeyHandler for RequestTab {
    fn get_component_name(&self) -> FocusArea {
        FocusArea::Request
    }

    fn process_key(&mut self, _key: KeyEvent) -> bool {
        false
    }
}
