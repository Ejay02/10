const quizData = [
  {
    question: "What is the rarest M&M color?",
    a: "Blue",
    b: "Green",
    c: "Brown",
    d: "Yellow",
    correct: "c",
  },
  {
    question: "In a website browser address bar, what does “www” stand for?",
    a: "World Wide Web",
    b: "White Women War",
    c: "World Web Wide",
    d: "Warri Wanna Watch",
    correct: "a",
  },
  {
    question: "In what year were the first Air Jordan sneakers released?",
    a: "2000",
    b: "1990",
    c: "1995",
    d: "1984",
    correct: "d",
  },
  {
    question:
      "In a bingo game, which number is represented by the phrase “two little ducks”?",
    a: "37",
    b: "21",
    c: "13",
    d: "22",
    correct: "d",
  },
  {
    question: "According to Greek mythology, who was the first woman on earth?",
    a: "Aphrodite",
    b: "Pandora",
    c: "Athena",
    d: "Venus",
    correct: "b",
  },
  {
    question: "Which African country was formerly known as Abyssinia?",
    a: "Kenya",
    b: "Ethiopia",
    c: "Ghana",
    d: "Eritrea",
    correct: "b",
  },
  {
    question:
      " Tennis star Serena Williams won which major tournament while pregnant with her first child?",
    a: "The Australian Open",
    b: "The Japenese Open",
    c: "The London Open",
    d: "The Dubai Open",
    correct: "a",
  },
  {
    question: "In which European city would you find Orly airport?",
    a: "Amsterdam",
    b: "Paris",
    c: "Venice",
    d: "Milan",
    correct: "b",
  },
  {
    question: "Which singer’s real name is Stefani Joanne Angelina Germanotta?",
    a: "Lady Gaga",
    b: "Sia",
    c: "Pink",
    d: "Nelly",
    correct: "a",
  },
  {
    question:
      "How many of Snow White’s seven dwarfs have names ending in the letter Y?",
    a: "5",
    b: "3",
    c: "7",
    d: "2",
    correct: "a",
  },
  {
    question: "What has to be broken before you can use it?",
    a: "Egg",
    b: "Biro",
    c: "Soap",
    d: "Phone",
    correct: "a",
  },
  {
    question: "What month of the year has 28 days?",
    a: "Jan",
    b: "December",
    c: "Febuary",
    d: "All of them",
    correct: "d",
  },
  {
    question: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
    a: "Man",
    b: "Candle",
    c: "Rice",
    d: "Water",
    correct: "a",
  },
  {
    question: "What question can you never answer yes to?",
    a: "Are you hungry?",
    b: "Is there rice at home?",
    c: "Should i not send you money?",
    d: "Are you asleep yet?",
    correct: "d",
  },
  {
    question: "What is always in front of you but can’t be seen?",
    a: "Eyes",
    b: "Nose",
    c: "The Future",
    d: "Lips",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswer() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You got ${score} of  ${quizData.length} answers correctly.</h2>
      <button onclick='location.reload()'>Reload</button>
      `;
    }
  }
});
