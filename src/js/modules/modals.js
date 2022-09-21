
const modals = () => {
	// ф-ція приймає кнопу відкритя мод.вікна, саме вікно, кнопку закриття і чи закриватиметься модальне вікно при клікові поза вікном
  function bindModal(
    selectorBtn,
    modalWindowSelector,
    closeSelector,
    // якщо нічого не передаєм, то вікно закривається при клікові на пусту область (за замовчуванням)
    closeClickOwerlay = true
  ) {
    // записую аргументи в константи
    const btns = document.querySelectorAll(selectorBtn);
    const modal = document.querySelector(modalWindowSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll("[data-modal]");

	function closeModal(params) {
	  params.forEach((param) => {
		 param.style.display = "none";
	  });
	}

    // на кожну з кнопок вішаю подію
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // убираю перезагрузку при якщо клік на ссилку
        if (e.taget) {
          e.preventDefault();
        }

        // закриваю всі модальнні вікна (за атрибутами)
        closeModal(windows);

        // при кліку, вікно стає видимим
        modal.style.display = "block";
        // поки не закриєш, сайт не гортатиметься
        document.body.style.overflow = "hidden";
      });
    });

    // при клікові на хрестик, закриваю вікно і далі гортаю
    close.addEventListener("click", () => {
      //закриваю всі модальнні вікна
      closeModal(windows);

      modal.style.display = "none";
      // поки не закриєш, сайт не гортатиметься
      document.body.style.overflow = "";
    });

    //  якщо клікаю не на вікно форми і якщо 2й парамерт тру, то воно закривається
    // тобто коли передаю false то закривається тільки по хресттику
    modal.addEventListener("click", function (e) {
      if (e.target === modal && closeClickOwerlay) {
        // і закриваю всі модальнні вікна (з дата атрибутом)
        closeModal(windows);

        modal.style.display = "none";
        // поки не закриєш, сайт не гортатиметься
        document.body.style.overflow = "";
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
  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  // і 2ї
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  //  3 calc
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  // 4 тут не зариваю при клікові на пусту область вікно, для UX
  // далі вікна будуть закриваться за вехнім
  bindModal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  );
  //  5
  bindModal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
  );
  // ф-ція запуску мод.вікна через 60сек.
  //   showModalByTime(".popup", 60000);
};

export default modals;
