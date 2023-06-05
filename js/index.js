import createNewCard from "./components/createNewCard.js";
import darkModeButton from "./components/darkModeButton.js";
import bookmarkButton from "./components/bookmarkButton.js";
import answerButton from "./components/answerButton.js";

const root = document.getElementById("root");

const createNewCardElement = createNewCard();
const darkModeButtonElement = darkModeButton();
const bookmarkButtonElement = bookmarkButton();
const answerButtonElement = answerButton();

root.append(
  createNewCardElement,
  darkModeButtonElement,
  bookmarkButtonElement,
  answerButtonElement
);
