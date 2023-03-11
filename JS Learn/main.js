var Text = document.querySelector("#text");
var rem = document.querySelector(".remove");
var arr = ["Add"];
var Button = document.querySelector("#btn");
Button.addEventListener("click", function () {
  rem.style.display = "block";
  var buttonjs = document.querySelector(".buttonfromjs");
  var btn = document.querySelector(".btn2");
  btn.addEventListener("click", function () {
    buttonjs.style.display = "block";
  });
});
var rem = document.querySelector(".remove");
var Button = document.querySelector("#btn1");
Button.addEventListener("click", function () {
  rem.style.display = "none";
  Text.textContent = "";
});
var buttonrem = document.querySelector("#btnrem");
var buttonjs = document.querySelector(".buttonfromjs");
buttonrem.addEventListener("click", function () {
  buttonjs.style.display = "none";
});
