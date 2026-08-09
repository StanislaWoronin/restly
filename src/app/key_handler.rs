use crossterm::event::{KeyCode, KeyEvent};

use crate::{App, FocusArea, key_handler::KeyHandler};

impl KeyHandler for App {
    fn get_component_name(&self) -> crate::FocusArea {
        FocusArea::App
    }

    fn set_focus(&self, key: KeyEvent, buffer: &mut KeyCode) -> Option<FocusArea> {
        if let Some(area) = self.inner_tabs.set_focus(key, buffer) {
            return Some(area);
        }

        if let Some(area) = self.method_block.set_focus(key, buffer) {
            return Some(area);
        }

        if let Some(area) = self.outher_tabs.set_focus(key, buffer) {
            return Some(area);
        }

        Some(self.focus_area)
    }

    // fn set_quit(&mut self) -> bool {
    //     self.should_quit = true;
    //
    //     true
    // }
    //
    // fn change_debug_mod(&mut self, key: KeyEvent) -> bool {
    //     if key.code == KeyCode::F(12) {
    //         self.debug_mod = !self.debug_mod;
    //
    //         if let Ok(mut logger) = get_logger().lock() {
    //             logger.toggle();
    //         }
    //
    //         true
    //     } else {
    //         false
    //     }
    // }
    //
    // fn close_key(&mut self, key: KeyEvent) -> bool {
    //     if key.code == KeyCode::Char('c') && key.modifiers.contains(KeyModifiers::CONTROL) {
    //         self.should_quit = true;
    //
    //         true
    //     } else {
    //         false
    //     }
    // }
}
