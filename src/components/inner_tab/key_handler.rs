use crate::{
    app::application::FocusArea,
    components::{
        INNER_TAB,
        InnerTab::{self},
        InnerTabs,
        inner_tab::tabs_block::INNER_TAB_LEN,
    },
    key_handler::{Direction, KeyHandler},
};

impl KeyHandler for InnerTabs {
    fn is_focused(&self, area: FocusArea) -> bool {
        match area {
            FocusArea::InnerTabs => {
                matches!(
                    INNER_TAB[self.active_tab],
                    InnerTab::Request | InnerTab::Response
                )
            }
            _ => false,
        }
    }

    fn change_tab(&mut self, direction: Direction) -> bool {
        match direction {
            Direction::Positive => {
                self.active_tab = (self.active_tab + 1) % INNER_TAB_LEN;

                true
            }
            Direction::Negative => {
                self.active_tab = (self.active_tab + INNER_TAB_LEN - 1) % INNER_TAB_LEN;

                true
            }
            _ => false,
        }
    }
}
