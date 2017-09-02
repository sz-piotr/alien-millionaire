import questions from '../questions.txt'
import alphabet from './alphabet'
import { WheelSet } from './wheels'

const wheelSet = new WheelSet([
  "schjblypkwvaqfm'uzgtredoixn",
  "bchtfsqyxekpgram'zodulwjvni",
  alphabet
])

const translations = {}

questions.split(/\s/)
  .filter(word => word !== "")
  .map(word => /[\w']+/.exec(word)[0].toLowerCase())
  .forEach(word => {
    if(!(word in translations)) {
      translations[word] = generateTranslation(word)
    }
  })

function generateTranslation(word) {
  return word.split('')
    .map(char => wheelSet.getMapped(char))
    .join('')
}

export default translations
