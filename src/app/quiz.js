import quizHtml from './quiz.html'
import questionsDb from './questions'
import { translateSentence } from './language'

export function runQuiz(config) {
  const gameState = {
    currentQuestion: 0,
    questions: pickQuestions(questionsDb, config)
  }
  initQuiz(config, index => onSelectAnswer(gameState, index, config))
  renderQuestion(gameState.questions[0], config.knownWords)
}

function onSelectAnswer(gameState, index, config) {
  if (gameState.questions[gameState.currentQuestion].answers[index].correct) {
    gameState.currentQuestion++
    if (gameState.currentQuestion === gameState.questions.length) {
      config.onSuccess()
    } else {
      let newWords = learnNewWords(gameState)
      console.log(gameState.questions[gameState.currentQuestion])
      console.log(newWords)
      config.knownWords = config.knownWords.concat(newWords)
      console.log(config.knownWords)
      renderQuestion(gameState.questions[gameState.currentQuestion], config.knownWords)
    }
  } else {
    config.onFailure(gameState.currentQuestion)
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

function renderQuestion({ text, answers }, knownWords) {
  document.getElementById("quiz-question").innerHTML = translateSentence(text, knownWords)
  const answerElements = document.querySelectorAll('#quiz-answers a')
  answers.forEach((answer, index) =>
    answerElements[index].innerHTML = translateSentence(answer.text, knownWords)
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

function learnNewWords(gameState, questionIdx) {
  return (gameState.questions[gameState.currentQuestion - 1])
          .text
          .split(' ')
          .concat(gameState.questions[gameState.currentQuestion]
            .text
            .split(' ')[0]
          )
          .map(word => word.toLowerCase())
          .map(function(word) {
              return ['.', ',', '?', ':'].indexOf(word.slice(-1)) !== -1 ? word.slice( 0, -1 ) : word
            }
          )
}
