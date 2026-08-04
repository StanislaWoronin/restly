use ratatui::{
    Frame,
    layout::{Alignment, Rect},
    style::Style,
    widgets::{Block, BorderType, Borders, Paragraph},
};

use crate::components::{EditableComponent, method::HttpMethod};

pub struct MethodBlock {
    pub method: HttpMethod,
    pub is_focused: bool,
    pub is_editing: bool,
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
        let border_color = self.border_color();

        let value = self.method.to_string();

        let text_width = value.len();
        let area_width = (area.width - 2) as usize;

        let padding = if text_width < area_width {
            (area_width - text_width) / 2
        } else {
            0
        };

        let padded = format!("{:>width$}", value, width = text_width + padding);

        let block = Block::default()
            .borders(Borders::ALL)
            .border_style(Style::default().fg(border_color))
            .border_type(BorderType::Rounded);

        let paragraph = Paragraph::new(padded)
            .block(block)
            .alignment(Alignment::Left);

        frame.render_widget(paragraph, area);
    }
}
