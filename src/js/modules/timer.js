const timer = (id, deadline) => {
  // додає нуль перед числом у верстку
  function addZero(number) {
    if (number <= 9) {
      return "0" + number;
    } else {
      return number;
    }
  }

  // приймає кінцевий час переводить його в дні, години і.т.д і робить об'єкт з цими данними
  const getTimeRemaning = (endTime) => {
    // (к-сть мс з 1970  до кінцевого часу) - (час який зараз (new Date() - об'єкт із теперішньою датою))
    const time = Date.parse(endTime) - Date.parse(new Date());
    // перевожу в мілісекунди в секунди (час/1000) і ділю - остаток це вікно з секундами
    const seconds = Math.floor((time / 1000) % 60),
      //  отримую минути і розділяю на 60 - остаток буде вікно з минутами
      minutes = Math.floor((time / 1000 / 60) % 60),
      //години
      hours = Math.floor((time / (1000 * 60 * 60)) % 24),
      // дні
      days = Math.floor(time / (1000 * 60 * 60 * 24));

    return {
      total: time,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  // установлює вирахований час у верстку
  const setClock = (selector, endTime) => {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      //  ф-ція виводу дати кожну секунду
      timeInterval = setInterval(updateClock, 1000);

    // запускаєм раніше, щоб обновлявся таймер одразу
    updateClock();
	 
    // оприділяє час до дедлайну
    function updateClock() {
      // оримую у перемінну об'єкт скільки часу до кінця
      const time = getTimeRemaning(endTime);

      // передаю у верстку значення з об'єкту (і додою до версти 0, якщо треба)
      days.textContent = addZero(time.days);
      hours.textContent = addZero(time.hours);
      minutes.textContent = addZero(time.minutes);
      seconds.textContent = addZero(time.seconds);

      // якщо час вичерпався, то у верстку 00
      if (time.total <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        //   і очищаю ф-цю виводу
        clearInterval(timeInterval);
      }
    }
  };

  setClock(id, deadline);
};

export default timer;
