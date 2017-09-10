const WIDTH = 1000
const HEIGHT = 600

const canvas = document.createElement('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT

const ctx = canvas.getContext('2d')

ctx.fillStyle = 'rebeccapurple'
ctx.fillRect(0, 0, WIDTH, HEIGHT)

export default canvas.toDataURL()
