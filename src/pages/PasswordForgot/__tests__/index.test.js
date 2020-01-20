import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'
import { ForgotPassword } from '..'

describe('[FORGOT PASSWORD] Testes de componentes', () => {
  it('Renderiza corretamente o componente de login', () => {
    mount(
      <Router>
        <ForgotPassword />
      </Router>
    )
  })
})
