const checkNumberInputs = (selector) => {
  const numInputs = document.querySelectorAll(selector);

  // всі інпути з вводом телефону не прийматимуть букви при вводі
  numInputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/, "");
    });
  });
};

export default checkNumberInputs;
