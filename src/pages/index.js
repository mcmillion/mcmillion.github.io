import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'
import Portrait from 'components/Portrait'
import ContactBlock from 'components/ContactBlock'

export default function IndexPage() {
  return (
    <Layout>
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
      <Portrait />
      <p>I am making a thing</p>
      <ContactBlock />
    </Layout>
  )
}
