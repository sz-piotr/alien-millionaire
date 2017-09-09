import Vector2 from './Vector2'
import drawStar from './drawStar'
import drawPolygon from './drawPolygon'
import circle from './circle'
import panel from './panel'

const WIDTH = 600
const HEIGHT = 800

const canvas = document.createElement('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT

const ctx = canvas.getContext('2d')


const spaceGradient = ctx.createRadialGradient(
  WIDTH / 2, HEIGHT / 2, 1000,
  WIDTH / 2, HEIGHT / 2, 200
)
spaceGradient.addColorStop(0, "red")
spaceGradient.addColorStop(1, "#222")
ctx.fillStyle = spaceGradient
ctx.fillRect(0, 0, WIDTH, HEIGHT)

for(let i = 0; i < 100; i++) {
  const gray = Math.floor(Math.random() * 40 + 60).toString(16)
  ctx.fillStyle = `#${gray}${gray}${gray}`
  drawStar(
    ctx,
    new Vector2(Math.random() * WIDTH, Math.random() * HEIGHT),
    Math.floor(Math.random() * 4) + 4,
    Math.random() * 2 + .3
  )
}

ctx.fillStyle = '#838383'
circle(ctx, WIDTH / 2, -1950, 2110)
circle(ctx, WIDTH / 2, HEIGHT + 1900, 2110)
ctx.fillStyle = '#666'
circle(ctx, WIDTH / 2, -1950, 2100)
circle(ctx, WIDTH / 2, HEIGHT + 1900, 2100)

ctx.fillStyle = '#544'
circle(ctx, 400, 400, 50)
circle(ctx, 390, 410, 40)
circle(ctx, 430, 390, 40)
circle(ctx, 440, 380, 35)
circle(ctx, 415, 380, 35)

ctx.fillStyle = '#433'
circle(ctx, 430, 410, 7)
circle(ctx, 365, 420, 7)
circle(ctx, 400, 400, 10)
circle(ctx, 420, 360, 10)
circle(ctx, 385, 430, 13)
circle(ctx, 445, 373, 13)

ctx.save()

ctx.setTransform(1, -.1, .1, 1, 0, 0)
ctx.drawImage(panel(190, 130, 'ALERT'), -10, 550)

ctx.setTransform(1, .07, -.1, 1, 0, 0)
ctx.drawImage(panel(260, 130, 'COLLISION!'), 350, 510)

ctx.restore()

ctx.strokeStyle = 'rgba(255, 0, 0, .7)'
ctx.lineWidth = 10
ctx.beginPath()
ctx.arc(410, 395, 100, Math.PI * 1 / 10, Math.PI * 4 / 10)
ctx.stroke()
ctx.beginPath()
ctx.arc(410, 395, 100, Math.PI * 6 / 10, Math.PI * 9 / 10)
ctx.stroke()
ctx.beginPath()
ctx.arc(410, 395, 100, Math.PI * 11 / 10, Math.PI * 14 / 10)
ctx.stroke()
ctx.beginPath()
ctx.arc(410, 395, 100, Math.PI * 16 / 10, Math.PI * 19 / 10)
ctx.stroke()

ctx.fillStyle = 'rgba(255, 0, 0, .7)'
ctx.font = 'bold 42px monospace'
ctx.textAlign = "center"
ctx.fillText('! DANGER !', 410, 410)


export default canvas.toDataURL()
