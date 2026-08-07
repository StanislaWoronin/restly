use crossterm::event::{KeyCode, KeyEvent};

use crate::{FocusArea, app::log::LogLevel, debug_log};

pub enum Direction {
    Positive,
    Negative,
}

pub trait KeyHandler {
    fn is_focused(&self, _focus_area: FocusArea) -> bool {
        true
    }

    fn set_quit(&mut self) {
        debug_log!("Metod 'set_quit' not allowed for");
    }

    fn change_tab(&mut self, _direction: Direction) {
        debug_log!("Metod 'change_tab' not allowed for");
    }

    fn process_key(&mut self, key: KeyEvent, focus_area: FocusArea) -> bool {
        debug_log!(
            LogLevel::Debug,
            "Process key: {}, modificator: {}, for component {}",
            key.code,
            key.modifiers,
            focus_area,
        );

        if self.is_focused(focus_area) {
            self.close_key(key) || self.change_debug_mod(key) || self.change_key(key)
        } else {
            false
        }
    }

    fn close_key(&mut self, key: KeyEvent) -> bool {
        if key.code == KeyCode::Esc {
            self.set_quit();

            true
        } else {
            false
        }
    }

    fn change_debug_mod(&mut self, _key: KeyEvent) -> bool {
        debug_log!("Metod 'change_debug_mod' not allowed");

        false
    }

    fn change_key(&mut self, key: KeyEvent) -> bool {
        match key.code {
            KeyCode::Tab => {
                self.change_tab(Direction::Positive);

                true
            }
            KeyCode::BackTab => {
                self.change_tab(Direction::Negative);

                true
            }
            _ => false,
        }
    }
}
