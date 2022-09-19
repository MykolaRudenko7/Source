import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";

window.addEventListener("DOMContentLoaded", () => {
  modals();

  //   таби 1
  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");

  //   таби 2
  tabs(
    ".decoration_slider",
    ".no_click",
    ".decoration_content > div > div",
    "after_click"
  );
});
