const radio = document.querySelector("#courier");
const radio2 = document.querySelector("#self_exemption");
const myDiv = document.querySelector("#courierBlock");
const goTop = document.querySelector("#gotop");
const widthHide = document.querySelector("#courierBlock").offsetHeight;

radio.addEventListener("click", function () {
  if (this.checked) {
    myDiv.classList.add("show");
    myDiv.classList.remove("hide");
    goTop.style.marginTop = "0";
  }
});

radio2.addEventListener("click", function () {
  if (this.checked) {
    myDiv.classList.add("hide");
    myDiv.classList.remove("show");
    goTop.style.marginTop = -widthHide + "px";
  }
});

const input = document.createElement("input");
input.type = "date";
input.value = "invalid date value";
const isSupported = input.value !== "invalid date value";

const textInput = document.querySelector(".text_input");
const dateInput = document.querySelector(".datepicker-input");
const date = document.querySelector("#date");

dateInput.addEventListener("change", (event) => {
  textInput.value = event.target.value;
  date.innerHTML = event.target.value;
  event.target.value = "";
});

//for increase/decrease buttons
const quantityInput = document.querySelector("#quantity");
const quantityInput2 = document.querySelector("#quantity2");
const increaseBtn = document.querySelector("#cart_increase");
const decreaseBtn = document.querySelector("#cart_decrease");
const increaseBtn2 = document.querySelector("#cart_increase2");
const decreaseBtn2 = document.querySelector("#cart_decrease2");
const totalPrice = document.querySelector("#price");
const totalPrice2 = document.querySelector("#price2");
const price = 98;
const price2 = 198;

increaseBtn.addEventListener("click", function () {
  let value = parseInt(quantityInput.value);
  value = isNaN(value) ? 1 : value;
  value += 1;
  quantityInput.value = value;
  totalPrice.innerHTML = value * price;
});

decreaseBtn.addEventListener("click", function () {
  let value = parseInt(quantityInput.value);
  value = isNaN(value) ? 1 : value;
  value = value < 2 ? 1 : value - 1;
  quantityInput.value = value;
  totalPrice.innerHTML = value * price;
});

quantityInput.addEventListener("input", () => {
  const quantity = parseInt(quantityInput.value);

  if (Number.isInteger(quantity) && quantity >= 1 && quantity <= 99) {
    totalPrice.textContent = quantity * price;
  } else {
    quantityInput.value = "";
  }
});

increaseBtn2.addEventListener("click", function () {
  let value = parseInt(quantityInput2.value);
  value = isNaN(value) ? 1 : value;
  value += 1;
  quantityInput2.value = value;
  totalPrice2.innerHTML = value * price2;
});

decreaseBtn2.addEventListener("click", function () {
  let value = parseInt(quantityInput2.value);
  value = isNaN(value) ? 1 : value;
  value = value < 2 ? 1 : value - 1;
  quantityInput2.value = value;
  totalPrice2.innerHTML = value * price2;
});

quantityInput2.addEventListener("input", () => {
  const quantity = parseInt(quantityInput2.value);

  if (Number.isInteger(quantity) && quantity >= 1 && quantity <= 99) {
    totalPrice2.textContent = quantity * price2;
  } else {
    quantityInput2.value = "";
  }
});
