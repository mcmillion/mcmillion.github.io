import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  align-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: 2rem;
`

const Page = styled.section`
  flex: 0 0 auto;
`

export default function CenteredPage({ children }) {
  return (
    <Container>
      <Page>{children}</Page>
    </Container>
  )
}
