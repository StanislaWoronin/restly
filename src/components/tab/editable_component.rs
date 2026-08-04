use crate::components::{EditableComponent, TabsBlock, tab::tabs_block::Tab};

impl EditableComponent for TabsBlock {
    fn is_focused(&self) -> bool {
        self.is_focused
    }

    fn is_editing(&self) -> bool {
        self.is_editing
    }

    fn content(&self) -> String {
        match self.active_tab {
            Tab::Request => self.request_tab.get_contentent(),
            _ => "Some default content".to_string(),
        }
    }
}
