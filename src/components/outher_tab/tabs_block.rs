use ratatui::{
    Frame,
    layout::{Alignment, Rect},
    style::{Color, Style},
    text::{Line, Span},
    widgets::{Block, Borders},
};
use strum::{Display, EnumIter};

use crate::components::EditableComponent;

#[derive(Debug, Display, PartialEq, EnumIter)]
pub enum OutherTab {
    Auth,
    Header,
    Params,
    Request,
}

const OUTER_TAB: [OutherTab; 4] = [
    OutherTab::Request,
    OutherTab::Auth,
    OutherTab::Header,
    OutherTab::Params,
];

pub const OUTER_TAB_LEN: usize = OUTER_TAB.len();

pub struct OutherTabs {
    pub active_tab: usize,
    pub is_focused: bool,
    pub is_editing: bool,
}

impl OutherTabs {
    pub fn new() -> Self {
        Self {
            active_tab: 0,
            is_focused: false,
            is_editing: false,
        }
    }

    pub fn draw(&self, frame: &mut Frame, area: Rect) {
        let border_color = self.border_color();

        let mut title_spans = vec![Span::from(" ")];

        for (i, tab) in OUTER_TAB.iter().enumerate() {
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
