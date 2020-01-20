import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Form } from './styles'

// ui components
import Button from '../../components/Button'
import Input from '../../components/Input'

export class RecoveryPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      password: null,
      confirmPassword: null
    }
  }

  render() {
    const { password, confirmPassword } = this.state

    const handleSubmit = e => {
      e.preventDefault()
      const { updateUser, openToast } = this.props

      if (password === confirmPassword) {
        updateUser({ password })
      } else {
        openToast({ type: 'error', message: 'As senhas estão diferentes' })
      }
    }

    const handleChange = ev => {
      const { name, value } = ev.target
      this.setState({ [name]: value })
    }

    return (
      <Container>
        <Form onSubmit={handleSubmit}>
          <p>Insira e confirme sua nova senha</p>

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

          <Input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            type="password"
            width="100%"
            onChange={handleChange}
            value={confirmPassword}
            required
          />

          <Button
            type="submit"
            margin="20px 0"
            title="Atualizar senha"
            width="100%"
          />
        </Form>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateUser(payload) {
    dispatch({ type: 'UPDATE_USER', payload })
  },
  openToast(payload) {
    dispatch({ type: 'TOAST', payload })
  }
})

export default connect(null, mapDispatchToProps)(RecoveryPassword)
