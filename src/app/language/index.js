import translations from './translations'

export { translations }

// TODO: not eat question marks
export function translate(word, knownWords) {
  const normalized = /[\w']+/.exec(word)[0].toLowerCase()
  if(knownWords && knownWords.indexOf(normalized) !== -1) {
    return word
  }
  return translations[normalized]
}

export function translateSentence(sentence, knownWords) {
  return sentence.split(' ')
    .map(word => translate(word, knownWords))
    .join(' ')
}
