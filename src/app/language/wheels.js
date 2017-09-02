const CHAR_CODE_A = 'a'.charCodeAt(0)

class Wheel {
  constructor(mapping) {
    this.mapping = mapping
    this.index = 0
  }

  rotate() {
    this.index = (this.index + 1) % this.mapping.length
  }

  getMapped(char) {
    const index = (this.getCharIndex(char) + this.index) % this.mapping.length
    return this.mapping[index]
  }

  getCharIndex(char) {
    if(char === "'") {
      return this.mapping.length - 1
    }
    return char.charCodeAt(0) - CHAR_CODE_A
  }
}

export class WheelSet {
  constructor(mappings) {
    this.wheels = mappings.map(mapping => new Wheel(mapping))
  }

  getMapped(char) {
    this.wheels.forEach(wheel => char = wheel.getMapped(char))
    this.rotate()
    return char
  }

  rotate() {
    for(let i = this.wheels.length - 1; i >= 0; i--) {
      const wheel = this.wheels[i]
      wheel.rotate()
      if(wheel.index !== 0) {
        break
      }
    }
  }
}
