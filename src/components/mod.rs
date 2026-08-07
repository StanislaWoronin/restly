pub mod editable_component;

pub mod inner_tab;
pub mod method;
pub mod outher_tab;
pub mod url;

pub use editable_component::EditableComponent;
pub use inner_tab::{
    request_tab::RequestTab,
    tabs_block::InnerTabs,
    tabs_block::{INNER_TAB, InnerTab},
};
pub use method::method_block::MethodBlock;
pub use outher_tab::tabs_block::{OUTER_TAB, OUTER_TAB_LEN, OutherTab, OutherTabs};
pub use url::url_block::UrlBlock;
