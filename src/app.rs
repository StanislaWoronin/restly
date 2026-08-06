use crossterm::event::{KeyCode, KeyEvent, KeyModifiers};

use crate::{
    components::{InnerTabs, MethodBlock, OutherTabs, UrlBlock},
    key_handler::KeyHandler,
};

#[derive(Clone, Debug)]
pub enum FocusArea {
    /// Виджет для настройки аутентификации
    AuthManager,
    /// Блок для отображения выбранного метода
    MethodBlock,
    /// Виджет для выбора метода запроса
    MethodList,
    /// Виджет для настройки квери параметров
    QueryParamsManager,
    /// Виджет для создания предостановленных путей
    PathVariables,
    /// Виджет для хранения истории запросов
    RequestLib,
    /// Вкладки Request/Response
    TabsBlock,
    /// Блок для ввода URL-запроса
    UrlBlock,
}

pub struct App {
    pub focus_area: FocusArea,
    pub method_block: MethodBlock,
    pub inner_tabs: InnerTabs,
    pub url_block: UrlBlock,
    pub outher_tabs: OutherTabs,
    pub should_quit: bool,
}

impl App {
    pub fn new() -> Self {
        Self {
            focus_area: FocusArea::UrlBlock,
            method_block: MethodBlock::new(),
            outher_tabs: OutherTabs::new(),
            inner_tabs: InnerTabs::new(),
            url_block: UrlBlock::new(),
            should_quit: false,
        }
    }

    pub fn process_key(&mut self, key: KeyEvent) {
        if key.code == KeyCode::Char('c') && key.modifiers.contains(KeyModifiers::CONTROL) {
            self.should_quit = true;
        }

        self.inner_tabs.process_key(key);
        self.outher_tabs.process_key(key);
    }
}

impl KeyHandler for App {
    fn set_quit(&mut self) {
        self.should_quit = true;
    }
}
