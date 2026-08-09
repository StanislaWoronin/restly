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
use strum::{EnumCount, IntoEnumIterator};

use crate::components::{EditableComponent, method::HttpMethod};

pub struct MethodBlock {
    pub method: HttpMethod,
}

impl MethodBlock {
    pub fn new() -> Self {
        Self {
            method: HttpMethod::default(),
        }
    }

    pub fn draw(&self, frame: &mut Frame, area: Rect) {
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
            .border_style(Style::default().fg(self.border_color()))
            .border_type(BorderType::Rounded);

        let paragraph = Paragraph::new(padded)
            .block(block)
            .alignment(Alignment::Left);

        frame.render_widget(paragraph, area);
    }

    pub fn draw_popup(&self, frame: &mut Frame, is_debug_mode: bool) {
        let area = frame.area();

        let list_width = 25;
        let list_height = HttpMethod::COUNT as u16 + 2;
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
            .title_alignment(Alignment::Center)
            .style(Style::default().bg(Color::Reset))
            .border_type(Rounded);

        frame.render_widget(block.clone(), list_area);

        let inner_area = block.inner(list_area);

        let items: Vec<ListItem> = HttpMethod::iter()
            .map(|method| {
                ListItem::new(format!("  {}", method)).style(Style::default().bg(Color::Reset))
            })
            .collect();

        let list = List::new(items)
            .highlight_style(Style::default().bg(Color::DarkGray).fg(Color::Black))
            .highlight_symbol(" ▶ ");

        let mut state = ListState::default();
        state.select(Some(self.method.to_index()));

        frame.render_stateful_widget(list, inner_area, &mut state);
    }
}
