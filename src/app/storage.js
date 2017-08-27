export default {
  app: 'com.szpiotr.alienmillionaire.',
  setItem(key, value) {
    localStorage.setItem(this.app + key, JSON.stringify(value))
  },
  getItem(key) {
    return JSON.parse(localStorage.getItem(this.app + key))
  },
  removeItem(key) {
    localStorage.removeItem(this.app + key)
  }
}
