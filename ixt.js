
// =====================================
// PRESENTATION NAVIGATION
// =====================================

const slides = document.querySelectorAll(".slide");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const slideNumber = document.getElementById("slideNumber");
const totalSlides = document.getElementById("totalSlides");
const progressBar = document.getElementById("progressBar");

let currentSlide = 0;

totalSlides.textContent = String(slides.length).padStart(2, "0");

function showSlide(index) {
  if (index < 0 || index >= slides.length) return;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  currentSlide = index;

  slideNumber.textContent =
    String(index + 1).padStart(2, "0");

  const progress = ((index + 1) / slides.length) * 100;

  progressBar.style.width = progress + "%";

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === slides.length - 1;
}

// Next slide
nextBtn.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

// Previous slide
prevBtn.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

// Keyboard navigation
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === " ") {
    event.preventDefault();
    showSlide(currentSlide + 1);
  }

  if (event.key === "ArrowLeft") {
    showSlide(currentSlide - 1);
  }
});


// =====================================
// DOM INTERACTIVE DEMO
// =====================================

const demoMessage = document.getElementById("demoMessage");

const domDemoButton =
  document.getElementById("domDemoButton");

const domResetButton =
  document.getElementById("domResetButton");

domDemoButton.addEventListener("click", () => {
  demoMessage.textContent = "Welcome to JavaScript!";
  demoMessage.style.color = "#e32636";
});

domResetButton.addEventListener("click", () => {
  demoMessage.textContent = "Hello, World!";
  demoMessage.style.color = "#171717";
});


// =====================================
// ACTIVITY ANSWER REVEAL
// =====================================

const revealActivity =
  document.getElementById("revealActivity");

const activityAnswers =
  document.getElementById("activityAnswers");

revealActivity.addEventListener("click", () => {
  activityAnswers.classList.toggle("hidden");

  if (activityAnswers.classList.contains("hidden")) {
    revealActivity.textContent = "Reveal Answers";
  } else {
    revealActivity.textContent = "Hide Answers";
  }
});


// =====================================
// 10-ITEM QUIZ
// =====================================

const questions = [
  {
    question: "What is a property in a JavaScript object?",
    choices: [
      "A. A name or label for information",
      "B. A type of loop",
      "C. A browser",
      "D. A mathematical operation"
    ],
    answer: "A",
    explanation: "A property describes the information stored in an object."
  },

  {
    question: "Which is a valid JavaScript object?",
    choices: [
      "A. let student = (name: 'Kai');",
      "B. let student = {name: 'Kai'};",
      "C. let student = [name: 'Kai'];",
      "D. let student = <name: 'Kai'>;"
    ],
    answer: "B",
    explanation: "JavaScript objects use curly braces and key-value pairs."
  },

  {
    question: "What does student.age access?",
    choices: [
      "A. The age property of student",
      "B. The name property of student",
      "C. The entire webpage",
      "D. The student object itself"
    ],
    answer: "A",
    explanation: "Dot notation accesses the property named age."
  },

  {
    question: "Given person = {name: 'Mia'}, what is person.name?",
    choices: [
      "A. person",
      "B. name",
      "C. Mia",
      "D. undefined"
    ],
    answer: "C",
    explanation: "The value assigned to the name property is Mia."
  },

  {
    question: "Which code uses bracket notation to access the city property?",
    choices: [
      "A. student.city()",
      "B. student['city']",
      "C. student-city",
      "D. student(city)"
    ],
    answer: "B",
    explanation: "Bracket notation uses square brackets around the property name."
  },

  {
    question: "What does DOM stand for?",
    choices: [
      "A. Data Object Method",
      "B. Document Object Model",
      "C. Digital Output Mode",
      "D. Display Object Management"
    ],
    answer: "B",
    explanation: "DOM stands for Document Object Model."
  },

  {
    question: "How does the DOM represent an HTML document?",
    choices: [
      "A. As a tree of nodes",
      "B. As a list of numbers",
      "C. As a single image",
      "D. As a spreadsheet"
    ],
    answer: "A",
    explanation: "The DOM organizes document parts in a tree-like structure."
  },

  {
    question: "Which node represents an HTML element like <p> or <h1>?",
    choices: [
      "A. Text node",
      "B. Element node",
      "C. Comment node",
      "D. Document title"
    ],
    answer: "B",
    explanation: "An element node represents an HTML element."
  },

  {
    question: "Which method selects an element using its ID?",
    choices: [
      "A. document.getElementById()",
      "B. document.getArray()",
      "C. document.createText()",
      "D. document.getProperty()"
    ],
    answer: "A",
    explanation: "getElementById() finds an element using its ID."
  },

  {
    question: "What does textContent do?",
    choices: [
      "A. Reads or changes an element's text",
      "B. Changes the webpage background only",
      "C. Creates a new browser",
      "D. Deletes the entire HTML document"
    ],
    answer: "A",
    explanation: "textContent gets or sets the text inside an element."
  }
];


// =====================================
// DISPLAY QUIZ QUESTIONS
// =====================================

const quizQuestions =
  document.getElementById("quizQuestions");

questions.forEach((item, index) => {

  const questionCard = document.createElement("div");
  questionCard.className = "quiz-question";

  const questionTitle = document.createElement("h3");

  questionTitle.innerHTML =
    `<span class="question-number">${index + 1}.</span> ${item.question}`;

  questionCard.appendChild(questionTitle);

  item.choices.forEach((choice) => {

    const choiceText = document.createElement("p");

    choiceText.className = "quiz-choice";
    choiceText.textContent = choice;

    questionCard.appendChild(choiceText);

  });

  quizQuestions.appendChild(questionCard);

});


// =====================================
// DISPLAY ANSWER KEY
// =====================================

const quizAnswers =
  document.getElementById("quizAnswers");

questions.forEach((item, index) => {

  const answerCard = document.createElement("div");
  answerCard.className = "answer-card";

  const questionTitle = document.createElement("h3");

  questionTitle.innerHTML =
    `<span class="question-number">${index + 1}.</span> ${item.question}`;

  const correctAnswer = document.createElement("p");
  correctAnswer.className = "correct-answer";

  const correctChoice = item.choices.find(choice =>
    choice.startsWith(item.answer + ".")
  );

  correctAnswer.textContent =
    "Correct Answer: " + correctChoice;

  const explanation = document.createElement("p");
  explanation.className = "answer-explanation";
  explanation.textContent = item.explanation;

  answerCard.appendChild(questionTitle);
  answerCard.appendChild(correctAnswer);
  answerCard.appendChild(explanation);

  quizAnswers.appendChild(answerCard);

});


// =====================================
// START PRESENTATION
// =====================================

showSlide(0);
