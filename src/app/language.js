let lang = [
  0x2200, 0x22F9, 0x22CA, 0x22BD, 0x222E,
  0x221D, 0x2227, 0x224E, 0x2257, 0x226C,
  0x2287, 0x228D, 0x22D4, 0x2234, 0x23DA,
  0x23DB, 0x236C, 0x223D, 0x22CB, 0x2256
]
lang = lang.map(e => "&#" + e + ";")
// lang  =[]
// for(let letter = 0x1C50; letter < 0x1C76; letter++) {
//   lang.push("&#" + letter + ";")
// }

// const text = lang

const text = "Brown fox jumps over a lazy dog"
  .toLowerCase()
  .split('')
  .map(x => x.charCodeAt(0) - 'a'.charCodeAt(0))
  .map(x => x === -65 ? '&nbsp;&nbsp;' : lang[x%20])
  .join('')

const text2 = "abcdefghijklmnopqrst"
  .toLowerCase()
  .split('')
  .map(x => x.charCodeAt(0) - 'a'.charCodeAt(0))
  .map(x => x === -65 ? '&nbsp;&nbsp;' : lang[x%20])
  .join('')

// setTimeout(() => document.body.innerHTML = text + '<br/>' + text2, 100)

// console.log(lang)
