'use strict';
/////////////////////////
// SELECTING ELEMENTS //
///////////////////////

// Hamburger elements
const hamburgerBtn = document.querySelector('.hamburger-btn');
const headerNav = document.querySelector('.header-nav');
const overlay = document.querySelector('.overlay');

//////////////////////////////////////
// FUNCTIONS TO DO NOT REPEAT CODE //
////////////////////////////////////

// Hamburger function
const toggleClasses = function () {
  hamburgerBtn.classList.toggle('active');
  headerNav.classList.toggle('open');
  overlay.classList.toggle('hidden');
};

/////////////////////////////
// ADDEVENT FUNCTIONALITIES //
///////////////////////////

// Hamburger function
hamburgerBtn.addEventListener('click', () => {
  toggleClasses();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && hamburgerBtn.classList.contains('active')) {
    toggleClasses();
  }
});

overlay.addEventListener('click', () => {
  toggleClasses();
});
