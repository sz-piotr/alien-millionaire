import host from './host'
import circle from './circle'

const WIDTH = 1000
const HEIGHT = 600

const canvas = document.createElement('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT

const ctx = canvas.getContext('2d')

const backGradient = ctx.createLinearGradient(0, HEIGHT, 0, 0)
backGradient.addColorStop(0, "#060211")
backGradient.addColorStop(1, "#3a5292")
ctx.fillStyle = backGradient
ctx.fillRect(0, 0, WIDTH, HEIGHT)

for(let row = 0; row < 5; row++) {
  for(let column = 0; column < 100; column++) {
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() / 2})`
    circle(ctx, column * 30 + 15, row * 30 + 250, Math.random() * 5 + 5)
  }
}

ctx.drawImage(host, 400, 100, 500, 750)

export default canvas.toDataURL()
