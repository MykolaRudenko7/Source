const modals = () => {
  // ф-ція приймає кнопу відкритя мод.вікна, саме вікно, кнопку закриття
  function bindModal(selectorBtn, modalWindow, close) {
    // на кнопу вішаю подію
    selectorBtn.addEventListener("click", (e) => {
      // убираю перезагрузку при кліку на ссилку
      if (e.taget) {
        e.preventDefault();
      }

      // коли клікнули, вікно стає видимим
      modalWindow.style.display = "block";
      // поки не закриєш, сайт не гортатиметься
      document.body.style.overflow = "hidden";

      // при клікові на хрестик, закриваю вікно і далі гортаю
      close.addEventListener("click", () => {
        modalWindow.style.display = "none";
        // поки не закриєш, сайт не гортатиметься
        document.body.style.overflow = "";
      });
    });
    //  якщо клікаю не на вікно форми, то воно закривається
    modalWindow.addEventListener("click", function (e) {
      if (e.target === modalWindow) {
        modalWindow.style.display = "none";
        // поки не закриєш, сайт не гортатиметься
        document.body.style.overflow = "";
      }
    });
  }

  const callEngineerBtn = document.querySelector(".popup_engineer_btn");
  const modalEngineer = document.querySelector(".popup_engineer");
  const EngineerClose = document.querySelector(".popup_engineer .popup_close");

  bindModal(callEngineerBtn, modalEngineer, EngineerClose);
};

export default modals;
