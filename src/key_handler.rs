use crossterm::event::{KeyCode, KeyEvent};

pub trait KeyHandler {
    fn set_quit(&mut self);

    fn process_key(&mut self, key: KeyEvent) {
        self.close(key);
    }

    fn close(&mut self, key: KeyEvent) {
        if key.code == KeyCode::Esc {
            self.set_quit();
        }
    }
}
