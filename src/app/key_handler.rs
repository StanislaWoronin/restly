use crossterm::event::{KeyCode, KeyEvent, KeyModifiers};

use crate::{App, app::log::get_logger, key_handler::KeyHandler};

impl KeyHandler for App {
    fn set_quit(&mut self) -> bool {
        self.should_quit = true;

        true
    }

    fn change_debug_mod(&mut self, key: KeyEvent) -> bool {
        if key.code == KeyCode::F(12) {
            self.debug_mod = !self.debug_mod;

            if let Ok(mut logger) = get_logger().lock() {
                logger.toggle();
            }

            true
        } else {
            false
        }
    }

    fn close_key(&mut self, key: KeyEvent) -> bool {
        if key.code == KeyCode::Char('c') && key.modifiers.contains(KeyModifiers::CONTROL) {
            self.should_quit = true;

            true
        } else {
            false
        }
    }
}
