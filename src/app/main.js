import storage from './storage'
import { playIntro } from './intro'
import { runQuiz } from './quiz'
import { showMenu } from './menu'
import './language'

const gameState = {
  firstTime: !storage.getItem('playedIntro'),
  knownWords: [
    'what',
    'one',
    'two',
    'red'
  ]
}

if(gameState.firstTime) {
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
  showMenu(intro, start)
}

function start() {
  runQuiz(gameState.knownWords, onSuccess, onFailure)
}

function onSuccess() {
  alert('WOOOOHOOOO, mama is proud')
}

function onFailure(quizState) {
  console.error(quizState)
}
