import storage from './storage'
import introHtml from './intro.html'

import introImage1 from './gfx/intro1'
import introImage2 from './gfx/intro2'
import introImage3 from './gfx/intro3'
import introImage5 from './gfx/intro5'
import introImage6 from './gfx/intro6'

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

  const strip1 = root.querySelector('.comic-1')
  const strip2 = root.querySelector('.comic-2')
  const strip3 = root.querySelector('.comic-3')

  image1.style.backgroundImage = `url(${introImage1})`
  image2.style.backgroundImage = `url(${introImage2})`
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
        strip1.style.opacity = 1
        break
      case 1:
        strip2.style.opacity = 1
        break
      case 2:
        strip3.style.opacity = 1
        text2.style.opacity = 1
        break
      case 3:
        intro1.style.display = 'none'
        showPage2(root, done)
        break
    }
    if(step < 2) {
      timeout = setTimeout(next, 2000)
    }
    step++
  }
}

function showPage2(root, done) {
  const intro2 = root.querySelector('.intro-2')
  const text3 = root.querySelector('.comic-text-3')
  const image4 = root.querySelector('.comic-4 .comic-image')
  const image5 = root.querySelector('.comic-5 .comic-image')
  const image6 = root.querySelector('.comic-6 .comic-image')

  const strip4 = root.querySelector('.comic-4')
  const strip5 = root.querySelector('.comic-5')
  const strip6 = root.querySelector('.comic-6')

  image4.style.backgroundColor = 'cornflowerblue'
  image5.style.backgroundImage = `url(${introImage5})`
  image6.style.backgroundImage = `url(${introImage6})`

  let step = 0
  let timeout = setTimeout(next)
  intro2.addEventListener('click', next)

  function next() {
    clearTimeout(timeout)
    switch(step) {
      case 0:
        intro2.style.display = 'block'
        strip4.style.opacity = 1
        break
      case 1:
        strip5.style.opacity = 1
        break
      case 2:
        strip6.style.opacity = 1
        text3.style.opacity = 1
        break
      case 3:
        done()
        break
    }
    if(step < 2) {
      timeout = setTimeout(next, 2000)
    }
    step++
  }
}
