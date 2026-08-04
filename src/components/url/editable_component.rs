use crate::components::{EditableComponent, UrlBlock};

impl EditableComponent for UrlBlock {
    fn is_focused(&self) -> bool {
        self.is_focused
    }

    fn is_editing(&self) -> bool {
        self.is_editing
    }

    fn content(&self) -> String {
        self.url.to_string()
    }
}
