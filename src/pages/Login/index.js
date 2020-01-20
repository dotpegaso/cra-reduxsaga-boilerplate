import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Form, Anchor } from './styles'

// ui components
import Button from '../../components/Button'
import Input from '../../components/Input'

export class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      password: null
    }
  }

  render() {
    const { email, password } = this.state

    const handleSubmit = e => {
      e.preventDefault()
      const { login } = this.props

      login({ email, password })
    }

    const handleChange = ev => {
      const { name, value } = ev.target
      this.setState({ [name]: value })
    }

    return (
      <Container>
        <Form onSubmit={handleSubmit}>
          <p>Insira suas credenciais</p>
          <Input
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            width="100%"
            onChange={handleChange}
            value={email}
            required
          />
          <Input
            id="password"
            name="password"
            placeholder="Senha"
            type="password"
            width="100%"
            onChange={handleChange}
            value={password}
            required
          />
          <Button type="submit" margin="20px 0" title="Acessar" width="100%" />
          <Anchor to="/forgot-password">Esqueci minha senha</Anchor>
        </Form>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login(payload) {
    dispatch({ type: 'LOGIN', payload })
  }
})

export default connect(null, mapDispatchToProps)(Login)
