import circle from './circle'

function marsGroundPattern(size, complexity) {
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size

  const ctx = canvas.getContext('2d')

  ctx.fillStyle = '#DC143C'
  ctx.fillRect(0, 0, size, size)

  for(let i = 0; i < complexity; i++) {
    const color = colorLerp([0xDC, 0x14, 0x3C], [0xB2, 0x22, 0x22], Math.random())
    ctx.fillStyle = color
    const sizeRange = size / Math.sqrt(complexity) / 1.1
    const x = Math.random() * size
    const y = Math.random() * size
    const r = Math.random() * sizeRange + sizeRange / complexity
    circle(ctx, x, y, r)
    circle(ctx, x - size, y, r)
    circle(ctx, x + size, y, r)
    circle(ctx, x, y - size, r)
    circle(ctx, x, y + size, r)
    circle(ctx, x - size, y - size, r)
    circle(ctx, x + size, y + size, r)
  }

  return canvas
}

function colorLerp(c1, c2, l) {
  let res = []
  for(let i = 0; i < 3; i++) {
    res.push(c1[i] + Math.floor((c2[i] - c1[i]) * l))
  }
  res = res.map(c => c.toString(16))
  return `#${res[0]}${res[1]}${res[2]}`
}

export default marsGroundPattern
