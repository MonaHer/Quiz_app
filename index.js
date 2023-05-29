/*const bodyElement = document.querySelector('[data-js="body"]');

const headerElement = document.querySelector('[data-js="header"]');

const navbarElement = document.querySelector('[data-js="navbar"]');

const buttonToggle = document.querySelector('[data-js="toggle-button"]');

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

if (buttonAnswer.textContent === "Show Answer") {
    buttonAnswer.textContent = "Hide Answer";
  } else {
    buttonAnswer.textContent = "Show Answer";
  }*/

const form = document.querySelector('[data-js="question-form"]');
const questionInput = document.querySelector('[data-js="question-input"]');
const answerInput = document.querySelector('[data-js="answer-input"]');
const tagsInput = document.querySelector('[data-js="tags-input"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newQuestionCard = document.createElement("section");
  newQuestionCard.classList.add("question-card");
  form.append(newQuestionCard);

  const newQuestion = document.createElement("p");
  newQuestion.classList.add("question");
  newQuestion.textContent = questionInput.value;
  newQuestionCard.append(newQuestion);

  const newAnswer = document.createElement("p");
  newAnswer.textContent = answerInput.value;
  newQuestion.append(newAnswer);

  const newTags = document.createElement("li");
  newTags.classList.add("tags");
  newTags.textContent = tagsInput.value;
  newAnswer.append(newTags);
});
