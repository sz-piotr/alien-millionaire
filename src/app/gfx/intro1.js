import Vector2 from './Vector2'
import drawStar from './drawStar'
import drawPolygon from './drawPolygon'

const WIDTH = 800
const HEIGHT = 600

const canvas = document.createElement('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT

const ctx = canvas.getContext('2d')

ctx.fillStyle = '#222'
ctx.fillRect(0, 0, WIDTH, HEIGHT)

for(let i = 0; i < 200; i++) {
  drawStar(
    ctx,
    new Vector2(Math.random() * WIDTH, Math.random() * HEIGHT),
    Math.floor(Math.random() * 4) + 4,
    Math.random() * 2 + .3,
    Math.random() * 130 + 100
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
      { x: -10, y: 0 },
      { x: -10, y: -50 },
      { x: -80, y: -70 },
    ])
    drawPolygon(ctx, [
      { x: 0, y: 50 },
      { x: -80, y: 70 },
      { x: 0, y: 0 },
    ])

    ctx.fillStyle = '#c3c3c3'
    drawPolygon(ctx, [
      { x: -50, y: -10 },
      { x: -10, y: -50 },
      { x: 150, y: 10 },
      { x: 0, y: 50 },
    ])
  })
}

function drawPlanet(ctx, origin) {
  translated(ctx, origin, () => {
    ctx.fillStyle = '#DC143C'
    circle(ctx, 0, 0, 200)
    
    ctx.fillStyle = '#B22222'
    circle(ctx, -80, -110, 40)
    circle(ctx, 70, 20, 30)
    circle(ctx, 0, -130, 30)
  })
}

function circle(ctx, x, y, r) {
  ctx.beginPath()
  ctx.arc(x, y, r, 0, 2 * Math.PI)
  ctx.closePath()
  ctx.fill()
}
