use crate::{
    components::{OUTER_TAB_LEN, OutherTabs},
    key_handler::{Direction, KeyHandler},
};

impl KeyHandler for OutherTabs {
    fn change_tab(&mut self, direction: Direction) {
        match direction {
            Direction::Positive => {
                self.active_tab = (self.active_tab + 1) % OUTER_TAB_LEN;
            }
            Direction::Negative => {
                self.active_tab = (self.active_tab + OUTER_TAB_LEN - 1) % OUTER_TAB_LEN;
            }
        }
    }
}
