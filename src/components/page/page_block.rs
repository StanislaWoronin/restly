use ratatui::{
    Frame,
    layout::{Alignment, Rect},
    style::{Color, Style},
    text::{Line, Span},
    widgets::{Block, Borders},
};
use strum::IntoEnumIterator;

use crate::app::application::FocusPage;

pub fn draw_page_block(frame: &mut Frame, area: Rect, border_color: Color, focus_page: FocusPage) {
    let mut title_spans = vec![Span::from(" ")];

    for (i, page) in FocusPage::iter().enumerate() {
        if i > 0 {
            title_spans.push(Span::styled(" │ ", Style::default().fg(Color::DarkGray)));
        }

        let is_active = page == focus_page;
        title_spans.push(Span::styled(
            page.to_string(),
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
