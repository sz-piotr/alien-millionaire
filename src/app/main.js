import storage from './storage'
import { playIntro } from './intro'
import { runQuiz } from './quiz'
import { showMenu } from './menu'
import { showFailure } from './failure'
import { showSuccess } from './success'
import { take, flatten, shuffle } from './utils'
import './language'

const gameState = {
  playedIntro: storage.getItem('playedIntro'),
  playNumber: storage.getItem('playNumber') || 0,
  knownWords: storage.getItem('knownWords') || []
}

if(!gameState.playedIntro) {
  intro()
} else {
  menu()
}

function intro() {
  playIntro(function done() {
    storage.setItem('playedIntro', true)
    menu()
  })
}

function menu() {
  showMenu(gameState.playNumber == 0, intro, start)
}

function start() {
  gameState.playNumber++
  storage.setItem('playNumber', gameState.playNumber)
  runQuiz(gameState.knownWords, onSuccess, onFailure)
}

function onSuccess() {
  showSuccess()
}

function onFailure(quizState) {
  const newWords = getNewWords(
    quizState.currentIndex,
    quizState.questions,
    gameState.knownWords
  )
  gameState.knownWords = gameState.knownWords.concat(newWords)
  storage.setItem('knownWords', gameState.knownWords)

  showFailure(newWords.slice(0, 3), newWords.slice(3), menu)
}

function getNewWords(index, questions, knownWords) {
  const wordsFromQuestions = questions
    .filter(take(index + 1))
    .map(question => question.words)
    .reduce(flatten)
    .filter(word => knownWords.indexOf(word) === -1)

  const selectedWords = shuffle(wordsFromQuestions)
    .filter(take(3 + index * 2))

  return selectedWords
}
