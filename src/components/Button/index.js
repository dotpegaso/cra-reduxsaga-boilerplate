import React from 'react'
import propTypes from 'prop-types'
import StyledButton from './styles'

function Button(props) {
  return (
    <StyledButton
      type={props.type}
      onclick={props.onclick}
      margin={props.margin}
      width={props.width}
    >
      {props.title}
    </StyledButton>
  )
}

Button.propTypes = {
  type: propTypes.string,
  onclick: propTypes.func,
  title: propTypes.string,
  margin: propTypes.string,
  width: propTypes.string
}

Button.defaultProps = {
  type: 'button',
  onclick: null,
  title: 'Insira uma prop `title` ao botão',
  margin: 0,
  width: 'fit-content'
}

export default Button
