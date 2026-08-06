use crossterm::event::{KeyCode, KeyEvent};

pub enum Direction {
    Positive,
    Negative,
}

pub trait KeyHandler {
    fn set_quit(&mut self) {
        println!("Action not allowed");
    }

    fn change_tab(&mut self, direction: Direction) {
        println!("Action not allowed");
    }

    fn process_key(&mut self, key: KeyEvent) {
        self.close_key(key);
        self.change_key(key);
    }

    fn close_key(&mut self, key: KeyEvent) {
        if key.code == KeyCode::Esc {
            self.set_quit();
        }
    }

    fn change_key(&mut self, key: KeyEvent) {
        match key.code {
            KeyCode::Tab => {
                self.change_tab(Direction::Positive);
            }
            KeyCode::BackTab => {
                self.change_tab(Direction::Negative);
            }
            _ => {}
        }
    }
}
