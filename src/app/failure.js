import failureHtml from './failure.html'
import { translate } from './language'

export function showFailure(freeWords, paidWords, nextScreen) {
  const root = document.getElementById('root')
  root.innerHTML = failureHtml

  const freeWordsElement = root.querySelector('.words.free')
  const paidWordsElement = root.querySelector('.words.paid')

  if(freeWords.length === 0) {
    freeWordsElement.style.display = 'none'
  } else {
    for(const word of freeWords) {
      freeWordsElement.appendChild(createWordTranslation(word))
    }
  }

  if(paidWords.length === 0) {
    paidWordsElement.style.display = 'none'
  } else {
    for(const word of paidWords) {
      paidWordsElement.appendChild(createWordTranslation(word))
    }
  }


  root.querySelector('#continue').addEventListener('click', nextScreen)
}


function createWordTranslation(word) {
  const element = document.createElement('div')
  element.innerHTML = translate(word, []) + ' -&gt; ' + word
  return element
}
