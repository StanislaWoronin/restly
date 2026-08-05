use crate::components::{EditableComponent, InnerTab, InnerTabs};

impl EditableComponent for InnerTabs {
    fn is_focused(&self) -> bool {
        self.is_focused
    }

    fn is_editing(&self) -> bool {
        self.is_editing
    }

    fn content(&self) -> String {
        match self.active_tab {
            InnerTab::Request => self.request_tab.get_contentent(),
            _ => "Some default content".to_string(),
        }
    }
}
