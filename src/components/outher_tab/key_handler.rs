use crossterm::event::{KeyCode, KeyEvent, KeyModifiers};

use crate::{app::application::FocusArea, components::OutherTabs, key_handler::KeyHandler};

impl KeyHandler for OutherTabs {
    fn get_component_name(&self) -> FocusArea {
        FocusArea::OutherTabs
    }

    fn set_focus(&self, key: KeyEvent, buffer: &mut KeyCode) -> Option<FocusArea> {
        if *buffer == KeyCode::Char(' ')
            && key.modifiers == KeyModifiers::SHIFT
            && key.code == KeyCode::Char('r')
        {
            Some(self.get_component_name())
        } else {
            None
        }
    }

    // fn is_focused(&self) -> bool {
    //     match FOCUS_AREA.get().unwrap() {
    //         FocusArea::OutherTabs => {
    //             matches!(
    //                 OUTER_TAB[self.active_tab],
    //                 OutherTab::Auth | OutherTab::Header | OutherTab::Params | OutherTab::Request
    //             )
    //         }
    //         _ => false,
    //     }
    // }
    //
    // fn let_change(&mut self, direction: Direction) -> bool {
    //     match direction {
    //         Direction::Positive => {
    //             self.active_tab = (self.active_tab + 1) % OUTER_TAB_LEN;
    //
    //             true
    //         }
    //         Direction::Negative => {
    //             self.active_tab = (self.active_tab + OUTER_TAB_LEN - 1) % OUTER_TAB_LEN;
    //
    //             true
    //         }
    //     }
    // }
}
