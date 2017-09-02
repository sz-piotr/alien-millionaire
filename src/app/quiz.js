import quizHtml from './quiz.html'
import questionsDb from './questions'

export function runQuiz(config, onFailure, onSuccess) {
  const gameState = {
    currentQuestion: 0,
    questions: pickQuestions(questionsDb, config)
  }
  initQuiz(config, index => onSelectAnswer(gameState, index, onFailure, onSuccess))
  renderQuestion(gameState.questions[0])
}

function onSelectAnswer(gameState, index, onFailure, onSuccess) {
  if (gameState.questions[gameState.currentQuestion].answers[index].correct) {
    gameState.currentQuestion++
    if (gameState.currentQuestion === gameState.questions.length) {
      onSuccess()
    } else {
      renderQuestion(gameState.questions[gameState.currentQuestion])
    }
  } else {
    onFailure(gameState.currentQuestion)
  }
}

function initQuiz({ difficultyLvl }, onClick) {
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

function pickQuestions(questionsDb, { difficultyLvl, questionsCount, intervalLengthMultiplier }) {
  const maxIndex = Math.floor(questionsDb.length / questionsCount) * intervalLengthMultiplier
  questionsDb = questionsDb.slice()

  const pickedQuestions = []
  for(let i = 0; i < questionsCount; i++) {
    pickedQuestions.push(pickQuestion(
      questionsDb,
      difficultyLvl,
      maxIndex,
      maxIndex / intervalLengthMultiplier - 1)
    )
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

function pickQuestion(questionsDb, difficultyLvl, maxIndex, removeCount) {
  const questionIdx = Math.floor(Math.random() * Math.min(maxIndex, questionsDb.length))
  const chosenQuestion = questionsDb[questionIdx]
  questionsDb.splice(questionIdx, 1)
  questionsDb.splice(0, Math.min(removeCount, questionsDb.length))
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
