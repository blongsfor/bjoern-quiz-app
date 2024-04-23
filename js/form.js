const formMain = document.querySelector('[data-js="form-output"]');
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

console.log("hallo", button);
function createNewQuestion(event) {
  console.log("Button clicked!");
  event.preventDefault();

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
  question.textContent = data.yourQuestion;

  const answer = document.createElement("p");
  answer.classList.add("question-card__answer");
  answer.textContent = data.yourAnswer;

  const tag = document.createElement("p");
  tag.textContent = data.submitTag;
  tag.classList.add("question-card__tag-list__tag");

  const button = document.createElement("button");
  button.classList.add("question-card__answer-button");
  button.setAttribute("data-js", "question-card__answer-button");
  button.textContent = "Show answer";
  button.addEventListener("click", (event) => {
    const closestAnswer = event.target
      .closest(".question-card")
      .querySelector(".question-card__answer");
    // use toggle instead
    if (closestAnswer.style.display === "none") {
      closestAnswer.style.display = "block";
      event.target.textContent = "Hide Answer";
    } else {
      closestAnswer.style.display = "none";
      event.target.textContent = "Show Answer";
    }
  });
  //newQuestionSection.append(img);
  newQuestionSection.append(question, answer, tag, button);
  formMain.append(newQuestionSection);

  event.target.reset();
}
form.addEventListener("submit", createNewQuestion);

// -------- Character Count ---------------------------

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
