use ratatui::{
    Frame,
    layout::{Constraint, Direction, Layout, Rect},
    style::Color,
};

use crate::{
    App, FocusArea,
    app::{application::FocusPage, log::get_logger},
    components::{
        EditableComponent, page::page_block::draw_page_block, tab::tabs_block::draw_tab_block,
    },
};

pub fn ui(frame: &mut Frame, app: &mut App) {
    if app.focus_page == FocusPage::Request {
        draw_request_page(app, frame);

        if app.focus_area == FocusArea::Method {
            app.method_block.draw_popup(frame, app.debug_mod);
        };
    }
}

fn calc_area(area: Rect, is_debug_mod: bool) -> Rect {
    let debug_factor = if is_debug_mod { 2 } else { 1 };

    Rect {
        x: area.x + 2,
        y: area.y + 1,
        width: area.width / debug_factor - 4,
        height: area.height - 2,
    }
}

fn calc_debug_area(area: Rect) -> Rect {
    Rect {
        x: area.width + 4,
        y: area.y,
        width: area.width,
        height: area.height,
    }
}

fn draw_request_page(app: &App, frame: &mut Frame) {
    let is_debug_mod = app.debug_mod;

    let page_area = calc_area(frame.area(), is_debug_mod);

    draw_page_block(frame, page_area, Color::DarkGray, app.focus_page);

    if is_debug_mod {
        let debug_area = calc_debug_area(page_area);

        if let Ok(logger) = get_logger().lock() {
            logger.draw(frame, debug_area);
        }
    }

    let mut content_area = calc_area(page_area, false);

    let is_tree_visiable = app.tree_block.is_visible;

    if is_tree_visiable {
        let [tree_area, new_content_area] = Layout::default()
            .direction(Direction::Horizontal)
            .constraints([Constraint::Percentage(20), Constraint::Min(0)])
            .split(content_area)
            .as_ref()
            .try_into()
            .unwrap();

        app.tree_block.draw(frame, tree_area);

        content_area = new_content_area;
        content_area.x += 1;
        content_area.width -= 1;
    }

    let [top_area, tab_area] = Layout::default()
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

    draw_tab_block(frame, tab_area, Color::DarkGray, app);
}
