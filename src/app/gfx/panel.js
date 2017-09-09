const OUTLINE = 5

function panel(width, height, text) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')

  ctx.fillStyle = '#aaa'
  ctx.fillRect(0, 0, width, height)

  ctx.fillStyle = 'black'
  ctx.fillRect(OUTLINE, OUTLINE, width - OUTLINE * 2, height - OUTLINE * 2)

  ctx.strokeStyle = 'rgba(255, 0, 0, .7)'
  ctx.lineWidth = OUTLINE

  ctx.beginPath()
  ctx.moveTo(OUTLINE * 2.5, OUTLINE * 2.5)
  ctx.lineTo(width - OUTLINE * 2.5, OUTLINE * 2.5)
  ctx.stroke()


  ctx.beginPath()
  ctx.moveTo(OUTLINE * 2.5, height - OUTLINE * 2.5)
  ctx.lineTo(width - OUTLINE * 2.5, height - OUTLINE * 2.5)
  ctx.stroke()

  ctx.fillStyle = 'rgba(255, 0, 0, .7)'
  ctx.font = 'bold 35px monospace'
  ctx.textAlign = "center"
  ctx.fillText(text, width / 2, height / 2 + 13)

  return canvas
}

export default panel
