import quizHtml from './quiz.html'
import questions from './questions'
import background from './gfx/background'
import host from './gfx/host'
import { translateSentence } from './language'
import { shuffle } from './utils'

export function runQuiz(knownWords, onSuccess, onFailure) {
  const gameState = {
    currentIndex: 0,
    questions: pickQuestions(questions, 12),
    knownWords,
    onSuccess,
    onFailure() { onFailure(this) },
    get currentQuestion() {
      return this.questions[this.currentIndex]
    }
  }

  initQuiz(gameState)
  renderQuestion(gameState.currentQuestion, gameState.currentIndex, knownWords)
}

function initQuiz(gameState) {
  const root = document.getElementById('root')
  root.innerHTML = quizHtml
  root.querySelector('.quiz-wrapper').style.backgroundImage = `url('${background}')`
  root.querySelector('.host').src = host.toDataURL()

  let buttons = root.querySelectorAll('.answer-button')
  buttons = [].__proto__.slice.call(buttons, 1)

  buttons.forEach((button, i) =>
    button.addEventListener('click', () => onSelectAnswer(gameState, i, buttons))
  )
}

function renderQuestion(question, currentIndex, knownWords) {
  document.querySelector('.scores .score-' + currentIndex).classList.add('active')
  document.getElementById("quiz-question").innerHTML = translateSentence(question.text, knownWords)
  const answerElements = document.querySelectorAll('#quiz-answers .answer')
  question.answers.forEach((answer, index) =>
    answerElements[index].innerHTML = translateSentence(answer.text, knownWords)
  )
}

function pickQuestions(questions, count) {
  const maxIndex = Math.floor(questions.length / count) * 3
  questions = questions.slice()

  const pickedQuestions = []
  for(let i = 0; i < count; i++) {
    pickedQuestions.push(pickAndRemove(questions, maxIndex))
    questions.splice(0, Math.min(maxIndex / 3 - 1, questions.length))
  }

  return pickedQuestions.map((question) => ({
    text: question.text,
    words: question.words,
    answers: shuffle(question.answers)
  }))
}

function pickAndRemove(questions, maxIndex) {
  const questionIdx = Math.floor(Math.random() * Math.min(maxIndex, questions.length))
  const chosenQuestion = questions[questionIdx]
  questions.splice(questionIdx, 1)
  return chosenQuestion
}

let blocking = false
function onSelectAnswer(gameState, index, buttons) {
  if(blocking) {
    return
  }
  blocking = true

  const correctIndex = getCorrectIndex(gameState)
  buttons[index].className = 'answer-button pending'

  setTimeout(() => {
    if (index === correctIndex) {
      buttons[index].className = 'answer-button correct'

      setTimeout(() => {
        blocking = false
        buttons[index].className = 'answer-button'
        gameState.currentIndex++
        if (gameState.currentIndex === gameState.questions.length) {
          gameState.onSuccess()
        } else {
          renderQuestion(gameState.currentQuestion, gameState.currentIndex, gameState.knownWords)
        }
      }, 1500)
    } else {
      buttons[index].className = 'answer-button incorrect'
      buttons[correctIndex].className = 'answer-button correct'

      setTimeout(() => {
        blocking = false
        buttons[index].className = 'answer-button'
        buttons[correctIndex].className = 'answer-button'
        gameState.onFailure()
      }, 1500)
    }
  }, 1500)
}

function getCorrectIndex(gameState) {
  let correctIndex
  gameState.currentQuestion.answers.forEach(
    (answer, index) => {
      if(answer.correct) {
        correctIndex = index
      }
    }
  )
  return correctIndex
}
