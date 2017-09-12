import translations from './translations'
import { extractWord, extractPunctuation } from '../utils'

export { translations }

export function translate(string, knownWords) {
  const word = extractWord(string)
  const punctuation = extractPunctuation(string)
  if(knownWords.indexOf(word) !== -1) {
    return `<span class="language-human">${string}</span>`
  }
  return `<span class="language-alien">${translations[word] + punctuation}</span>`
}

export function translateSentence(sentence, knownWords) {
  return sentence.split(/\s/)
    .filter(word => word !== '')
    .map(word => translate(word, knownWords))
    .join(' ')
}
