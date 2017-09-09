import storage from './storage'
import introHtml from './intro.html'

import introImage1 from './gfx/intro1'
import introImage3 from './gfx/intro3'

export function playIntro(done) {
  const root = document.getElementById('root')
  root.innerHTML = introHtml
  showPage1(root, done)

  storage.setItem('playedIntro', true)
}

function showPage1(root, done) {
  const intro1 = root.querySelector('.intro-1')
  const text1 = root.querySelector('.comic-text-1')
  const text2 = root.querySelector('.comic-text-2')
  const image1 = root.querySelector('.comic-1 .comic-image')
  const image2 = root.querySelector('.comic-2 .comic-image')
  const image3 = root.querySelector('.comic-3 .comic-image')

  image1.style.backgroundImage = `url(${introImage1})`
  image3.style.backgroundImage = `url(${introImage3})`

  let step = 0
  let timeout = setTimeout(next)
  intro1.addEventListener('click', next)

  function next() {
    clearTimeout(timeout)
    switch(step) {
      case 0:
        intro1.style.display = 'block'
        text1.style.opacity = 1
        image1.style.opacity = 1
        break
      case 1:
        image2.style.opacity = 1
        break
      case 2:
        image3.style.opacity = 1
        text2.style.opacity = 1
        break
      case 3:
        intro1.style.display = 'none'
        alert('thats all')
        break
    }
    if(step < 2) {
      timeout = setTimeout(next, 0)
    }
    step++
  }
}
