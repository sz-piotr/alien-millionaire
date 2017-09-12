import failureHtml from './failure.html'

export function showFailure(freeWords, paidWords, nextScreen) {
  const root = document.getElementById('root')
  root.innerHTML = failureHtml
  setTimeout(nextScreen, 1000)
}
