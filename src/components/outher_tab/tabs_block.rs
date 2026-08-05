pub enum OutherTab {
    Auth,
    Header,
    Params,
}

pub struct OutherTabs {
    pub active_tab: OutherTab,
    pub is_focused: bool,
}

impl OutherTabs {
    pub fn new() -> Self {
        Self {
            active_tab: OutherTab::Auth,
            is_focused: false,
        }
    }
}
