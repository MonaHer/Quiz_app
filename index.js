const bodyElement = document.querySelector('[data-js="body"]');

const headerElement = document.querySelector('[data-js="header"]');

const navbarElement = document.querySelector('[data-js="navbar"]');

const buttonToggle = document.querySelector('[data-js="toggle-button"]');

const output = document.querySelector('[data-js="output"]');

buttonToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  headerElement.classList.toggle("dark");
  navbarElement.classList.toggle("dark");
});

const buttonAnswer = document.querySelector('[data-js="answer-button"]');

const answer = `flexdirection`;
buttonAnswer.addEventListener("click", () => {
  output.textContent = answer;
});
