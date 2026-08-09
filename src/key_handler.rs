use crossterm::event::{KeyCode, KeyEvent};

use crate::{
    App, FocusArea,
    app::{key_buffer::get_buffer, log::LogLevel},
    debug_log,
};

pub enum Direction {
    Positive,
    Negative,
}

pub trait KeyHandler {
    fn get_component_name(&self) -> FocusArea;

    fn set_focus(&self, _key: KeyEvent, _buffer: &mut KeyCode) -> Option<FocusArea> {
        debug_log!("Method 'set_focus' not allowed");

        None
    }

    // fn is_focused(&self) -> bool {
    //     true
    // }
    //
    // fn set_quit(&mut self) -> bool {
    //     debug_log!("'set_quit' processed: false");
    //
    //     false
    // }
    //
    // fn let_change(&mut self, _direction: Direction) -> bool {
    //     debug_log!("'let_change' processed: false");
    //
    //     false
    // }
    //
    // fn set_visiable(&mut self, _key: KeyEvent) -> bool {
    //     debug_log!("'set_visiable' processed: false");
    //
    //     false
    // }
    //
    // fn process_key(&mut self, app: &mut App, key: KeyEvent) -> bool {
    //     let modifier_str = if !key.modifiers.is_empty() {
    //         format!("modifiers: {}", key.modifiers)
    //     } else {
    //         String::new()
    //     };
    //
    //     let buffer_str = get_buffer()
    //         .map(|k| format!(", with buffer: {:?}", k))
    //         .unwrap_or_default();
    //
    //     debug_log!(
    //         LogLevel::Debug,
    //         "Process key: {}{}, {}for component {}",
    //         key.code,
    //         buffer_str,
    //         modifier_str,
    //         self.get_component_name(),
    //     );
    //
    //     self.close_key(key)
    //         || self.change_debug_mod(key)
    //         || self.change_key(key)
    //         || self.set_visiable(key)
    // }
    //
    // fn close_key(&mut self, key: KeyEvent) -> bool {
    //     let is_processed = if key.code == KeyCode::Esc {
    //         self.set_quit()
    //     } else {
    //         false
    //     };
    //
    //     debug_log!("'close_key' processed: {is_processed}",);
    //
    //     is_processed
    // }
    //
    // fn change_debug_mod(&mut self, _key: KeyEvent) -> bool {
    //     debug_log!("'change_debug_mod' processed: false");
    //
    //     false
    // }
    //
    // fn change_key(&mut self, key: KeyEvent) -> bool {
    //     let is_processed = match key.code {
    //         KeyCode::Tab => self.let_change(Direction::Positive),
    //         KeyCode::BackTab => self.let_change(Direction::Negative),
    //         _ => false,
    //     };
    //
    //     debug_log!("'change_key' processed: {is_processed}");
    //
    //     is_processed
    // }
}
