import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

export const PortraitFrame = styled.div`
  border-radius: 50%;
  height: 256px;
  position: relative;
  width: 256px;

  img {
    border-radius: 50%;
  }
`

const imageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "mcmillion-portrait.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default function Image() {
  return (
    <StaticQuery
      query={imageQuery}
      render={data => (
        <PortraitFrame>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </PortraitFrame>
      )}
    />
  )
}
