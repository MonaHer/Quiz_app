export default function answerButton() {
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
  return answer;
}
