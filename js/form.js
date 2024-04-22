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
  newQuestionSection.classList.add("question-card");

  const img = document.createElement("img");
  img.classList.add("question-card__bookmark");
  img.setAttribute("src", "./resources/bookmark.png");
  img.setAttribute("alt", "bookmark");

  const question = document.createElement("p");
  question.classList.add("question-card__question");

  const button = document.createElement("button");
  button.classList.add("question-card__answer-button");
  button.setAttribute("data-js", "question-card__answer-button");
  button.textContent = "Show answer";

  const answer = document.createElement("p");
  question.classList.add("question-card__answer");

  const tag = document.createElement("p");
  tag.classList.add("question-card__tag-list__tag");

  formMain.append(newQuestionSection);
  newQuestionSection.append(img);
  newQuestionSection.append(question);
  newQuestionSection.append(answer);
  newQuestionSection.append(button);

  event.target.reset();
}

// -------- Character Count ---------------------------
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
