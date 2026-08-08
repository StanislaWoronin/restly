use strum::Display;

#[derive(Debug, Clone, Display)]
pub enum HttpMethod {
    Delete,
    Get,
    Patch,
    Post,
    Put,
}

pub const HTTP_METHOD: [HttpMethod; 5] = [
    HttpMethod::Delete,
    HttpMethod::Get,
    HttpMethod::Patch,
    HttpMethod::Post,
    HttpMethod::Put,
];

pub const HTTP_METHOD_LEN: usize = HTTP_METHOD.len();
