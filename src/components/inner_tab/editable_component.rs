use crate::components::{EditableComponent, InnerTab, InnerTabs};

impl EditableComponent for InnerTabs {
    fn is_focused(&self) -> bool {
        self.is_focused
    }

    fn is_editing(&self) -> bool {
        self.is_editing
    }

    fn content(&self) -> String {
        let active_tab_name = self.get_tab_name();

        match active_tab_name {
            InnerTab::Request => self.request_tab.get_contentent(),
            _ => "Some default content".to_string(),
        }
    }
}
