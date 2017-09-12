export const flatten = (a, b) => a.concat(b)

export const unique = (item, index, array) => array.indexOf(item) === index

export const take = number => (item, index) => index < number

export const extractWord = word => {
  const match = /^[\w']+/.exec(word)
  return match ? match[0].toLowerCase() : ''
}

export const extractPunctuation = word => {
  const match = /[\?\!,\.]$/.exec(word)
  return match ? match[0] : ''
}

export function shuffle(array) {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
