import Vector2 from './Vector2'
import drawStar from './drawStar'
import drawPolygon from './drawPolygon'
import circle from './circle'
import { marsPattern } from './dotsPattern'

const WIDTH = 800
const HEIGHT = 600

const canvas = document.createElement('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT

const ctx = canvas.getContext('2d')

ctx.fillStyle = '#222'
ctx.fillRect(0, 0, WIDTH, HEIGHT)

for(let i = 0; i < 200; i++) {
  const gray = Math.floor(Math.random() * 130 + 100).toString(16)
  ctx.fillStyle = `#${gray}${gray}${gray}`
  drawStar(
    ctx,
    new Vector2(Math.random() * WIDTH, Math.random() * HEIGHT),
    Math.floor(Math.random() * 4) + 4,
    Math.random() * 2 + .3
  )
}

drawSpaceShip(ctx, new Vector2(150, 200))
drawPlanet(ctx, new Vector2(650, 450))

export default canvas.toDataURL()

function translated(ctx, origin, callback) {
  ctx.translate(origin.x, origin.y)
  callback()
  ctx.translate(-origin.x, -origin.y)
}

function drawSpaceShip(ctx, origin) {
  translated(ctx, origin, () => {
    ctx.fillStyle = '#777'
    drawPolygon(ctx, [
      new Vector2(-10, 0),
      new Vector2(-10, -50),
      new Vector2(-80, -70),
    ])
    drawPolygon(ctx, [
      new Vector2(0, 50),
      new Vector2(-80, 70),
      new Vector2(0, 0),
    ])

    ctx.fillStyle = '#c3c3c3'
    drawPolygon(ctx, [
      new Vector2(-50, -10),
      new Vector2(-10, -50),
      new Vector2(150, 10),
      new Vector2(0, 50),
    ])
  })
}

function drawPlanet(ctx, origin) {
  translated(ctx, origin, () => {
    const pattern = ctx.createPattern(marsPattern(300, 2000), 'repeat')
    ctx.fillStyle = pattern
    circle(ctx, 0, 0, 200)

    ctx.fillStyle = '#B22222'
    circle(ctx, -80, -110, 40)
    circle(ctx, 70, 20, 30)
    circle(ctx, 0, -130, 30)
  })
}
