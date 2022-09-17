const modals = () => {
  // ф-ція приймає кнопу відкритя мод.вікна, саме вікно, кнопку закриття
  function bindModal(selectorBtn, modalWindowSelector, closeSelector) {
    const btn = document.querySelectorAll(selectorBtn);
    const modal = document.querySelector(modalWindowSelector);
    const close = document.querySelector(closeSelector);

    // на кнопки вішаю подію
    btn.forEach((element) => {
      element.addEventListener("click", (e) => {
        // убираю перезагрузку при кліку на ссилку
        if (e.taget) {
          e.preventDefault();
        }

        // коли клікнули, вікно стає видимим
        modal.style.display = "block";
        // поки не закриєш, сайт не гортатиметься
        // document.body.style.overflow = "hidden";
        document.body.classList.add("modal-open");
      });

      // при клікові на хрестик, закриваю вікно і далі гортаю
      close.addEventListener("click", () => {
        modal.style.display = "none";
        // поки не закриєш, сайт не гортатиметься
        //   document.body.style.overflow = "";
        document.body.classList.remove("modal-open");
      });
    });

    //  якщо клікаю не на вікно форми, то воно закривається
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
        // поки не закриєш, сайт не гортатиметься
        // document.body.style.overflow = "";
        document.body.classList.remove("modal-open");
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  }

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );

  bindModal(".phone_link", ".popup", ".popup .popup_close");
  showModalByTime('.popup', 60000);
};

export default modals;
