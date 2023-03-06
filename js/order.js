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
