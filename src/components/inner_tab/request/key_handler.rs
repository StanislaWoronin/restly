use crossterm::event::{KeyCode, KeyEvent};

use crate::{
    FocusArea, components::inner_tab::request::request_tab::RequestTab, key_handler::KeyHandler,
};

impl KeyHandler for RequestTab {
    fn get_component_name(&self) -> FocusArea {
        FocusArea::RequestTab
    }

    fn set_focus(&self, key: KeyEvent, buffer: &mut KeyCode) -> Option<FocusArea> {
        if *buffer == KeyCode::Char(' ') && key.code == KeyCode::Char('p') {
            Some(self.get_component_name())
        } else {
            None
        }
    }
}
