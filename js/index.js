import createNewCard from "./components/createNewCard.js";
import darkModeButton from "./components/darkModeButton.js";
import bookmarkButton from "./components/bookmarkButton.js";
import answerButton from "./components/answerButton.js";

const body = document.getElementById("body");

console.log("hello");

console.log("world");

const darkModeButtonElement = darkModeButton();

console.log("apple");

const bookmarkButtonElement = bookmarkButton();

const answerButtonElement = answerButton();

const createNewCardElement = createNewCard();

console.log("strawberry");

body.append(createNewCardElement);
