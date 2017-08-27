import storage from './storage'
import { playIntro } from './intro'
import { runQuiz } from './quiz'

const isFirstTime = false // !storage.getItem('playedIntro')

if(isFirstTime) {
  playIntro(root)
} else {
  runQuiz(4)
}
