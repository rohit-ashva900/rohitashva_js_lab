// Define quiz questions
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: 0,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: 1,
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "Jane Austen",
    ],
    answer: 1,
  },
];

// Initialize variables
let currentQuestion = 0;
let score = 0;
const totalQuestions = questions.length;

// DOM elements
const questionElement = document.getElementById("question");
const choiceElements = document.querySelectorAll(".buttons button");
const progressElement = document.getElementById("progress");

// Function to display question and options
function displayQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;
  q.options.forEach((option, index) => {
    choiceElements[index].textContent = option;
  });
  updateProgress();
}

// Function to update progress
function updateProgress() {
  progressElement.textContent = `Question ${
    currentQuestion + 1
  } of ${totalQuestions}`;
}

// Function to check answer and update score
function checkAnswer(answerIndex) {
  if (answerIndex === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < totalQuestions) {
    displayQuestion();
  } else {
    showResult();
  }
}

// Function to show result
function showResult() {
  const scorePercentage = (score / totalQuestions) * 100;
  const result = `You scored ${score} out of ${totalQuestions}. (${scorePercentage.toFixed(
    2
  )}%)`;
  questionElement.textContent = result;
  progressElement.textContent = "Quiz completed";
}

// Event listeners for choice buttons
choiceElements.forEach((button, index) => {
  button.addEventListener("click", () => {
    checkAnswer(index);
  });
});

// DOM element for reset button
const resetButton = document.getElementById("resetBtn");

// Function to reset the quiz
function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  displayQuestion();
}

// Event listener for reset button
resetButton.addEventListener("click", resetQuiz);

// Display first question
displayQuestion();
