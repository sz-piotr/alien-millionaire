import storage from './storage'
import { playIntro } from './intro'
import { runQuiz } from './quiz'
import { showMenu } from './menu'
import './language'

const isFirstTime = !storage.getItem('playedIntro')

if(isFirstTime) {
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
  runQuiz({
    difficultyLvl: 4,
    questionsCount: 5,
    intervalLengthMultiplier: 2,
    knownWords: [
      'what',
      'one',
      'two',
      'red'
    ],
    onFailure: points => alert('NOPE!' + points),
    onSuccess: () => alert('WOOOOHOOOO, mama is proud')
  })
}
