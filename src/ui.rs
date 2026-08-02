use ratatui::{
    Frame,
    layout::{Constraint, Direction, Layout, Rect},
    widgets::{Block, Borders},
};

use crate::app::{App, FocusArea};

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

fn _draw_page(app: &App, frame: &mut Frame) {
    let [url_area, _] = Layout::default()
        .direction(Direction::Vertical)
        .constraints([Constraint::Length(3), Constraint::Min(0)])
        .split(frame.area())
        .as_ref()
        .try_into()
        .unwrap();

    // self.method_block.draw();
    // self.tabs_block.draw();
    app.url_block.draw(frame, url_area);
}

fn draw_page(_app: &App, frame: &mut Frame) {
    // Основная область с отступами
    let area = frame.area();
    let inner_area = Rect {
        x: area.x + 1,
        y: area.y + 1,
        width: area.width - 2,
        height: area.height - 2,
    };

    // Делим внутреннюю область
    let main_chunks = Layout::default()
        .direction(Direction::Vertical)
        .constraints([Constraint::Length(3), Constraint::Min(0)])
        .split(inner_area);

    let top_chunks = Layout::default()
        .direction(Direction::Horizontal)
        .constraints([Constraint::Length(8), Constraint::Min(0)])
        .split(main_chunks[0]);

    // Рендерим с рамками (если нужно)
    let url_block = Block::default().borders(Borders::ALL).title("URL");
    frame.render_widget(url_block, top_chunks[0]);

    let tabs_block = Block::default().borders(Borders::ALL).title("Tabs");
    frame.render_widget(tabs_block, top_chunks[1]);

    let method_block = Block::default().borders(Borders::ALL).title("Methods");
    frame.render_widget(method_block, main_chunks[1]);
}
