import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import {HTMLContent} from '../components/Content'
import TboutiquePageTemplate from '../components/TboutiquePageTemplate'

const tBoutiquePages = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <div>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <TboutiquePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        concept={data.concept}
        histoire={data.histoire}
        boutique={data.boutique}
      />
    </div>
  )
}
export default tBoutiquePages

export const tBoutiquePageQuery = graphql`
  query TBoutiquePage($id: String!) {
    concept: file(relativePath: { eq: "tboutique/leconcept.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
  }
  histoire: file(relativePath: { eq: "tboutique/lhistoire.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
}
boutique: file(relativePath: { eq: "tboutique/laboutique.jpg" }) {
  childImageSharp {
    fluid(maxWidth: 2000) {
      ...GatsbyImageSharpFluid
    }
  }
}
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
      }
    }
  }
`
