pub struct UrlBlock {
    pub url: String,
    pub is_focused: bool,
    pub is_editing: bool,
}

impl UrlBlock {
    pub fn new() -> Self {
        Self {
            url: String::new(),
            is_focused: false,
            is_editing: false,
        }
    }
}
