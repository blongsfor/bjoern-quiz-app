const bookmarkImage1 = document.getElementById("bookmark-image1");
const bookmarkImage2 = document.getElementById("bookmark-image2");
const bookmarkImage3 = document.getElementById("bookmark-image3");
const bookmarkImage4 = document.getElementById("bookmark-image4");
const bookmarkImage5 = document.getElementById("bookmark-image5");
const bookmarkImage6 = document.getElementById("bookmark-image6");

let toggle = true;
bookmarkImage1.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle) {
    bookmarkImage1.src = "./resources/bookmark.png";
  } else {
    bookmarkImage1.src = "./resources/bookmark_filled.png";
  }
});
bookmarkImage2.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle) {
    bookmarkImage2.src = "./resources/bookmark.png";
  } else {
    bookmarkImage2.src = "./resources/bookmark_filled.png";
  }
});

bookmarkImage3.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle) {
    bookmarkImage3.src = "./resources/bookmark.png";
  } else {
    bookmarkImage3.src = "./resources/bookmark_filled.png";
  }
});

bookmarkImage4.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle) {
    bookmarkImage4.src = "./resources/bookmark.png";
  } else {
    bookmarkImage4.src = "./resources/bookmark_filled.png";
  }
});

bookmarkImage5.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle) {
    bookmarkImage5.src = "./resources/bookmark.png";
  } else {
    bookmarkImage5.src = "./resources/bookmark_filled.png";
  }
});

bookmarkImage6.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle) {
    bookmarkImage6.src = "./resources/bookmark.png";
  } else {
    bookmarkImage6.src = "./resources/bookmark_filled.png";
  }
});

/*--------------------------------------------------------------------

2nd version also possible but only for first bookmark


function changeBookmarkImages() {
  const bookmarkImage = document.getElementsByClassName(
    "question-card__bookmark"
  );
  if (bookmarkImage.src.match("./resources/bookmark.png")) {
    bookmarkImage.src = "./resources/bookmark_filled.png";
  } else {
    bookmarkImage.src = "./resources/bookmark.png";
  }
}

------------------------------------------------------------------------*/
let isClicked = false;

function answerButton() {
  const answer = document.querySelector('[data-js="question-card__answer"]');
  const button = document.querySelector(
    '[data-js="question-card__answer-button"]'
  );
  isClicked = answer.style.display === "none";
  if (isClicked) {
    answer.style.display = "block";
    button.textContent = "Hide answer";
  } else {
    answer.style.display = "none";
    button.textContent = "Show answer";
  }
}
// only works for first answer again ...
// ----------------------------------------------------------------------
