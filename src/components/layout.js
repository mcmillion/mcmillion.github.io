import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Theme } from 'components/style/GlobalStyle'

const metadataQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
const Layout = ({ children }) => (
  <StaticQuery
    query={metadataQuery}
    render={data => (
      <ThemeProvider theme={Theme}>
        <>
          <GlobalStyle />
          {children}
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
