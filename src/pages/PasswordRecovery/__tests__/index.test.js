import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecoveryPassword } from '..'

describe('[RECOVERY PASSWORD] Testes de componentes', () => {
  it('Renderiza corretamente o componente de login', () => {
    mount(
      <Router>
        <RecoveryPassword />
      </Router>
    )
  })
})
