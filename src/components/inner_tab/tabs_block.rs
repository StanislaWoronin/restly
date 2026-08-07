use ratatui::{
    Frame,
    layout::{Alignment, Rect},
    style::{Color, Style},
    text::{Line, Span},
    widgets::{Block, Borders},
};
use strum::Display;

use crate::components::{EditableComponent, RequestTab};

#[derive(Clone, Copy, Display)]
pub enum InnerTab {
    Request,
    Response,
}

pub const INNER_TAB: [InnerTab; 2] = [InnerTab::Request, InnerTab::Response];

pub const INNER_TAB_LEN: usize = INNER_TAB.len();

pub struct InnerTabs {
    pub active_tab: usize,
    pub is_focused: bool,
    pub is_editing: bool,
    pub request_tab: RequestTab,
}

impl InnerTabs {
    pub fn new() -> Self {
        Self {
            active_tab: 0,
            is_focused: false,
            is_editing: false,
            request_tab: RequestTab::new(),
        }
    }

    pub fn get_tab_name(&self) -> InnerTab {
        match INNER_TAB.get(self.active_tab) {
            Some(&tab) => tab,
            None => InnerTab::Request,
        }
    }

    pub fn draw(&self, frame: &mut Frame, area: Rect) {
        let border_color = self.border_color();

        let mut title_spans = vec![Span::from(" ")];

        for (i, tab) in INNER_TAB.iter().enumerate() {
            if i > 0 {
                title_spans.push(Span::styled(" │ ", Style::default().fg(Color::DarkGray)));
            }

            let is_active = i == self.active_tab;
            title_spans.push(Span::styled(
                tab.to_string(),
                if is_active {
                    Style::default().fg(Color::Yellow).bold()
                } else {
                    Style::default().fg(Color::DarkGray)
                },
            ));
        }

        title_spans.push(Span::from(" "));

        let block = Block::default()
            .borders(Borders::ALL)
            .border_style(Style::default().fg(border_color))
            .border_type(ratatui::widgets::BorderType::Rounded)
            .title(Line::from(title_spans))
            .title_alignment(Alignment::Left);

        frame.render_widget(block, area);
    }
}
