import checkNumberInputs from "./checkNumberInputs";

const forms = () => {
  // тут всі форми
  const allForms = document.querySelectorAll("form");
  // тут всі інпути
  const inputs = document.querySelectorAll("input");
  // тут всі повідомлення для користувача
  const message = {
    loading: "Загрузка",
    success: "Спасибо! Скоро мы с вами свяжемся!",
    failure: "Что-то не так",
  };

  // всі інпути з вводом телефону не прийматимуть букви при вводі і будуть оброблятись 
  checkNumberInputs('input[name="user_phone"]');

  // функція очищення інтутів
  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  // асинхронна ф-ція (завжди повертає проміс) відправки запросу на сервер
  const postData = async (url, data) => {
    // в створений блок повідомлення вставляю повідомлення про стан відправки
    document.querySelector(".status").textContent = message.loading;
    // в цій перемінній запрос і потім результат (норм чи не норм)
    //  поки await не виконається, інтерпритатор дж чекає
    let result = await fetch(url, {
      method: "POST",
      body: data,
    });

    //  повертаю результат у виді текссту
    return await result.text();
  };

  allForms.forEach((form) => {
    // на кожну форму дія при відправці
    form.addEventListener("submit", function (e) {
      // відміняю перезавантаження
      e.preventDefault();

      // роблю блок з повідомленням
      // створюю дів
      let statusMessage = document.createElement("div");
      // даю йому клас
      statusMessage.classList.add("status");
      // поміщаю це повідомлення всередину форми
      form.appendChild(statusMessage);

      // збираю данні у вигляді формату FormData
      const formData = new FormData(form);

      // юрл і данні які я хочу відправить  на сервер
      postData("assets/server.php", formData)
        // якщо все добре
        .then((result) => {
          // вивожу в консоль результат з серверу (текст)
          console.log(result);

          statusMessage.textContent = message.success;
        })
        // якщо помилка
        .catch(() => (statusMessage.textContent = message.failure))

        // в любому випадку
        .finally(() => {
          // очищую інпути
          clearInputs();
          //  і видаляю повідомлення чере 5 сек
          setTimeout(() => {
            statusMessage.remove();
          }, 3000);
        });
    });
  });
};

export default forms;
