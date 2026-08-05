use ratatui::{
    Frame,
    layout::{Constraint, Direction, Layout, Rect},
    style::{Color, Style},
    widgets::{Block, BorderType, Borders},
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

fn calc_area(area: Rect) -> Rect {
    Rect {
        x: area.x + 2,
        y: area.y + 1,
        width: area.width - 4,
        height: area.height - 2,
    }
}

fn draw_block(frame: &mut Frame, area: Rect, border_color: Color) {
    let block = Block::default()
        .borders(Borders::ALL)
        .border_style(Style::default().fg(border_color))
        .border_type(BorderType::Rounded);

    frame.render_widget(block, area);
}

fn draw_page(app: &App, frame: &mut Frame) {
    let inner_area = calc_area(frame.area());

    draw_block(frame, inner_area, Color::DarkGray);

    let border_block = Block::default()
        .borders(Borders::ALL)
        .border_style(Style::default().fg(Color::DarkGray))
        .border_type(BorderType::Rounded);

    frame.render_widget(border_block, inner_area);

    let content_area = calc_area(inner_area);

    let [top_area, tabs_area] = Layout::default()
        .direction(Direction::Vertical)
        .constraints([Constraint::Length(3), Constraint::Min(0)])
        .split(content_area)
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
    app.inner_tabs.draw(frame, tabs_area);
}
