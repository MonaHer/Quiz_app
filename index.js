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

const buttonBookmark = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');

buttonBookmark.addEventListener("click", () => {
  buttonBookmark.classList.toggle("active");

  console.log("hello world");
});

const buttonAnswer = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');
buttonAnswer.addEventListener("click", () => {
  answer.classList.toggle("hidden");
});
