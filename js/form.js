function createNewQuestion(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newQuestionSection = document.createElement("section");
  newQuestionSection.setAttribute("class", "question-card");

  const img = document.createElement("img");
  img.setAttribute("class", "question-card__bookmark");
  img.setAttribute("src", "./resources/bookmark.png");
  img.setAttribute("alt", "bookmark");

  const p = document.createElement("question-card__question");
  p.setAttribute("class", "question-card__question");

  const button = document.createElement("question-card__answer-button");
  button.setAttribute("class", "question-card__answer-button");
  button.setAttribute("data-js", "question-card__answer-button");
  button.textContent = "Show answer";

  document.body.main.append(newQuestionSection);
  newQuestionSection.append(img);
  newQuestionSection.append(p);
  newQuestionSection.append(button);

  event.target.reset();
}

const button = document.querySelector('[data-js="submit-Button"]');

button.addEventListener("submit", createNewQuestion);
