use crate::{
    components::{InnerTabs, inner_tab::tabs_block::INNER_TAB_LEN},
    key_handler::{Direction, KeyHandler},
};

impl KeyHandler for InnerTabs {
    fn change_tab(&mut self, direction: Direction) {
        match direction {
            Direction::Positive => {
                self.active_tab = (self.active_tab + 1) % INNER_TAB_LEN;
            }
            Direction::Negative => {
                self.active_tab = (self.active_tab + INNER_TAB_LEN - 1) % INNER_TAB_LEN;
            }
        }
    }
}
