use ratatui::{
    Frame,
    layout::{Alignment, Constraint, Direction, Layout, Rect},
    style::{Color, Style},
    widgets::{Block, BorderType, Borders, Paragraph},
};

use std::fmt;

#[derive(Debug, Clone)]
pub enum HttpMethod {
    Get,
    Post,
    Put,
    Delete,
}

impl fmt::Display for HttpMethod {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        let s = match self {
            HttpMethod::Get => "GET",
            HttpMethod::Post => "POST",
            HttpMethod::Put => "PUT",
            HttpMethod::Delete => "DELETE",
        };
        write!(f, "{}", s)
    }
}

pub struct MethodBlock {
    pub method: HttpMethod,
    is_focused: bool,
    is_editing: bool,
}

impl MethodBlock {
    pub fn new() -> Self {
        Self {
            method: HttpMethod::Get,
            is_focused: false,
            is_editing: false,
        }
    }

    pub fn draw(&self, frame: &mut Frame, area: Rect) {
        let border_color = if self.is_focused {
            if self.is_editing {
                Color::LightRed
            } else {
                Color::LightGreen
            }
        } else {
            Color::DarkGray
        };

        let value = self.method.to_string();

        // Создаем блок БЕЗ заголовка
        let block = Block::default()
            .borders(Borders::ALL)
            .border_style(Style::default().fg(border_color))
            .border_type(BorderType::Rounded);

        // Создаем параграф с текстом по центру
        let paragraph = Paragraph::new(value)
            .block(block)
            .alignment(Alignment::Center);

        frame.render_widget(paragraph, area);

        // Рисуем заголовок поверх блока
        let title = " Method ";
        let title_x = area.x + (area.width - title.len() as u16) / 2;
        let title_area = Rect {
            x: title_x,
            y: area.y,
            width: title.len() as u16,
            height: 1,
        };

        frame.render_widget(
            Paragraph::new(title)
                .style(Style::default().fg(border_color))
                .alignment(Alignment::Center),
            title_area,
        );
    }
}
