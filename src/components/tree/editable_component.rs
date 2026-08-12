use crate::components::{EditableComponent, tree::tree_block::TreeBlock};

impl EditableComponent for TreeBlock {
    fn is_focused(&self) -> bool {
        self.is_visiable
    }

    fn is_editing(&self) -> bool {
        self.is_editing
    }

    fn content(&self) -> String {
        String::new()
    }
}
