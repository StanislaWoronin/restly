use chrono::Local;
use once_cell::sync::Lazy;
use ratatui::{
    Frame,
    layout::Rect,
    style::{Color, Style},
    text::{Line, Span, Text},
    widgets::{Block, BorderType, Borders, Paragraph, Wrap},
};
use std::collections::VecDeque;
use std::sync::Mutex;

#[derive(Clone)]
pub enum LogLevel {
    Info,
    Warning,
    Error,
    Debug,
}

impl LogLevel {
    pub fn color(&self) -> Color {
        match self {
            LogLevel::Info => Color::Cyan,
            LogLevel::Warning => Color::Yellow,
            LogLevel::Error => Color::Red,
            LogLevel::Debug => Color::Gray,
        }
    }

    pub fn prefix(&self) -> &'static str {
        match self {
            LogLevel::Info => "[INFO]",
            LogLevel::Warning => "[WARN]",
            LogLevel::Error => "[ERR]",
            LogLevel::Debug => "[DBG]",
        }
    }
}

#[derive(Clone)]
pub struct LogEntry {
    pub timestamp: String,
    pub message: String,
    pub level: LogLevel,
}

pub struct DebugLogger {
    pub logs: VecDeque<LogEntry>,
    max_logs: usize,
    enabled: bool,
}

impl DebugLogger {
    pub fn new() -> Self {
        Self {
            logs: VecDeque::with_capacity(1000),
            max_logs: 1000,
            enabled: false,
        }
    }

    pub fn enable(&mut self) {
        self.enabled = true;
        self.add_log(LogLevel::Info, "Debug mode activated".to_string());
    }

    pub fn disable(&mut self) {
        self.add_log(LogLevel::Info, "Debug mode deactivated".to_string());
        self.enabled = false;
    }

    pub fn toggle(&mut self) {
        if self.enabled {
            self.disable();
        } else {
            self.enable();
        }
    }

    pub fn is_enabled(&self) -> bool {
        self.enabled
    }

    pub fn add_log(&mut self, level: LogLevel, message: String) {
        if !self.enabled {
            return;
        }

        let timestamp = Local::now().format("%H:%M:%S%.3f").to_string();
        let entry = LogEntry {
            timestamp,
            message,
            level,
        };

        if self.logs.len() >= self.max_logs {
            self.logs.pop_front();
        }
        self.logs.push_back(entry);
    }

    pub fn draw(&self, frame: &mut Frame, area: Rect) {
        if !self.enabled {
            return;
        }

        let block = Block::default()
            .borders(Borders::ALL)
            .title(" Debug Logs (F12 to toggle) ")
            .title_alignment(ratatui::layout::Alignment::Center)
            .border_style(Style::default().fg(Color::DarkGray))
            .border_type(BorderType::Rounded);

        let mut lines = Vec::new();
        let total_logs = self.logs.len();
        let visible_lines = (area.height as usize).saturating_sub(2);

        let start_idx = total_logs.saturating_sub(visible_lines);

        for entry in self.logs.iter().skip(start_idx) {
            let color = entry.level.color();
            let prefix = entry.level.prefix();

            let span = Span::styled(
                format!("{} {} {}", entry.timestamp, prefix, entry.message),
                Style::default().fg(color),
            );
            lines.push(Line::from(span));
        }

        if total_logs > visible_lines {
            let info = format!("Showing {} of {} logs", visible_lines, total_logs);
            lines.push(Line::from(Span::styled(
                info,
                Style::default().fg(Color::DarkGray),
            )));
        }

        let text = Text::from(lines);
        let paragraph = Paragraph::new(text).block(block).wrap(Wrap { trim: true });

        frame.render_widget(paragraph, area);
    }

    pub fn clear(&mut self) {
        self.logs.clear();
    }
}

static DEBUG_LOGGER: Lazy<Mutex<DebugLogger>> = Lazy::new(|| Mutex::new(DebugLogger::new()));

pub fn get_logger() -> &'static Mutex<DebugLogger> {
    &DEBUG_LOGGER
}

#[macro_export]
macro_rules! debug_log {
    ($level:expr, $($arg:tt)+) => {{
        if let Ok(mut logger) = $crate::app::log::get_logger().lock() {
            if logger.is_enabled() {
                logger.add_log($level, format!($($arg)+))
            }
        }
    }};

    ($($arg:tt)+) => {{
        if let Ok(mut logger) = $crate::app::log::get_logger().lock() {
            if logger.is_enabled() {
                logger.add_log($crate::app::log::LogLevel::Debug, format!($($arg)+))
            }
        }
    }};
}
