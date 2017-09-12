export const flatten = (a, b) => a.concat(b)
export const unique = (item, index, array) => array.indexOf(item) === index
export const extractWord = word => {
  const match = /^[\w']+/.exec(word)
  return match ? match[0].toLowerCase() : ''
}
export const extractPunctuation = word => {
  const match = /[\?\!,\.]$/.exec(word)
  return match ? match[0] : ''
}
