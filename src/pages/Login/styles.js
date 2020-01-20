import styled from 'styled-components'
import { Link } from 'react-router-dom'
import COLORS from '../../constants/colors'

export const Container = styled.div`
  display: flex
  flex-wrap: wrap
  height: 100vh
  justify-content: center
  align-items: center
  align-content: center
`

export const Form = styled.form`
  display: flex
  flex-direction: column
  align-items: center
  width: 350px
`

export const Anchor = styled(Link)`
  text-decoration: none
  font-size: 14px
  color: ${COLORS.TEXT_LABEL}

  &:hover{
    text-decoration: underline
  }
`
