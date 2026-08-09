use ratatui::{
    Frame,
    layout::{Alignment, Rect},
    style::{Color, Style},
    widgets::{
        Block,
        BorderType::{self, Rounded},
        Borders, Clear, List, ListItem, ListState, Paragraph,
    },
};

use crate::components::{
    EditableComponent,
    method::{HTTP_METHOD, HTTP_METHOD_LEN, HttpMethod},
};

pub struct MethodBlock {
    pub method: usize,
    pub is_editing: bool,
}

impl MethodBlock {
    pub fn new() -> Self {
        Self {
            method: 0,
            is_editing: false,
        }
    }

    pub fn get_method_name(&self) -> HttpMethod {
        match HTTP_METHOD.get(self.method) {
            Some(&tab) => tab,
            None => HttpMethod::Get,
        }
    }

    pub fn draw(&self, frame: &mut Frame, area: Rect) {
        let border_color = self.border_color();

        let value = self.get_method_name().to_string();

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

    pub fn draw_popup(&self, frame: &mut Frame, is_debug_mode: bool) {
        let area = frame.area();

        let list_width = 25;
        let list_height = HTTP_METHOD_LEN as u16 + 2;
        let debug_factor = if is_debug_mode { 2 } else { 1 };

        let list_area = Rect::new(
            (area.width - list_width) / (2 * debug_factor),
            (area.height - list_height) / 2,
            list_width,
            list_height,
        );

        frame.render_widget(Clear, list_area);

        let block = Block::default()
            .borders(Borders::ALL)
            .title(" Select HTTP Method ")
            .style(Style::default().bg(Color::DarkGray))
            .border_type(Rounded);

        frame.render_widget(block.clone(), list_area);

        let inner_area = block.inner(list_area);

        let items: Vec<ListItem> = HTTP_METHOD
            .iter()
            .map(|method| {
                ListItem::new(format!("  {}", method)).style(Style::default().bg(Color::DarkGray))
            })
            .collect();

        let list = List::new(items)
            .highlight_style(Style::default().bg(Color::Gray).fg(Color::Black))
            .highlight_symbol("▶ ");

        let mut state = ListState::default();
        state.select(Some(self.method));

        frame.render_stateful_widget(list, inner_area, &mut state);
    }
}
