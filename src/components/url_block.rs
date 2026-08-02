use ratatui::{
    Frame,
    layout::{Alignment, Rect},
    style::{Color, Style},
    widgets::{Block, BorderType, Borders, Paragraph},
};

pub struct UrlBlock {
    pub url: String,
    is_focused: bool,
    is_editing: bool,
}

impl UrlBlock {
    pub fn new() -> Self {
        Self {
            url: String::new(),
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

        let block = Block::default()
            .borders(Borders::ALL)
            .border_style(Style::default().fg(border_color))
            .border_type(BorderType::Rounded)
            .title(" URL ")
            .title_alignment(Alignment::Left);

        let paragraph = Paragraph::new(self.url.clone())
            .block(block)
            .alignment(Alignment::Left);

        frame.render_widget(paragraph, area);
    }
}
