import marsGroundPattern from './marsGroundPattern'
import circle from './circle'
import Vector2 from './Vector2'
import drawPolygon from './drawPolygon'
import drawSmooth from './drawSmooth'

const WIDTH = 800
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

const pattern = ctx.createPattern(marsGroundPattern(300, 2000), 'repeat')
ctx.fillStyle = pattern
circle(ctx, WIDTH / 2, HEIGHT + 10000, 10130)

const blocksGradient = ctx.createLinearGradient(0, HEIGHT, 0, 0)
blocksGradient.addColorStop(0, "black")
blocksGradient.addColorStop(1, "#333")
ctx.fillStyle = blocksGradient
drawPolygon(ctx, [
  new Vector2(0, 520),
  new Vector2(800, 520),
  new Vector2(800, 600),
  new Vector2(0, 600)
])

drawBlock(ctx, 10, 300, 40)
drawBlock(ctx, 400, 600, 30)

drawBlock(ctx, 10, 60, 120)
drawBlock(ctx, 40, 60, 140)

drawBlock(ctx, 65, 120, 230)

drawBlock(ctx, 130, 230, 310)
drawBlock(ctx, 140, 220, 320)
drawBlock(ctx, 150, 210, 330)

drawBlock(ctx, 250, 300, 190)

drawBlock(ctx, 330, 390, 140)

drawBlock(ctx, 610, 680, 240)
drawBlock(ctx, 630, 680, 260)
drawBlock(ctx, 650, 680, 280)

drawBlock(ctx, 690, 740, 140)

drawBlock(ctx, 760, 790, 180)

drawPolygon(ctx, [
  new Vector2(410, 520),
  new Vector2(460, 450),
  new Vector2(480, 350),
  new Vector2(470, 250),
  new Vector2(420, 180),
  new Vector2(420, 170),

  new Vector2(470, 170),
  new Vector2(470, 160),
  new Vector2(500, 150),
  new Vector2(530, 160),
  new Vector2(530, 170),

  new Vector2(580, 170),
  new Vector2(580, 180),
  new Vector2(530, 250),
  new Vector2(520, 350),
  new Vector2(540, 450),
  new Vector2(590, 520),
])

ctx.fillStyle = 'red'
ctx.beginPath()
drawSmooth(ctx, [
  new Vector2(0, 500),
  new Vector2(450, 150),
  new Vector2(200, 600),
  new Vector2(0, 800),
])
ctx.fill()

ctx.beginPath()
ctx.moveTo(310, 290)
ctx.quadraticCurveTo(330, 160, 440, 190)
ctx.lineTo(380, 260)
ctx.lineTo(420, 240)
ctx.quadraticCurveTo(400, 300, 320, 320)
ctx.closePath()
ctx.fill()

export default canvas.toDataURL()

function drawBlock(ctx, left, right, height) {
  drawPolygon(ctx, [
    new Vector2(left, 520),
    new Vector2(left, 520 - height),
    new Vector2(right, 520 - height),
    new Vector2(right, 520),
  ])
}
