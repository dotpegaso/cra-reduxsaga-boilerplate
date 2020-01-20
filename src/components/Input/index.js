import React, { useState } from 'react'
import propTypes from 'prop-types'
import IMAGES from '../../constants/images'
import { StyledInput, Label, View, Image } from './styles'

function Input(props) {
  const [isFocused, setFocus] = useState(false)
  const [showPassword, revealPassword] = useState(false)

  function handleFocus() {
    setFocus(!isFocused)
  }

  function handleShowPassword() {
    revealPassword(!showPassword)
  }

  return (
    <View width={props.width}>
      <Label isFocused={isFocused} hasText={props.value} pointerEvents="none">
        {props.placeholder}
      </Label>
      <StyledInput
        name={props.name}
        value={props.value || ''}
        onChange={props.onChange}
        onFocus={handleFocus}
        onBlur={handleFocus}
        margin={props.margin}
        type={props.type === 'password' && !showPassword ? props.type : 'text'}
        required={props.required}
      />
      {props.type === 'password' && (
        <Image
          src={showPassword ? IMAGES.EYE_CLOSED : IMAGES.EYE_OPENED}
          onClick={handleShowPassword}
        />
      )}
    </View>
  )
}

Input.propTypes = {
  type: propTypes.string,
  placeholder: propTypes.string,
  margin: propTypes.string,
  width: propTypes.string,
  required: propTypes.bool
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  margin: 'initial',
  width: 'fit-content',
  required: false
}

export default Input
