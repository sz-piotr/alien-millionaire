import menuHtml from './menu.html'
import storage from './storage'

function showMenu(isFirstTime, showIntro, startGame) {
  const root = document.getElementById('root')
  root.innerHTML = menuHtml

  const startGameButton = root.querySelector('#start')
  const showIntroButton = root.querySelector('#intro')
  const reset = root.querySelector('#reset')

  if(!isFirstTime) {
    root.querySelector('.start-game').innerHTML = 'Try Again'
  }

  startGameButton.addEventListener('click', startGame)
  showIntroButton.addEventListener('click', showIntro)
  reset.addEventListener('click', () => {
    if(confirm('Erase all saved data?')) {
      storage.removeItem('knownWords')
      storage.removeItem('playedIntro')
      storage.removeItem('playNumber')
      location.reload()
    }
  })
}

export { showMenu }
