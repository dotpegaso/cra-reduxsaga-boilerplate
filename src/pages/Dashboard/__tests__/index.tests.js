import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'
import { Dashboard } from '..'

describe('[DASHBOARD] Testes de componentes', () => {
  it('Renderiza o componente Dashboard', () => {
    mount(
      <Router>
        <Dashboard />
      </Router>
    )
  })
})
