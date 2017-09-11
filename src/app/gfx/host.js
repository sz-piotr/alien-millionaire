import arm from './arm'
import circle from './circle'
import { skinPattern } from './dotsPattern'

const WIDTH = 1000
const HEIGHT = 1500

const canvas = document.createElement('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT

const ctx = canvas.getContext('2d')

ctx.translate(WIDTH / 2, HEIGHT / 2 - 500)

ctx.save()
ctx.drawImage(arm, 50, -100, 350, 350)
ctx.rotate(45 * Math.PI / 180)
ctx.drawImage(arm, 230, -130, 350, 350)
ctx.restore()

ctx.save()
ctx.scale(-1, 1)
ctx.drawImage(arm, 50, -100, 350, 350)
ctx.rotate(45 * Math.PI / 180)
ctx.drawImage(arm, 230, -130, 350, 350)
ctx.restore()

ctx.fillStyle = ctx.createPattern(skinPattern(), 'repeat')
ctx.beginPath()
ctx.moveTo(-70, 90)
ctx.lineTo(-70, 0)
ctx.quadraticCurveTo(-70, -160, 0, -160)
ctx.quadraticCurveTo(70, -160, 70, 0)
ctx.lineTo(70, 90)
ctx.closePath()
ctx.fill()

ctx.fillStyle = 'white'
circle(ctx, 0, -60, 40)
ctx.fillStyle = 'black'
circle(ctx, 0, -60, 10)

ctx.strokeStyle = 'black'
ctx.lineWidth = 5
ctx.beginPath()
ctx.moveTo(-45, 10)
ctx.quadraticCurveTo(-30, 50, -15, 10)
ctx.quadraticCurveTo(0, 50, 15, 10)
ctx.quadraticCurveTo(30, 50, 45, 10)
ctx.stroke()


ctx.fillStyle = 'black'
ctx.beginPath()
ctx.moveTo(-150, 10000)
ctx.moveTo(-150, 440)
ctx.quadraticCurveTo(-150, 200, -70, 70)
ctx.quadraticCurveTo(0, 80, 70, 70)
ctx.quadraticCurveTo(150, 200, 150, 440)
ctx.lineTo(150, 10000)
ctx.closePath()
ctx.fill()

ctx.fillStyle = 'white'
ctx.beginPath()
ctx.moveTo(-70, 70)
ctx.quadraticCurveTo(0, 80, 70, 70)
ctx.lineTo(0, 220)
ctx.closePath()
ctx.fill()
ctx.fillStyle = 'green'
ctx.beginPath()
ctx.moveTo(-40, 90)
ctx.lineTo(40, 130)
ctx.lineTo(40, 90)
ctx.lineTo(-40, 130)
ctx.closePath()
ctx.fill()

export default canvas
