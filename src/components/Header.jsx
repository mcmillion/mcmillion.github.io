import React from 'react'
import styled from 'styled-components'

export const Header = styled.h1`
  color: ${props => props.theme.notice};
  font-size: 4rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
`

export const SubHeader = styled.h2`
  color: ${props => props.theme.highlight};
  font-size: 3rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
`
