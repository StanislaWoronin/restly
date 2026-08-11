use crate::components::{EditableComponent, MethodBlock};

impl EditableComponent for MethodBlock {
    fn is_focused(&self) -> bool {
        false
    }

    fn is_editing(&self) -> bool {
        true
    }

    fn content(&self) -> String {
        self.method.to_string()
    }
}
