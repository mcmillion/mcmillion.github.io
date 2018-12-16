import React from 'react'
import styled from 'styled-components'
import IconLink from 'components/IconLink'

const ContactList = styled.ul`
  margin: 2rem;
`

const ContactItem = styled.li`
  display: inline-block;
  margin: 0 2rem;
`

export default function ContactBlock() {
  return (
    <ContactList>
      <ContactItem>
        <IconLink type="twitter" url="https://www.twitter.com/mattisadev" />
      </ContactItem>
      <ContactItem>
        <IconLink type="github" url="https://github.com/mcmillion" />
      </ContactItem>
      <ContactItem>
        <IconLink type="keybase" url="https://keybase.io/mcmillion" />
      </ContactItem>
      <ContactItem>
        <IconLink
          type="linkedin"
          url="https://www.linkedin.com/in/matthewmcmillion/"
        />
      </ContactItem>
    </ContactList>
  )
}
