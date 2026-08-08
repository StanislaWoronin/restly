use crossterm::event::KeyEvent;
use strum::Display;

use crate::{
    app::key_buffer::{clear_buffer, set_buffer},
    components::{InnerTabs, MethodBlock, OutherTabs, UrlBlock},
    key_handler::KeyHandler,
};

#[derive(Clone, Copy, Debug, Display, PartialEq)]
pub enum FocusArea {
    App,
    MethodBlock,
    // MethodList,
    // RequestLib,
    InnerTabs,
    OutherTabs,
    UrlBlock,
}

pub struct App {
    pub focus_area: FocusArea,
    pub method_block: MethodBlock,
    pub inner_tabs: InnerTabs,
    pub url_block: UrlBlock,
    pub outher_tabs: OutherTabs,
    pub should_quit: bool,
    pub debug_mod: bool,
}

impl App {
    pub fn new() -> Self {
        Self {
            focus_area: FocusArea::InnerTabs,
            method_block: MethodBlock::new(),
            outher_tabs: OutherTabs::new(),
            inner_tabs: InnerTabs::new(),
            url_block: UrlBlock::new(),
            should_quit: false,
            debug_mod: false,
        }
    }

    pub fn handle_key(&mut self, key: KeyEvent) {
        let is_processed = self.process_key(key, FocusArea::App)
            || self.inner_tabs.process_key(key, self.focus_area)
            || self.outher_tabs.process_key(key, self.focus_area)
            || self.method_block.process_key(key, FocusArea::MethodBlock);

        if is_processed {
            clear_buffer();
        } else {
            set_buffer(key.code);
        }
    }
}
