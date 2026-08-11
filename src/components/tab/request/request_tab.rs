pub struct RequestTab {
    pub content: Vec<String>,
}

impl RequestTab {
    pub fn new() -> Self {
        Self {
            content: vec![String::new()],
        }
    }

    pub fn get_contentent(&self) -> String {
        "Some string".to_string()
    }
}
