var navigationMain = document.querySelector(".main-navigation");
var navigationToggle = document.querySelector(".main-navigation__toggle");
var pageHeader = document.querySelector(".page-header");

navigationMain.classList.remove("main-navigation--no-js");
pageHeader.classList.remove("page-header--no-js");

if (document.body.contains(document.querySelector(".page-footer__map-image"))) {
  var mapImg = document.querySelector(".page-footer__map-image");
  var mapDisplay = document.querySelector(".page-footer__map-display");
  mapImg.classList.add("hidden");
  mapDisplay.classList.remove("hidden");
}

navigationToggle.addEventListener("click", function() {
  if (navigationMain.classList.contains("main-navigation--closed")) {
    navigationMain.classList.remove("main-navigation--closed");
    navigationMain.classList.add("main-navigation--opened");
    pageHeader.classList.remove("page-header--closed-menu");
  } else {
    navigationMain.classList.add("main-navigation--closed");
    navigationMain.classList.remove("main-navigation--opened");
    pageHeader.classList.add("page-header--closed-menu");
  }
});
