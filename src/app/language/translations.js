import questions from '../questions'
import alphabet from './alphabet'
import { WheelSet } from './wheels'
import { flatten, unique } from '../utils'

const wheelSet = new WheelSet([
  "schjblypkwvaqfm'uzgtredoixn",
  "bchtfsqyxekpgram'zodulwjvni",
  alphabet
])

const translations = {}

const words = questions
  .map(question => question.words)
  .reduce(flatten)
  .filter(unique)

words.forEach(function (word) {
  translations[word] = generateTranslation(word)
})

function generateTranslation(word) {
  return word.split('')
    .map(char => wheelSet.getMapped(char))
    .join('')
}

export default translations
