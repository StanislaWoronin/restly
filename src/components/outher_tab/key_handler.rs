use crate::{
    app::application::FocusArea,
    components::{OUTER_TAB, OUTER_TAB_LEN, OutherTab, OutherTabs},
    key_handler::{Direction, KeyHandler},
};

impl KeyHandler for OutherTabs {
    fn is_focused(&self, area: FocusArea) -> bool {
        match area {
            FocusArea::OutherTabs => {
                matches!(
                    OUTER_TAB[self.active_tab],
                    OutherTab::Auth | OutherTab::Header | OutherTab::Params | OutherTab::Request
                )
            }
            _ => false,
        }
    }

    fn change_tab(&mut self, direction: Direction) -> bool {
        match direction {
            Direction::Positive => {
                self.active_tab = (self.active_tab + 1) % OUTER_TAB_LEN;

                true
            }
            Direction::Negative => {
                self.active_tab = (self.active_tab + OUTER_TAB_LEN - 1) % OUTER_TAB_LEN;

                true
            }
            _ => false,
        }
    }
}
