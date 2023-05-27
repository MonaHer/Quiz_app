const bodyElement = document.querySelector('[data-js="body"]');

const headerElement = document.querySelector('[data-js="header"]');

const navbarElement = document.querySelector('[data-js="navbar"]');

const buttonToggle = document.querySelector('[data-js="toggle-button"]');

const output = document.querySelector('[data-js="output"]');

buttonToggle?.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  headerElement.classList.toggle("dark");
  navbarElement.classList.toggle("dark");

  if (bodyElement.classList.contains("dark")) {
    buttonToggle.textContent = "Light Mode";
  } else {
    buttonToggle.textContent = "Dark Mode";
  }
});

const buttonBookmark = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');
buttonBookmark?.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("active");
});

const buttonAnswer = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

buttonAnswer?.addEventListener("click", () => {
  answer.classList.toggle("hidden");

  if (answer.classList.contains("hidden")) {
    buttonAnswer.textContent = "Show Answer";
  } else {
    buttonAnswer.textContent = "Hide Answer";
  }
});

/*if (buttonAnswer.textContent === "Show Answer") {
    buttonAnswer.textContent = "Hide Answer";
  } else {
    buttonAnswer.textContent = "Show Answer";
  }*/
