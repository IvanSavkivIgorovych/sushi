//for increase/decrease buttons
const quantityInput = document.querySelector("#quantity");
const increaseBtn = document.querySelector(".cart_increase");
const decreaseBtn = document.querySelector(".cart_decrease");

increaseBtn.addEventListener("click", function () {
  let value = parseInt(quantityInput.value);
  value = isNaN(value) ? 1 : value;
  value += 1;
  quantityInput.value = value;
});

decreaseBtn.addEventListener("click", function () {
  let value = parseInt(quantityInput.value);
  value = isNaN(value) ? 1 : value;
  value = value < 2 ? 1 : value - 1;
  quantityInput.value = value;
});

//for popup window
const addToCartBtn = document.querySelector("#addToCartBtn");
const cartPopup = document.querySelector("#cartPopup");

addToCartBtn.addEventListener("click", function () {
  addToCartBtn.innerHTML = "&#10003;";

  cartPopup.classList.add("show");

  setTimeout(function () {
    cartPopup.classList.remove("show");
    addToCartBtn.innerHTML = "Dodaj do koszyka";
  }, 5000);
});
