import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Form, Anchor } from './styles'

// ui components
import Button from '../../components/Button'
import Input from '../../components/Input'

export class ForgotPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null
    }
  }

  render() {
    const { email } = this.state

    const handleSubmit = e => {
      e.preventDefault()
      const { recoveryPassword } = this.props

      recoveryPassword({ email })
    }

    const handleChange = ev => {
      const { name, value } = ev.target
      this.setState({ [name]: value })
    }

    return (
      <Container>
        <Form onSubmit={handleSubmit}>
          <p>Insira o email cadastrado</p>

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

          <Button
            type="submit"
            margin="20px 0"
            title="Recuperar senha"
            width="100%"
          />

          <Anchor to="/">Voltar para Login</Anchor>
        </Form>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  recoveryPassword(payload) {
    dispatch({ type: 'RECOVERY_PASSWORD', payload })
  }
})

export default connect(null, mapDispatchToProps)(ForgotPassword)
