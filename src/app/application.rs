use crossterm::event::KeyCode;
use strum::{Display, EnumIter};

use crate::components::{
    EditableComponent, MethodBlock, UrlBlock,
    tab::request::request_tab::RequestTab,
    tree::tree_block::{self, TreeBlock},
};

#[derive(Clone, Copy, Debug, Display, EnumIter, PartialEq)]
pub enum FocusPage {
    Request,
    Auth,
    Header,
    Parameters,
}

impl Default for FocusPage {
    fn default() -> FocusPage {
        FocusPage::Request
    }
}

#[derive(Clone, Copy, Debug, Display, PartialEq)]
pub enum FocusArea {
    App,
    Method,
    RequestLib,
    Request,
    Response,
    Tree,
    Url,
}

impl Default for FocusArea {
    fn default() -> FocusArea {
        FocusArea::Request
    }
}

pub struct App {
    pub focus_page: FocusPage,
    pub focus_area: FocusArea,
    pub tree_block: TreeBlock,
    pub request_tab: RequestTab,
    pub method_block: MethodBlock,
    pub url_block: UrlBlock,
    pub should_quit: bool,
    pub debug_mod: bool,
    pub key_buffer: Option<KeyCode>,
}

impl App {
    pub fn new() -> Self {
        let mut tree_block = TreeBlock::new();
        tree_block.load_collection();

        Self {
            focus_page: FocusPage::default(),
            focus_area: FocusArea::default(),
            tree_block,
            request_tab: RequestTab::new(),
            method_block: MethodBlock::new(),
            url_block: UrlBlock::new(),
            should_quit: false,
            debug_mod: false,
            key_buffer: None,
        }
    }
}
