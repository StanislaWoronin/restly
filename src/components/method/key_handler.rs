use crossterm::event::{KeyCode, KeyEvent};

use crate::{
    FocusArea, app::key_buffer::get_buffer, components::MethodBlock, debug_log,
    key_handler::KeyHandler,
};

impl KeyHandler for MethodBlock {
    fn is_focused(&self, _area: FocusArea) -> bool {
        self.is_editing
    }

    fn set_visiable(&mut self, key: KeyEvent) -> bool {
        let is_processed =
            if get_buffer() == Some(KeyCode::Char(' ')) && key.code == KeyCode::Char('m') {
                self.is_editing = !self.is_editing;

                true
            } else {
                false
            };

        debug_log!("Process 'set_visiable': {is_processed}");

        is_processed
    }
}
