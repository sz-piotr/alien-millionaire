import circle from './circle'
import { skinPattern } from './dotsPattern'

const WIDTH = 350
const HEIGHT = 350

const canvas = document.createElement('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT

const ctx = canvas.getContext('2d')

ctx.translate(10, 205)

ctx.fillStyle = ctx.createPattern(skinPattern(), 'repeat')
ctx.beginPath()
ctx.moveTo(0, 0)
ctx.bezierCurveTo(100, 20, 160, -40, 220, -120)
ctx.bezierCurveTo(200, -200, 280, -200, 280, -200)
ctx.bezierCurveTo(260, -180, 240, -160, 260, -140)
ctx.bezierCurveTo(300, -140, 300, -140, 320, -180)
ctx.bezierCurveTo(320, -180, 340, -80, 260, -80)
ctx.bezierCurveTo(220, 40, 160, 80, 60, 140)
ctx.closePath()
ctx.fill()


export default canvas
