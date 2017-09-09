import Vector2 from './Vector2'
import drawPolygon from './drawPolygon'

function drawStar(ctx, origin, arms, size, color) {
  const gray = Math.floor(color).toString(16)
  ctx.fillStyle = `#${gray}${gray}${gray}`
  const angle = 2 * Math.PI / arms
  for(let i = 0; i < arms; i++) {
    drawStarArm(ctx, origin, i * angle, size)
  }
}

function drawStarArm(ctx, origin, angle, size) {
  const points = [
    new Vector2(origin.x - size, origin.y),
    new Vector2(origin.x + size, origin.y),
    new Vector2(origin.x, origin.y - size * 4),
  ]
  drawPolygon(ctx, points.map(point => point.rotate(angle, origin)))
}

export default drawStar
