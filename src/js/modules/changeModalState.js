import checkNumberInputs from "./checkNumberInputs";

// буде отримувати modalState
const changeModalState = (state) => {
  //
  // селектор з табом (яку форму вікна вибрав)
  const windowForms = document.querySelectorAll(".balcon_icons_img"),
    // інпут з шириною вікна
    windowWidth = document.querySelectorAll("#width"),
    // інпут з висотою вікна
    windowHeight = document.querySelectorAll("#height"),
    // селект
    windowViewType = document.querySelectorAll("#view_type"),
    // чекбокс
    windowProfile = document.querySelectorAll(".checkbox");

  //валідація на цифри
  checkNumberInputs("#width");
  checkNumberInputs("#height");

  //ф-ція приймає подію, форми вводу і значення
  function bindActionToElement(event, element, property) {
    // для кожної конкретної форми вводу і її індексу
    element.forEach((form, index) => {
      //  подія. І якщо назва форми буде ... , то
      form.addEventListener(event, function (e) {
        // коли нода, то з великої літери
        switch (form.nodeName) {
          // якщо приходить варіант вікна
          case "SPAN":
            state[property] = index + 1;
            break;

          // якщо інпут (2 види з вводом чисел і чекбокс)
          case "INPUT":
            // якщо варіант де input буде чекбоксом
            if (form.getAttribute("type") === "checkbox") {
              // що записую при чекбоксі
              if (index === 0) {
                state[property] = "Cold";
              } else {
                state[property] = "Warm";
              }

              element.forEach((box, formNumber) => {
                //  знімаю чекбокси з усіх клітинок
                box.checked = false;
                //  на натиснутий користувачем не будем знімать
                if (index == formNumber) {
                  box.checked = true;
                }
              });
              // якщо ввод
            } else {
              // просто значення з інпуту
              state[property] = form.value;
            }
            break;

          // при списку
          case "SELECT":
            // просто значення з інпуту
            state[property] = form.value;
            break;
        }

        console.log(state);
      });
    });
  }

  bindActionToElement("click", windowForms, "form");
  bindActionToElement("input", windowHeight, "height");
  bindActionToElement("input", windowWidth, "width");
  //   для чекбоксу і списку
  bindActionToElement("change", windowViewType, "type");
  bindActionToElement("change", windowProfile, "profile");
};

export default changeModalState;
