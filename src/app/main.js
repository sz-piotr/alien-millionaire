import storage from './storage'
import { playIntro } from './intro'
import { runQuiz } from './quiz'
import './language'

const isFirstTime = false // !storage.getItem('playedIntro')

if(isFirstTime) {
  playIntro(root)
} else {
  runQuiz(
    {
      difficultyLvl: 4,
      questionsCount: 5,
      intervalLengthMultiplier: 2,
      knownWords: []
    },
    points => alert('NOPE!' + points),
    () => alert('WOOOOHOOOO, mama is proud')
  )
}
