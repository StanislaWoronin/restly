use crate::components::{MethodBlock, TabsBlock, UrlBlock};

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
    pub tab_block: TabsBlock,
    pub url_block: UrlBlock,
}

impl App {
    pub fn new() -> Self {
        Self {
            focus_area: FocusArea::UrlBlock,
            method_block: MethodBlock::new(),
            tab_block: TabsBlock::new(),
            url_block: UrlBlock::new(),
        }
    }
}
