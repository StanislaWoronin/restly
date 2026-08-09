use crate::components::{EditableComponent, OutherTabs};

impl EditableComponent for OutherTabs {
    fn is_focused(&self) -> bool {
        self.is_focused
    }

    fn is_editing(&self) -> bool {
        self.is_editing
    }

    fn content(&self) -> String {
        // match self.active_tab {
        //     // OutherTab::Auth => self.auth_tab.get_contentent(),
        //     _ => "Some default auth content".to_string(),
        // }
        "Some default auth content".to_string()
    }
}
