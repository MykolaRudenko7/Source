const tabs = (
  headerSel,
  tabSel,
  contentSel,
  activeClass,
  display = "block"
) => {
  const header = document.querySelector(headerSel);
  const tabs = document.querySelectorAll(tabSel);
  const content = document.querySelectorAll(contentSel);

  // функція для ховання контенту табу (для кожного елементу)
  function hideTabContent() {
    // кожен елемент  контенту ховаю
    content.forEach((element) => {
      element.style.display = "none";
      element.classList.remove("faded");
    });

    // таби теж, відбираючи  у них активний клас
    tabs.forEach((tab) => {
      tab.classList.remove(activeClass);
    });
  }

  // ф-ція для показу контенту конкретного табу (за- замовчуванням 1й)
  function showTabContent(i = 0) {
    // показую конкретний ел контенту
    content[i].style.display = display;
    content[i].classList.add("faded");

    //  і таб
    tabs[i].classList.add(activeClass);
  }

  // щоб правильно показать таби, спочатку ховаю їх
  hideTabContent();
  // і потім показую
  showTabContent();

  // при кліку на блок з табами
  header.addEventListener("click", function (e) {
    const target = e.target;

    //  якщо клік був на один з табів
    //  (рег вираз вирізає точку з класу (для classList))
    if (
      target &&
      (target.classList.contains(tabSel.replace(/\./, "")) ||
        //  можна з closest()
        target.parentNode.classList.contains(tabSel.replace(/\./, "")))
    ) {
      // то перебираю таби
      tabs.forEach((tab, i) => {
        // якщо клік на таб чи його елемент, берем його номер
        if (target == tab || target.parentNode == tab) {
          // закриваю всі
          hideTabContent();
          // показую який треба (на який клік)
          showTabContent(i);
        }
      });
    }
  });
};

export default tabs;
