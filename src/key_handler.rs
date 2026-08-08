use crossterm::event::{KeyCode, KeyEvent};

use crate::{
    FocusArea,
    app::{
        key_buffer::{clear_buffer, get_buffer, is_buffer_empty, set_buffer},
        log::LogLevel,
    },
    debug_log,
};

pub enum Direction {
    Positive,
    Negative,
}

pub trait KeyHandler {
    fn is_focused(&self, _focus_area: FocusArea) -> bool {
        true
    }

    fn set_quit(&mut self) -> bool {
        debug_log!("'set_quit' processed: false");

        false
    }

    fn change_tab(&mut self, _direction: Direction) -> bool {
        debug_log!("'change_tab' processed: false");

        false
    }

    fn set_visiable(&mut self, _key: KeyEvent) -> bool {
        debug_log!("'set_visiable' processed: false");

        false
    }

    fn process_key(&mut self, key: KeyEvent, focus_area: FocusArea) -> bool {
        let is_process = if self.is_focused(focus_area) {
            let modifier_str = if !key.modifiers.is_empty() {
                format!("modifiers: {}", key.modifiers)
            } else {
                String::new()
            };

            let buffer_str = get_buffer()
                .map(|k| format!(" with buffer: {:?}", k))
                .unwrap_or_default();

            debug_log!(
                LogLevel::Debug,
                "Process key: {}{}, {}for component {}",
                key.code,
                buffer_str,
                modifier_str,
                focus_area,
            );

            self.close_key(key) || self.change_debug_mod(key) || self.change_key(key)
        } else {
            self.set_visiable(key)
        };

        is_process
    }

    fn close_key(&mut self, key: KeyEvent) -> bool {
        let is_processed = if key.code == KeyCode::Esc {
            self.set_quit()
        } else {
            false
        };

        debug_log!("'close_key' processed: {is_processed}",);

        is_processed
    }

    fn change_debug_mod(&mut self, _key: KeyEvent) -> bool {
        debug_log!("'change_debug_mod' processed: false");

        false
    }

    fn change_key(&mut self, key: KeyEvent) -> bool {
        let is_processed = match key.code {
            KeyCode::Tab => self.change_tab(Direction::Positive),
            KeyCode::BackTab => self.change_tab(Direction::Negative),
            _ => false,
        };

        debug_log!("'change_key' processed: {is_processed}");

        is_processed
    }
}
