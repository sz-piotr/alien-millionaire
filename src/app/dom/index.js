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
    element.setAttribute(toDomProp(prop), vDomNode.props[prop])
  }
  for(let i = 0; i < vDomNode.children.length; ++i) {
    const child = toDomElement(vDomNode.children[i])
    element.appendChild(child)
  }

  return element
}

function toDomProp(prop) {
  switch(prop) {
    case 'className':
      return 'class'
    default:
      return prop
  }
}
