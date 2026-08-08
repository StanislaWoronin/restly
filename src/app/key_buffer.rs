use crossterm::event::KeyCode;
use once_cell::sync::Lazy;
use std::sync::Mutex;

static BUFFER: Lazy<Mutex<Option<KeyCode>>> = Lazy::new(|| Mutex::new(None));

pub fn set_buffer(key: KeyCode) {
    if let Ok(mut buffer) = BUFFER.lock() {
        *buffer = Some(key);
    }
}

pub fn clear_buffer() {
    if let Ok(mut buffer) = BUFFER.lock() {
        *buffer = None;
    }
}

pub fn get_buffer() -> Option<KeyCode> {
    BUFFER.lock().map(|guard| *guard).unwrap_or(None)
}

pub fn is_buffer_empty() -> bool {
    BUFFER.lock().map(|b| b.is_none()).unwrap_or(true)
}
