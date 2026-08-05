use crate::components::RequestTab;

pub enum InnerTab {
    Auth,
    Header,
    Params,
    Request,
    Response,
}

pub struct InnerTabs {
    pub active_tab: InnerTab,
    pub is_focused: bool,
    pub is_editing: bool,
    pub request_tab: RequestTab,
}

impl InnerTabs {
    pub fn new() -> Self {
        Self {
            active_tab: InnerTab::Request,
            is_focused: false,
            is_editing: false,
            request_tab: RequestTab::new(),
        }
    }
}
