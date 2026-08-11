use ratatui::{
    Frame,
    layout::{Alignment, Rect},
    style::{Color, Style},
    text::{Line, Span},
    widgets::{Block, BorderType::Rounded, Borders, Paragraph, Wrap},
};

use crate::{App, FocusArea};

pub const TAB: [FocusArea; 2] = [FocusArea::Request, FocusArea::Response];

pub fn draw_tab_block(frame: &mut Frame, area: Rect, border_color: Color, app: &App) {
    let mut title_spans = vec![Span::from(" ")];

    for (i, tab) in TAB.iter().enumerate() {
        if i > 0 {
            title_spans.push(Span::styled(" │ ", Style::default().fg(Color::DarkGray)));
        }

        title_spans.push(Span::styled(
            tab.to_string(),
            if *tab == app.focus_area {
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

    let inner_area = block.inner(area);
    frame.render_widget(block, area);

    let contentent = match app.focus_area {
        FocusArea::Request => app.request_tab.get_contentent(),
        _ => String::new(),
    };

    let paragraph = Paragraph::new(contentent)
        .alignment(Alignment::Left)
        .wrap(Wrap { trim: false });

    frame.render_widget(paragraph, inner_area);
}
