import React from 'react'
import ReactMarkdown from 'react-markdown'
import Layout from 'components/layout'
import SEO from 'components/seo'
import CenteredPage from 'components/CenteredPage'
import { FlexBlocks, FlexBlock } from 'components/FlexBlocks'
import { Header, SubHeader } from 'components/Header'
import { Bold } from 'components/Callout'
import { Paragraph } from 'components/Flow'
import { Link } from 'components/Link'
import Portrait from 'components/Portrait'
import ContactBlock from 'components/ContactBlock'

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
            <ReactMarkdown># Hi!</ReactMarkdown>
            <Header>Hi!</Header>
            <Paragraph>
              My name is <Bold>Matthew McMillion</Bold> and I'm a{' '}
              <Bold>Lead Engineer</Bold> at{' '}
              <Link href="https://www.stitchfix.com">Stitch Fix</Link>
            </Paragraph>
            <ContactBlock />
          </FlexBlock>
        </FlexBlocks>
      </CenteredPage>
    </Layout>
  )
}
