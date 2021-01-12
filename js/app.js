window.addEventListener("load", function () {
  document.querySelector(".preloader").style.display = "none";
});

document.querySelector(".navBtb").addEventListener("click", function () {
  document.querySelector(".nav").classList.toggle("nav--show");
});
