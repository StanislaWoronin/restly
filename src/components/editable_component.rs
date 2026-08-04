use ratatui::{
    Frame,
    layout::{Alignment, Rect},
    style::{Color, Style},
    widgets::{Block, BorderType, Borders, Paragraph},
};

pub trait EditableComponent {
    fn is_focused(&self) -> bool;
    fn is_editing(&self) -> bool;
    fn content(&self) -> String;

    fn border_color(&self) -> Color {
        if self.is_focused() {
            if self.is_editing() {
                Color::LightRed
            } else {
                Color::LightGreen
            }
        } else {
            Color::DarkGray
        }
    }

    fn draw(&self, frame: &mut Frame, area: Rect) {
        let border_color = self.border_color();

        let block = Block::default()
            .borders(Borders::ALL)
            .border_style(Style::default().fg(border_color))
            .border_type(BorderType::Rounded);

        let paragraph = Paragraph::new(self.content())
            .block(block)
            .alignment(Alignment::Left);

        frame.render_widget(paragraph, area);
    }
}
