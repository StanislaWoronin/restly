use crate::components::{method_block::MethodBlock, url_block::UrlBlock};

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
    pub url_block: UrlBlock,
}

impl App {
    pub fn new() -> Self {
        Self {
            focus_area: FocusArea::UrlBlock,
            method_block: MethodBlock::new(),
            url_block: UrlBlock::new(),
        }
    }
}
