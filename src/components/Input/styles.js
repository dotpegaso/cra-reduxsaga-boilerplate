import styled from 'styled-components'
import COLORS from '../../constants/colors'

export const View = styled.div`
  width: ${props => props.width || 'fit-content'}
  position: relative
  display: flex
  align-content: center
`

export const StyledInput = styled.input`
  border-radius: 4px
  border: 1px solid #BBB
  min-height: 50px;
  padding: 0 15px;
  margin: 10px 0
  font-size: 16px
  background: #FFF
  box-shadow: 0px 0px 10px rgba(0,0,0, .1)
  margin: ${props => props.margin}
  outline: none
  width: 100%
  color: ${COLORS.INPUT_DEFAULT}
`

export const Label = styled.span`
  background-color: ${props =>
    props.isFocused || props.hasText ? '#FFF' : 'transparent'}
  position: absolute
  display: flex
  align-items: center
  left: 10px
  z-index: 99
  margin: 0
  padding: 0 4px 0 4px
  top: ${props => (props.isFocused || props.hasText ? '2.5px' : '20px')}
  bottom: ${props => (props.isFocused || props.hasText ? 'initial' : '20px')}
  color: ${COLORS.TEXT_LABEL}
  transition-duration: .1s
  pointer-events: none
  font-size: ${props => (props.isFocused || props.hasText ? '14px' : '16px')}
`

export const Image = styled.img`
  opacity: 0.4;
  object-fit: contain
  width: 30px
  position: absolute
  z-index: 99
  right: 10px
  top: 22px
  cursor: pointer
`
