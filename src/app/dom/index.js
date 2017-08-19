export function Component(render) {
  function component(props = {}, children = []) {
    return render(props, children)
  }
  return component
}

export function mount(vDomNode, domElement) {
  domElement.appendChild(toDomElement(vDomNode))
}

function toDomElement(vDomNode) {
  if(typeof vDomNode === 'string') {
    return document.createTextNode(vDomNode)
  }

  const element = document.createElement(vDomNode.tagName)
  for(const prop in vDomNode.props) {
    setProp(element, prop, vDomNode.props[prop])
  }
  for(let i = 0; i < vDomNode.children.length; ++i) {
    const child = toDomElement(vDomNode.children[i])
    element.appendChild(child)
  }

  return element
}

function setProp(element, prop, value) {
  switch(prop) {
    case 'onClick':
      element.addEventListener('click', value)
      break
    case 'className':
      element.setAttribute('class', value)
      break
    default:
      element.setAttribute(prop, value)
  }
}
