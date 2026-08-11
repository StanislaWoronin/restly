use ratatui::{
    Frame,
    layout::{Alignment, Rect},
    style::{Color, Style},
    text::{Line, Span},
    widgets::{Block, BorderType::Rounded, Borders},
};

use crate::components::{EditableComponent, InnerTab, RequestTab};

pub const INNER_TAB: [InnerTab; 2] = [InnerTab::Request, InnerTab::Response];

pub struct InnerTabs {
    pub active_tab: InnerTab,
    pub is_focused: bool,
    pub is_editing: bool,
    pub request_tab: RequestTab,
}

impl InnerTabs {
    pub fn new() -> Self {
        Self {
            active_tab: InnerTab::Request,
            is_focused: false,
            is_editing: false,
            request_tab: RequestTab::new(),
        }
    }

    pub fn draw(&self, frame: &mut Frame, area: Rect) {
        let border_color = self.border_color();

        let mut title_spans = vec![Span::from(" ")];

        for (i, tab) in INNER_TAB.iter().enumerate() {
            if i > 0 {
                title_spans.push(Span::styled(" │ ", Style::default().fg(Color::DarkGray)));
            }

            title_spans.push(Span::styled(
                tab.to_string(),
                if *tab == self.active_tab {
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
            .border_type(Rounded)
            .title(Line::from(title_spans))
            .title_alignment(Alignment::Left);

        frame.render_widget(block, area);
    }
}
