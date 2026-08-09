use crate::{FocusArea, components::MethodBlock, key_handler::KeyHandler};
use crossterm::event::{KeyCode, KeyEvent};

impl KeyHandler for MethodBlock {
    fn get_component_name(&self) -> FocusArea {
        FocusArea::MethodBlock
    }

    fn set_focus(&self, key: KeyEvent, buffer: &mut KeyCode) -> Option<FocusArea> {
        if *buffer == KeyCode::Char(' ') && key.code == KeyCode::Char('m') {
            Some(self.get_component_name())
        } else {
            None
        }
    }

    // fn is_focused(&self) -> bool {
    //     self.is_editing
    // }
    //
    // fn set_visiable(&mut self, key: KeyEvent) -> bool {
    //     let is_processed =
    //         if get_buffer() == Some(KeyCode::Char(' ')) && key.code == KeyCode::Char('m') {
    //             self.is_editing = !self.is_editing;
    //
    //             true
    //         } else {
    //             false
    //         };
    //
    //     debug_log!("here");
    //
    //     if self.is_editing {
    //         FOCUS_AREA.set(FocusArea::MethodBlock).is_err();
    //     } else {
    //         FOCUS_AREA.set(FocusArea::InnerTabs).is_err();
    //     };
    //
    //     debug_log!(LogLevel::Debug, "{}", FOCUS_AREA.get().unwrap());
    //
    //     debug_log!("Process 'set_visiable': {is_processed}");
    //
    //     is_processed
    // }
    //
    // fn change_key(&mut self, key: KeyEvent) -> bool {
    //     let is_processed = match key.code {
    //         KeyCode::Tab => self.let_change(Direction::Positive),
    //         KeyCode::BackTab => self.let_change(Direction::Negative),
    //         KeyCode::Down => self.let_change(Direction::Positive),
    //         KeyCode::Up => self.let_change(Direction::Negative),
    //         KeyCode::Char('j') => self.let_change(Direction::Positive),
    //         KeyCode::Char('k') => self.let_change(Direction::Negative),
    //         _ => false,
    //     };
    //
    //     debug_log!("'change_key' processed: {is_processed}");
    //
    //     is_processed
    // }
    //
    // fn let_change(&mut self, direction: Direction) -> bool {
    //     match direction {
    //         Direction::Positive => {
    //             self.method = (self.method + 1) % HTTP_METHOD_LEN;
    //         }
    //         Direction::Negative => {
    //             self.method = (self.method + HTTP_METHOD_LEN - 1) % HTTP_METHOD_LEN;
    //         }
    //     };
    //
    // true
    // }
}
