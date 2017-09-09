class Vector2 {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  rotate(angle, origin) {
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)

    const x = this.x - origin.x
    const y = this.y - origin.y

    return new Vector2(
      x * cos - y * sin + origin.x,
      x * sin + y * cos + origin.y
    )
  }
}

export default Vector2

window.Vector2 = Vector2
