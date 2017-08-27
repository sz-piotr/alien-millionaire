import quizHtml from './quiz.html'
import questionsDb from './questions.json'

const QUESTIONS_COUNT = 3

export function runQuiz(difficultyLvl) {
  const gameState = {
    currentQuestion: 0,
    questions: pickQuestions(questionsDb, difficultyLvl)
  }
  initQuiz(difficultyLvl, index => onSelectAnswer(gameState, index))
  renderQuestion(gameState.questions[0])
}

function onSelectAnswer(gameState, index) {
  if (gameState.questions[gameState.currentQuestion].answers[index].correct) {
    alert("you are one step closer to seeing mama again :D")
    gameState.currentQuestion++
    renderQuestion(gameState.questions[gameState.currentQuestion])
  } else {
    alert("you (are) LOST (for x more days XD)")
  }
}

function initQuiz(difficultyLvl, onClick) {
  document.getElementById("root").innerHTML = quizHtml
  const answersElement = document.getElementById("quiz-answers")
  for(let i = 0; i < difficultyLvl; i++) {
    answersElement.appendChild(createAnswerElement(() => onClick(i)))
  }
}

function createAnswerElement(onClick) {
  const li = document.createElement('li')
  const a = document.createElement('a')
  a.href = '#'
  a.addEventListener('click', onClick)
  li.appendChild(a)
  return li
}

function renderQuestion({ text, answers }) {
  document.getElementById("quiz-question").innerHTML = text
  const answerElements = document.querySelectorAll('#quiz-answers a')
  answers.forEach((answer, index) =>
    answerElements[index].innerHTML = answer.text
  )
}

function pickQuestions(questionsDb, difficultyLvl) {
  questionsDb = questionsDb.slice()

  const pickedQuestions = []
  for(let i = 0; i < QUESTIONS_COUNT; i++) {
    pickedQuestions.push(pickQuestion(questionsDb, difficultyLvl))
  }

  return pickedQuestions.map((question) => ({
    text: question.question,
    answers: shuffle(
      question.answers
        .filter((answer, index) => index < difficultyLvl)
        .map((answer, index) => ({ text: answer, correct: index === 0 }))
    )
  }))
}

function pickQuestion(questionsDb, difficultyLvl) {
  const questionIdx = Math.floor(Math.random() * questionsDb.length)
  const chosenQuestion = questionsDb[questionIdx]
  questionsDb.splice(questionIdx, 1)
  // questionsDb.splice(0, 4)
  return chosenQuestion
}

function shuffle(array) {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
