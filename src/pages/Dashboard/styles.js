import styled from 'styled-components'
import COLORS from '../../constants/colors'

export const Container = styled.div`
  display: flex
  flex-wrap: wrap
  height: 100vh
  justify-content: center
  align-items: center
  align-content: center
`

export const Link = styled.a`
  text-decoration: none
  font-size: 14px
  color: ${COLORS.TEXT_LABEL}

  &:hover{
    text-decoration: underline
  }
`
