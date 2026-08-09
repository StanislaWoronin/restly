use crossterm::event::{KeyCode, KeyEvent};
use strum::Display;

use crate::{
    components::{InnerTabs, MethodBlock, OutherTabs, UrlBlock},
    key_handler::KeyHandler,
};

#[derive(Clone, Copy, Debug, Display, PartialEq)]
pub enum FocusArea {
    App,
    MethodBlock,
    RequestLib,
    InnerTabs,
    RequestTab,
    ResponseTab,
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
    pub key_buffer: Option<KeyCode>,
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
            key_buffer: None,
        }
    }

    pub fn set_buffer(&mut self, key: KeyCode, is_processed: bool) {
        if is_processed {
            self.key_buffer = None;
        } else {
            self.key_buffer = Some(key);
        }
    }

    pub fn change_focus(&mut self, key: KeyCode) {
        let new_area = self.set_focus(key, &mut self.key_buffer);

        if Some(new_area).is_some() {
            self.key_buffer = None;

            self.focus_area = new_area;
        };
    }

    pub fn handle_key(&mut self, key: KeyEvent) {
        // let is_processed = self.process_key(&mut self, key)
        //     || self.inner_tabs.process_key(&mut self, key)
        //     || self.outher_tabs.process_key(&mut self, key)
        //     || self.method_block.process_key(&mut self, key);
        //
        // if is_processed {
        //     clear_buffer();
        // } else {
        //     set_buffer(key.code);
        // }
    }
}
