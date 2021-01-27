const quizData = [
  {
    question: "Which tool can you use to ensure code quality?",
    a: "Angular",
    b: "jQuery",
    c: "RequireJS",
    d: "ESLint",
    correct: "d",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    a: "Node.js",
    b: "TypeScript",
    c: "npm",
    d: "Docker",
    correct: "c",
  },
  {
    question: "Who invented JavaScript?",
    a: "Douglas Crockford",
    b: "Sheryl Sandberg",
    c: "Brendan Eich",
    d: "David Heinemeier Hansson",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
const ulElement = document.querySelector("ul");
const quizBox = document.getElementById("quizHeader")

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
        `
    }
  }
});







/// #### dark morde ###

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener('change', () => {

  document.body.classList.toggle('dark');
  questionElement.classList.toggle('h2-Dark');
  ulElement.classList.toggle('ul-Dark');
  quiz.classList.toggle("quiz-containerDark");
  submitButton.classList.toggle("button-Dark");

})
