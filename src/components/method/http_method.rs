use core::fmt::{Display, Formatter, Result};

#[derive(Debug, Clone)]
pub enum HttpMethod {
    Get,
    Post,
    Put,
    Delete,
}

impl Display for HttpMethod {
    fn fmt(&self, f: &mut Formatter<'_>) -> Result {
        let s = match self {
            HttpMethod::Get => "GET",
            HttpMethod::Post => "POST",
            HttpMethod::Put => "PUT",
            HttpMethod::Delete => "DELETE",
        };
        write!(f, "{}", s)
    }
}
