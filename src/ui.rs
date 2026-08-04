use ratatui::{
    Frame,
    layout::{Constraint, Direction, Layout, Rect},
};

use crate::{
    app::{App, FocusArea},
    components::EditableComponent,
};

pub fn ui(frame: &mut Frame, app: &mut App) {
    let focus = app.focus_area.clone();

    match app.focus_area {
        // Группа вариантов, которые используют draw_page()
        FocusArea::MethodBlock | FocusArea::TabsBlock | FocusArea::UrlBlock => {
            draw_page(app, frame)
        }

        // Одиночные варианты
        // FocusArea::AuthManager => AuthManager::draw(),
        // FocusArea::MethodList => MethodList::draw(),
        // FocusArea::QueryParamsManager => QueryParamsManager::draw(),

        // Обработка всех остальных (если есть)
        _ => panic!("Focus area {:?} not allowed", focus),
    }
}

fn draw_page(app: &App, frame: &mut Frame) {
    // Основная область с отступами
    let area = frame.area();
    let inner_area = Rect {
        x: area.x + 1,
        y: area.y + 1,
        width: area.width - 2,
        height: area.height - 2,
    };

    // Делим внутреннюю область
    let [top_area, tabs_area] = Layout::default()
        .direction(Direction::Vertical)
        .constraints([Constraint::Length(3), Constraint::Min(0)])
        .split(inner_area)
        .as_ref()
        .try_into()
        .unwrap();

    let [method_area, url_area] = Layout::default()
        .direction(Direction::Horizontal)
        .constraints([Constraint::Length(10), Constraint::Min(0)])
        .split(top_area)
        .as_ref()
        .try_into()
        .unwrap();

    app.method_block.draw(frame, method_area);
    app.url_block.draw(frame, url_area);
    app.tab_block.draw(frame, tabs_area);
}
