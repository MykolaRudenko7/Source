const modals = () => {
  // ф-ція приймає кнопу відкритя мод.вікна, саме вікно, кнопку закриття
  function bindModal(selectorBtn, modalWindowSelector, closeSelector) {
    // записую аргументи в константи
    const btns = document.querySelectorAll(selectorBtn);
    const modal = document.querySelector(modalWindowSelector);
    const close = document.querySelector(closeSelector);

    // на кожну з кнопок вішаю подію
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // убираю перезагрузку при якщо клік на ссилку
        if (e.taget) {
          e.preventDefault();
        }

        // при кліку, вікно стає видимим
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

  //   ф-ція показу модального вікна через деякий час
  // приймає селектор і час, через який вона запускається
  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  }

  // запускаю ф-цію мод.вікна
  // для 1-ї кнопки
  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  // і 2ї
  bindModal(".phone_link", ".popup", ".popup .popup_close");

  // ф-ція запуску мод.вікна через 60сек.
  //   showModalByTime(".popup", 60000);
};

export default modals;
