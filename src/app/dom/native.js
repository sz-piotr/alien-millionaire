function NativeComponent(tagName) {
  return function(props = {}, children = []) {
    return {
      tagName,
      props,
      children
    }
  }
}

export const div = NativeComponent('div')
export const h1 = NativeComponent('h1')
export const p = NativeComponent('p')
