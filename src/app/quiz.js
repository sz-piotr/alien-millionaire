import quizHtml from './quiz.html'
import questions from './questions'
import { translateSentence } from './language'
import { shuffle } from './utils'

export function runQuiz(knownWords, onSuccess, onFailure) {
  const gameState = {
    currentIndex: 0,
    questions: pickQuestions(questions, 5),
    knownWords,
    onSuccess,
    onFailure() { onFailure(this) },
    get currentQuestion() {
      return this.questions[this.currentIndex]
    }
  }

  initQuiz(gameState)
  renderQuestion(gameState.currentQuestion, knownWords)
}

function initQuiz(gameState) {
  const root = document.getElementById('root')
  root.innerHTML = quizHtml

  const buttons = root.querySelectorAll('.answer-button')

  buttons.forEach((button, i) =>
    button.addEventListener('click', () => onSelectAnswer(gameState, i, buttons))
  )
}

function renderQuestion(question, knownWords) {
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
    answers: shuffle(question.answers)
  }))
}

function pickAndRemove(questions, maxIndex) {
  const questionIdx = Math.floor(Math.random() * Math.min(maxIndex, questions.length))
  const chosenQuestion = questions[questionIdx]
  questions.splice(questionIdx, 1)
  return chosenQuestion
}



function learnNewWords(gameState, questionIdx) {
  return (gameState.questions[gameState.current - 1])
          .text
          .split(' ')
          .concat(gameState.questions[gameState.current]
            .text
            .split(' ')[0]
          )
          .map(word => word.toLowerCase())
          .map(function(word) {
              return ['.', ',', '?', ':'].indexOf(word.slice(-1)) !== -1 ? word.slice( 0, -1 ) : word
            }
          )
}

let blocking = false
function onSelectAnswer(gameState, index, buttons) {
  if(blocking) {
    return
  }

  blocking = true
  buttons[index].className = 'answer-button pending'

  let correctIndex
  gameState.currentQuestion.answers.forEach(
    (answer, index) => {
      if(answer.correct) {
        correctIndex = index
      }
    }
  )

  setTimeout(() => {
    if (index === correctIndex) {
      buttons[index].className = 'answer-button correct'
      gameState.currentIndex++

      setTimeout(() => {
        blocking = false
        buttons[index].className = 'answer-button'
        console.log(gameState.currentIndex, gameState.questions.length)
        if (gameState.currentIndex === gameState.questions.length) {
          gameState.onSuccess()
        } else {
          renderQuestion(gameState.currentQuestion, gameState.knownWords)
        }
      }, 3000)
    } else {
      buttons[index].className = 'answer-button incorrect'
      buttons[correctIndex].className = 'answer-button correct'
      gameState.currentIndex++

      setTimeout(() => {
        blocking = false
        buttons[index].className = 'answer-button'
        buttons[correctIndex].className = 'answer-button'
        gameState.onFailure()
      }, 1000)
    }
  }, 2000)
}
