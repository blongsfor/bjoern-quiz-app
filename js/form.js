const formMain = document.querySelector('[data-js="form-main"]');
const form = document.querySelector('[data-js="form"]');
const formSubmitButton = document.querySelector('[data-js="submit-Button"]');
const formYourQuestion = document.querySelector('[data-js="your-question"]');
const formYourAnswer = document.querySelector('[data-js="your-answer"]');
const button = document.querySelector('[data-js="submit-Button"]');
const questionCharacterCount = document.querySelector(
  '[data-js="your-question-character-count"]'
);
const answerCharacterCount = document.querySelector(
  '[data-js="your-answer-character-count"]'
);

function createNewQuestion(event) {
  event.preventDefault();

  console.log("Button clicked!");
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  const newQuestionSection = document.createElement("section");
  newQuestionSection.setAttribute("class", "question-card");

  const img = document.createElement("img");
  img.setAttribute("class", "question-card__bookmark");
  img.setAttribute("src", "./resources/bookmark.png");
  img.setAttribute("alt", "bookmark");

  const p = document.createElement("p");
  p.setAttribute("class", "question-card__question");

  const button = document.createElement("button");
  button.setAttribute("class", "question-card__answer-button");
  button.setAttribute("data-js", "question-card__answer-button");
  button.textContent = "Show answer";

  formMain.append(newQuestionSection);
  newQuestionSection.append(img);
  newQuestionSection.append(p);
  newQuestionSection.append(button);

  event.target.reset();
}

button.addEventListener("submit", createNewQuestion);

formYourQuestion.addEventListener("input", (event) => {
  let maxLength = event.target.maxLength;
  let count = event.target.value.length;
  let remainingCharacters = maxLength - count;

  questionCharacterCount.textContent = `${remainingCharacters} characters remaining`;
});

formYourAnswer.addEventListener("input", (event) => {
  let maxLength = event.target.maxLength;
  let count = event.target.value.length;
  let remainingCharacters = maxLength - count;

  answerCharacterCount.textContent = `${remainingCharacters} characters remaining`;
});
