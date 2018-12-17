import React from 'react'
import styled from 'styled-components'

export const FlexBlocks = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
`

export const FlexBlock = styled.section`
  flex: 0 0 auto;
  margin: 1em;
  width: ${props => (props.width ? props.width : 'auto')};
`
