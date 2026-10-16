use crate::{FocusArea, debug_log};
use color_eyre::Result;
use crossterm::event::KeyEvent;

pub enum Direction {
    Positive,
    Negative,
}

pub trait KeyHandler {
    fn get_component_name(&self) -> FocusArea;

    fn set_focus(&mut self, _key: KeyEvent) -> bool {
        debug_log!("Method 'set_focus' not allowed");
        false
    }

    fn process_key(&mut self, key: KeyEvent) -> Result<bool, Box<dyn std::error::Error>>;
}
