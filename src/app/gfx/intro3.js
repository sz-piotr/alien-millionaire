import Vector2 from './Vector2'
import drawPolygon from './drawPolygon'
import drawStar from './drawStar'
import circle from './circle'
import drawSmooth from './drawSmooth'
import { marsPattern } from './dotsPattern'

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
circle(ctx, WIDTH * 0.74, HEIGHT * 0.3, 43)
circle(ctx, WIDTH * 0.87, HEIGHT / 2, 23)

const pattern = ctx.createPattern(marsPattern(300, 2000), 'repeat')
ctx.fillStyle = pattern
circle(ctx, WIDTH / 2, HEIGHT + 10000, 10200)

ctx.fillStyle = '#777'
drawPolygon(ctx, [
  new Vector2(140, 435),
  new Vector2(150, 385),
  new Vector2(100, 365),
])
drawPolygon(ctx, [
  new Vector2(150, 385),
  new Vector2(130, 455),
  new Vector2(80, 465),
])
ctx.fillStyle = '#a3a3a3'
drawPolygon(ctx, [
  new Vector2(100, 405),
  new Vector2(150, 385),
  new Vector2(300, 425),
  new Vector2(130, 455),
])

ctx.fillStyle = 'rgba(100, 110, 120, .4)'
ctx.beginPath()
drawSmooth(ctx, [
  new Vector2(200, 425),
  new Vector2(230, 325),
  new Vector2(150, 250),
  new Vector2(160, 150),
  new Vector2(100, -200),
  new Vector2(-200, 100),
  new Vector2(40, 150),
  new Vector2(30, 230),
  new Vector2(70, 300),
  new Vector2(150, 335),
  new Vector2(160, 410),
])
ctx.closePath()
ctx.fill()

export default canvas.toDataURL()
