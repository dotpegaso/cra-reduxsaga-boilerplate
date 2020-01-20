import styled from 'styled-components'

const StyledButton = styled.button`
  min-height: 50px;
  padding: 0 15px;
  border-radius: 12px
  font-size: 16px
  font-family: 'Roboto Mono', monospace;
  margin: ${props => props.margin}
  width: ${props => props.width}
  transition-duration: .1s
  outline: none

  &:hover{
    cursor: pointer
    transform: translateY(-4px);
    box-shadow: 0 5px 3px rgba(0,0,0, .1)
  }

  &:active{
    cursor: pointer
    transform: translateY(0);
    box-shadow: none
  }
`

export default StyledButton
