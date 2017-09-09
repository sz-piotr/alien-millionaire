import Vector2 from './Vector2'
import drawPolygon from './drawPolygon'
import drawStar from './drawStar'
import cirle from './circle'
import marsGroundPattern from './marsGroundPattern'

const WIDTH = 1000
const HEIGHT = 600

const canvas = document.createElement('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT

const ctx = canvas.getContext('2d')

const skyGradient = ctx.createLinearGradient(0, HEIGHT, 0, 0)
skyGradient.addColorStop(0, "#edc99e")
skyGradient.addColorStop(1, "#89d0cf")

ctx.fillStyle = skyGradient
ctx.fillRect(0, 0, WIDTH, HEIGHT)

ctx.fillStyle = 'rgba(255, 255, 255, .3)'
for(let i = 0; i < 30; i++) {
  drawStar(
    ctx,
    new Vector2(Math.random() * WIDTH, Math.random() * HEIGHT / 2),
    Math.floor(Math.random() * 4) + 4,
    Math.random() * 2 + 1
  )
}

ctx.fillStyle = 'white'
cirle(ctx, WIDTH * 0.74, HEIGHT * 0.3, 43)
cirle(ctx, WIDTH * 0.87, HEIGHT / 2, 23)

const pattern = ctx.createPattern(marsGroundPattern(300, 2000), 'repeat')
ctx.fillStyle = pattern
cirle(ctx, WIDTH / 2, HEIGHT + 10000, 10200)

export default canvas.toDataURL()
