import createNewCard from "./components/createNewCard.js";
import darkModeButton from "./components/darkModeButton.js";
import bookmarkButton from "./components/bookmarkButton.js";
import answerButton from "./components/answerButton.js";

const root = document.getElementById("root");

console.log("hello");

const createNewCardElement = createNewCard();

console.log("world");

const darkModeButtonElement = darkModeButton();

console.log("apple");

const bookmarkButtonElement = bookmarkButton();

console.log("strawberry");
const answerButtonElement = answerButton();

console.log("ciao");

root.append(
  createNewCardElement,
  darkModeButtonElement,
  bookmarkButtonElement,
  answerButtonElement
);
