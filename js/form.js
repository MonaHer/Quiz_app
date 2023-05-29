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
