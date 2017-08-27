import storage from './storage'
import { playIntro } from './intro'
import { startQuiz } from './quiz'

const isFirstTime = false // !storage.getItem('playedIntro')

if(isFirstTime) {
  playIntro(root)
} else {
  startQuiz(4)
}
