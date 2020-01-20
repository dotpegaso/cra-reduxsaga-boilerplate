import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Link } from './styles'

export class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      example: 'Hello World'
    }
  }

  render() {
    const { example } = this.state
    const { email, password } = this.props

    return (
      <Container>
        <Link href="/">{`${example} | email: ${email} | password: ${password}`}</Link>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  state,
  email: state.login.email,
  password: state.login.password
})

export default connect(mapStateToProps)(Dashboard)
