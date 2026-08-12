use serde::Deserialize;
use strum::{Display, EnumCount, EnumIter};

#[derive(Debug, Clone, Copy, EnumIter, EnumCount, Display, Deserialize)]
pub enum HttpMethod {
    Delete,
    Get,
    Patch,
    Post,
    Put,
}

impl HttpMethod {
    pub fn to_index(&self) -> usize {
        match self {
            HttpMethod::Delete => 0,
            HttpMethod::Get => 1,
            HttpMethod::Patch => 2,
            HttpMethod::Post => 3,
            HttpMethod::Put => 4,
        }
    }

    pub fn next(&self) -> HttpMethod {
        match self {
            HttpMethod::Delete => HttpMethod::Get,
            HttpMethod::Get => HttpMethod::Patch,
            HttpMethod::Patch => HttpMethod::Post,
            HttpMethod::Post => HttpMethod::Put,
            HttpMethod::Put => HttpMethod::Delete,
        }
    }

    pub fn previos(&self) -> HttpMethod {
        match self {
            HttpMethod::Delete => HttpMethod::Put,
            HttpMethod::Get => HttpMethod::Delete,
            HttpMethod::Patch => HttpMethod::Get,
            HttpMethod::Post => HttpMethod::Patch,
            HttpMethod::Put => HttpMethod::Post,
        }
    }
}

impl Default for HttpMethod {
    fn default() -> HttpMethod {
        HttpMethod::Get
    }
}
