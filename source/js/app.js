var navigationMain = document.querySelector('.main-navigation');
var navigationToggle = document.querySelector('.main-navigation__toggle');
var pageHeader = document.querySelector('.page-header');

navigationMain.classList.remove('main-navigation--no-js');
pageHeader.classList.remove('page-header--no-js');

navigationToggle.addEventListener('click', function() {
  if (navigationMain.classList.contains('main-navigation--closed')) {
    navigationMain.classList.remove('main-navigation--closed');
    navigationMain.classList.add('main-navigation--opened');
    pageHeader.classList.remove('page-header--closed-menu');
  } else {
    navigationMain.classList.add('main-navigation--closed');
    navigationMain.classList.remove('main-navigation--opened');
    pageHeader.classList.add('page-header--closed-menu');
  }
});
