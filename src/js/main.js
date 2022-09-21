import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // об'єкт з даними форми калькулятора і передаю у ф-цію
  let modalState = {};

  //   міняєм його тут
  changeModalState(modalState);
  // модальні вікна
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
  //   tab 3 for calc
  tabs(
    ".balcon_icons",
    ".balcon_icons_img",
    ".big_img > img",
    "do_image_more",
    "inline-block"
  );
  // форми
  forms(modalState);
});
