import successHtml from './success.html'
import { translate } from './language'

export function showSuccess() {
  const root = document.getElementById('root')
  root.innerHTML = successHtml
}
