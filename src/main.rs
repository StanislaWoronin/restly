use std::io::Stdout;

use color_eyre::eyre::WrapErr;
use crossterm::event::{self, Event, KeyEventKind};
use ratatui::{Terminal, backend::CrosstermBackend};

mod app;
mod components;
mod tui;
mod ui;

use app::App;

fn main() -> color_eyre::Result<()> {
    color_eyre::install()?;

    let mut terminal = tui::init()?;
    let mut app = App::new();

    let result = run(&mut terminal, &mut app).wrap_err("run failed");
    if let Err(err) = tui::restore() {
        eprintln!(
            "failed to restore terminal. Run `reset` or restart your terminal to recover: {err}"
        );
    }

    result
}

fn run(terminal: &mut Terminal<CrosstermBackend<Stdout>>, app: &mut App) -> color_eyre::Result<()> {
    loop {
        terminal.draw(|frame| ui::ui(frame, app))?;

        if let Event::Key(key) = event::read()?
            && key.kind == KeyEventKind::Press
        {
            break;
        }
    }

    Ok(())
}
