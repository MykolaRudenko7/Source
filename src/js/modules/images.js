const images = () => {
  // new modal for image
  const imgPopup = document.createElement("div"),
    // область з зображеннями
    workSection = document.querySelector(".works"),
    // створюю зображення
    bigImage = document.createElement("img");

  //даю модальному зображенню клас
  imgPopup.classList.add("popup");
  // додаю в секцію до зображень
  workSection.append(imgPopup);

  //додаю в модальне вікно зображення
  imgPopup.append(bigImage);

  // задаю стилі
  imgPopup.style.cssText = `
	justify-content: center;
	align-items: center;
	display: none;
	`;

  // подія на секцію з зображеннями
  workSection.addEventListener("click", function (e) {
    e.preventDefault();
    // якщо клік на зображення
    if (e.target && e.target.classList.contains("preview")) {
      // показую зображення
      imgPopup.style.display = "flex";
      document.body.style.overflow = "hidden";

      bigImage.style.cssText = `
			width: 50%;
  			height: auto;
		`;

      // елемент на якому подія, находить батька з атрибутом посилання
      const path = e.target.parentNode.getAttribute("href");
      // встановлюємо лінк зображення, який був витягнутий з попередньої ссилки
      bigImage.setAttribute("src", path);
    }

    //  закриття при клікові на пусту область
    if (e.target && e.target.matches("div.popup")) {
      imgPopup.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
};

export default images;
