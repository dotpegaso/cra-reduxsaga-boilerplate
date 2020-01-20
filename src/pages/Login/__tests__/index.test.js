import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'
import { Login } from '..'

describe('[LOGIN] Testes de componentes', () => {
  it('Renderiza corretamente o componente de login', () => {
    mount(
      <Router>
        <Login />
      </Router>
    )
  })
})
