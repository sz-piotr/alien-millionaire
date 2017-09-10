function drawSmooth(ctx, points, next = false) {
  if(next) {
    ctx.lineTo(points[0].x, points[0].y)
  } else {
    ctx.moveTo(points[0].x, points[0].y)
  }
  let i = 1
  for (; i < points.length - 2; i ++)
  {
    const xc = (points[i].x + points[i + 1].x) / 2
    const yc = (points[i].y + points[i + 1].y) / 2
    ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc)
  }
  ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y)
}

export default drawSmooth
