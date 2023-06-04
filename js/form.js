const form = document.querySelector('[data-js="question-form"]');
const questionInput = document.querySelector('[data-js="question-input"]');
const answerInput = document.querySelector('[data-js="answer-input"]');
const tagsInput = document.querySelector('[data-js="tags-input"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newQuestionCard = document.createElement("section");
  newQuestionCard.classList.add("card");
  form.append(newQuestionCard);

  const newQuestion = document.createElement("p");
  newQuestion.classList.add("card__question");
  newQuestion.textContent = questionInput.value;
  newQuestionCard.append(newQuestion);

  const newAnswerButton = document.createElement("button");
  newAnswerButton.textContent = "Show Answer";
  newAnswerButton.setAttribute("type", "button");
  newAnswerButton.classList.add("card__answer-button");
  newQuestion.append(newAnswerButton);

  const newBookmarkButton = document.createElement("button");
  newBookmarkButton.setAttribute("type", "button");
  newBookmarkButton.classList.add("card__bookmark-button");
  newQuestionCard.append(newAnswerButton);

  const newAnswer = document.createElement("p");
  newAnswer.textContent = answerInput.value;
  newQuestion.append(newAnswer);

  const newTagsList = document.createElement("ul");
  newTagsList.classList.add("card__tags-list");
  newQuestion.append(newTagsList);

  const newTags = document.createElement("li");
  newTags.classList.add("card__tags");
  newTags.textContent = tagsInput.value;
  newTagsList.append(newTags);

  e.target.reset();
});
