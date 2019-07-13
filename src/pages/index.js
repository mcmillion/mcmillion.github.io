import React from 'react'
import ReactMarkdown from 'react-markdown'
import Layout from 'components/layout'
import SEO from 'components/seo'
import CenteredPage from 'components/CenteredPage'
import { FlexBlocks, FlexBlock } from 'components/FlexBlocks'
import Portrait from 'components/Portrait'
import ContactBlock from 'components/ContactBlock'

const markdown = `
# Hi!

My name is **Matthew McMillion**. I'm a software developer from Little Rock, Arkansas.

Currently, I work as **Lead Engineer** for a fantastic team of developers at [Stitch Fix](https://www.stitchfix.com).

I love dogs, Vim, and mechanical keyboards.
`

export default function IndexPage() {
  return (
    <Layout>
      <CenteredPage>
        <SEO
          title="Home"
          keywords={[
            'mcmillion',
            'software',
            'developer',
            'software developer',
            'engineer',
          ]}
        />
        <FlexBlocks>
          <FlexBlock>
            <Portrait />
          </FlexBlock>
          <FlexBlock width="450px">
            <ReactMarkdown source={markdown} />
            <ContactBlock />
          </FlexBlock>
        </FlexBlocks>
      </CenteredPage>
    </Layout>
  )
}
