use std::io::Stdout;

use crossterm::event::{self, Event, KeyEventKind};
use ratatui::{Terminal, backend::CrosstermBackend};

mod app;
mod components;
mod converter;
mod errors;
pub mod key_handler;
mod tui;
mod ui;

pub use app::application::{App, FocusArea};

use crate::{key_handler::KeyHandler, tui::TerminalGuard};

fn main() -> color_eyre::Result<()> {
    let _quard = TerminalGuard;

    color_eyre::install()?;
    let mut terminal = tui::init()?;

    let mut app = App::new()?;
    run(&mut terminal, &mut app)
}

fn run(terminal: &mut Terminal<CrosstermBackend<Stdout>>, app: &mut App) -> color_eyre::Result<()> {
    loop {
        terminal.draw(|frame| ui::ui(frame, app))?;

        if let Event::Key(key) = event::read()?
            && key.kind == KeyEventKind::Press
        {
            let _ = app.process_key(key);
        }

        if app.should_quit {
            break;
        }
    }

    Ok(())
}
