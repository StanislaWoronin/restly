use crossterm::event::{KeyCode, KeyEvent};

use crate::{app::application::FocusArea, components::InnerTabs, key_handler::KeyHandler};

impl KeyHandler for InnerTabs {
    fn get_component_name(&self) -> FocusArea {
        FocusArea::InnerTabs
    }

    fn set_focus(&self, key: KeyEvent, buffer: &mut KeyCode) -> Option<FocusArea> {
        self.request_tab.set_focus(key, buffer)
    }

    //     match FOCUS_AREA.get().unwrap() {
    //         FocusArea::InnerTabs => {
    //             matches!(
    //                 INNER_TAB[self.active_tab],
    //                 InnerTab::Request | InnerTab::Response
    //             )
    //         }
    //         _ => false,
    //     }
    // }
    //
    // fn let_change(&mut self, direction: Direction) -> bool {
    //     match direction {
    //         Direction::Positive => {
    //             self.active_tab = (self.active_tab + 1) % INNER_TAB_LEN;
    //         }
    //         Direction::Negative => {
    //             self.active_tab = (self.active_tab + INNER_TAB_LEN - 1) % INNER_TAB_LEN;
    //         }
    //     };
    //
    //     true
    // }
}
