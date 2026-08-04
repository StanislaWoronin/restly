use crate::components::{EditableComponent, MethodBlock};

impl EditableComponent for MethodBlock {
    fn is_focused(&self) -> bool {
        self.is_focused
    }

    fn is_editing(&self) -> bool {
        self.is_editing
    }

    fn content(&self) -> String {
        self.method.to_string()
    }
}
