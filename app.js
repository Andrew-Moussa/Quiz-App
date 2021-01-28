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
    question: "Which one of these is a JS package manager?",
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
const quizBox = document.getElementById("quizHeader");
const quizContanier = document.getElementById("quiz")
const startTimer = document.querySelector('#start-timer')
const header = document.querySelector(".Header")
console.log("🚀 ~ file: app.js ~ line 49 ~ header", header)
const timeLeftDisplay = document.querySelector('#time-left');

//## timer##
const countDown = () => {
  let timeLeft = 10;
  timeLeftDisplay.innerHTML = timeLeft
  let countDown = setInterval(function () {
    timeLeft -= 1
    timeLeftDisplay.innerHTML = timeLeft
    if (timeLeft === 0) {
      timeLeft = 0
      clearInterval(countDown)
    }
    // clearInterval(countDown)
  }, 1000);
}

// function clearTimer(){
//   clearInterval(countDown)
// }

startTimer.addEventListener('click', function () {
  startTimer.style.display = "none";
  quizContanier.style.display = "inline-block";

  countDown();

});
// return countDown()

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
  clearInterval(countDown)
  countDown();
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct)
      score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();


    } else if (score == 4) {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
        `
    } else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>`
    }
  }
});







/// #### dark mode ###

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener('change', () => {

  document.body.classList.toggle('dark');
  questionElement.classList.toggle('h2-Dark');
  ulElement.classList.toggle('ul-Dark');
  quiz.classList.toggle("quiz-containerDark");
  submitButton.classList.toggle("button-Dark");
  header.classList.toggle("Header-Dark");

})
