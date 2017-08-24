import storage from './storage'
import { playIntro } from './intro'

const isFirstTime = true // !storage.getItem('playedIntro')

if(isFirstTime) {
  playIntro(root)
} else {
}
