import menuHtml from './menu.html'
import storage from './storage'

function showMenu(showIntro, startGame) {
  const root = document.getElementById('root')
  root.innerHTML = menuHtml

  const startGameButton = root.querySelector('#start')
  const showIntroButton = root.querySelector('#intro')
  const reset = root.querySelector('#reset')

  startGameButton.addEventListener('click', startGame)
  showIntroButton.addEventListener('click', showIntro)
  reset.addEventListener('click', () => {
    if(confirm('Erase all saved data?')) {
      storage.removeItem('knownWords')
      storage.removeItem('playedIntro')
      location.reload()
    }
  })
}

export { showMenu }
