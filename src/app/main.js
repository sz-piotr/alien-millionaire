import { Component, mount } from './dom'
import { div, h1, p } from './dom/native'

const Header = Component(
  props => h1({}, [props.title])
)

const App = Component(
  props =>
    div({ className: 'lawl' }, [
      Header({ title: 'Hello' }),
      p({}, ['World!'])
    ])
)

mount(
  App(),
  document.getElementById('root')
)
