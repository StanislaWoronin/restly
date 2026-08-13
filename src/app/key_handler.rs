use crossterm::event::{KeyCode, KeyEvent, KeyModifiers};

use crate::{
    App,
    FocusArea::{self},
    app::log::{LogLevel, get_logger},
    debug_log,
    key_handler::KeyHandler,
};

impl KeyHandler for App {
    fn get_component_name(&self) -> crate::FocusArea {
        FocusArea::App
    }

    fn set_focus(&mut self, key: KeyEvent) -> bool {
        match (key.code, self.key_buffer) {
            (KeyCode::Char('p'), Some(KeyCode::Char(' '))) => {
                self.focus_area = FocusArea::Request;
                true
            }
            (KeyCode::Char('r'), Some(KeyCode::Char(' '))) => {
                self.focus_area = FocusArea::Response;
                true
            }
            (KeyCode::Char('m'), Some(KeyCode::Char(' '))) => {
                if self.focus_area == FocusArea::Method {
                    self.focus_area = FocusArea::default();
                } else {
                    self.focus_area = FocusArea::Method;
                }
                true
            }
            (KeyCode::Char('e'), Some(KeyCode::Char(' '))) => {
                self.tree_block.is_visible = !self.tree_block.is_visible;
                if self.tree_block.is_visible {
                    self.focus_area = FocusArea::Tree;
                }
                true
            }
            _ => false,
        }
    }

    fn process_key(&mut self, key: KeyEvent) -> bool {
        let is_processed = self.set_focus(key);

        if is_processed {
            debug_log!(LogLevel::Debug, "Focus changed on: {}", self.focus_area);
            return false;
        }

        let is_processed = match (key.code, key.modifiers) {
            (KeyCode::Char('c'), KeyModifiers::CONTROL) => {
                self.should_quit = true;
                true
            }
            (KeyCode::F(12), _) => {
                self.debug_mod = !self.debug_mod;
                if let Ok(mut logger) = get_logger().lock() {
                    logger.toggle();
                }
                true
            }
            (KeyCode::Char('L'), KeyModifiers::SHIFT) => {
                debug_log!("Load collection");
                let _ = self.tree_block.load_collection();
                true
            }
            _ => false,
        };

        if is_processed {
            debug_log!("Global key pricessed");
            return false;
        }

        let is_processed = match self.focus_area {
            FocusArea::Method => self.method_block.process_key(key),
            _ => false,
        };

        if is_processed {
            let mut log_msg = format!("Key: {}", key.code);

            if !key.modifiers.is_empty() {
                log_msg.push_str(&format!(", with modifier: {}", key.modifiers));
            }

            if let Some(buffer) = self.key_buffer {
                log_msg.push_str(&format!(" and buffer: {}", buffer));
            }

            log_msg.push_str(&format!(" processed for {}", self.focus_area));

            debug_log!(LogLevel::Debug, "{}", log_msg);
            self.key_buffer = None;
        } else {
            self.key_buffer = Some(key.code);
        }

        is_processed
    }
}
