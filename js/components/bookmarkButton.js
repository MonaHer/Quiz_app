export default function bookmarkButton() {
  const buttonBookmark = document.querySelector('[data-js="bookmark-button"]');
  const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');

  buttonBookmark.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("card__bookmark-button--active");
  });
}
