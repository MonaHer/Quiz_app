
const bodyElement = document.querySelector('[data-js="body"]');

const headerElement = document.querySelector('[data-js="header"]');

const navbarElement = document.querySelector('[data-js="navbar"]');

const buttonToggle = document.querySelector('[data-js="toggle-button"]');

buttonToggle.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
    headerElement.classList.toggle("dark");
    navbarElement.classList.toggle("dark");
  });
  