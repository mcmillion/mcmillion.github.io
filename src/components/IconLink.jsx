import React from 'react'
import styled, { css } from 'styled-components'
import TwitterIcon from 'svgs/twitter.svg'
import GithubIcon from 'svgs/github.svg'
import KeybaseIcon from 'svgs/keybase.svg'
import LinkedInIcon from 'svgs/linkedin.svg'

const IconBase = css`
  display: inline-block;
  fill: ${props => props.theme.link};
  height: 4rem;
  margin: 0;
  vertical-align: middle;
  width: 4rem;
`

const StyledTwitterIcon = styled(TwitterIcon)`
  ${IconBase}
`

const StyledGithubIcon = styled(GithubIcon)`
  ${IconBase}
`

const StyledKeybaseIcon = styled(KeybaseIcon)`
  ${IconBase}
`

const StyledLinkedInIcon = styled(LinkedInIcon)`
  ${IconBase}
`

const StyledLink = styled.a`
  color: ${props => props.theme.link};
  font-size: 1.5rem;
  text-decoration: none;
`

function iconForType(type) {
  switch (type) {
    case 'twitter':
      return <StyledTwitterIcon />

    case 'github':
      return <StyledGithubIcon />

    case 'keybase':
      return <StyledKeybaseIcon />

    case 'linkedin':
      return <StyledLinkedInIcon />

    default:
      return null
  }
}

export default function IconLink({ type, url }) {
  return <StyledLink href={url}>{iconForType(type)}</StyledLink>
}
