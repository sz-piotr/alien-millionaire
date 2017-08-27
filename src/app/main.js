import storage from './storage'
import { playIntro } from './intro'
import { runQuiz } from './quiz'

const isFirstTime = false // !storage.getItem('playedIntro')

if(isFirstTime) {
  playIntro(root)
} else {
  runQuiz(
    {
      difficultyLvl: 3,
      questionsCount: 3,
      intervalLengthMultiplier: 3,
      knownWords: []
    },
    points => console.log('FAIL', points),
    () => alert('WOOOOHOOOO, mama is proud')
  )
}
