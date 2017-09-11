import menuHtml from './menu.html'

function showMenu(showIntro, startGame) {
  const root = document.getElementById('root')
  root.innerHTML = menuHtml

  const startGameButton = root.querySelector('#start')
  const showIntroButton = root.querySelector('#intro')

  startGameButton.addEventListener('click', startGame)
  showIntroButton.addEventListener('click', showIntro)
}

export { showMenu }
