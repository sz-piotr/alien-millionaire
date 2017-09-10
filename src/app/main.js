import storage from './storage'
import { playIntro } from './intro'
import { runQuiz } from './quiz'
import './language'

const isFirstTime = true // !storage.getItem('playedIntro')

if(isFirstTime) {
  playIntro(() => alert('DONE!'))
} else {
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
