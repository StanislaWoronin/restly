use crate::components::RequestTab;

pub enum Tab {
    Auth,
    Header,
    Params,
    Request,
    Response,
}

pub struct TabsBlock {
    pub active_tab: Tab,
    pub is_focused: bool,
    pub is_editing: bool,
    pub request_tab: RequestTab,
}

impl TabsBlock {
    pub fn new() -> Self {
        Self {
            active_tab: Tab::Request,
            is_focused: false,
            is_editing: false,
            request_tab: RequestTab::new(),
        }
    }
}
