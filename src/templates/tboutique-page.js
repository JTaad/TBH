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
        background_header={data.background_header}
        concept={data.concept}
        histoire={data.histoire}
        boutique={data.boutique}
        family={data.family}
      />
    </div>
  )
}
export default tBoutiquePages

export const tBoutiquePageQuery = graphql`
  query TBoutiquePage($id: String!) {
    background_header: file(relativePath: { eq: "tboutique/let_header.jpg" }) {
      childImageSharp{
        fluid(maxWidth: 2000,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
           ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    concept: file(relativePath: { eq: "tboutique/let_let.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000,traceSVG: { background: "#e2e4e8", color: "#F8F7D6" }, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
  }
  histoire: file(relativePath: { eq: "tboutique/let_leconcept.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 2000,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
}
boutique: file(relativePath: { eq: "tboutique/let_laboutique.jpg" }) {
  childImageSharp {
    fluid(maxWidth: 2000,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
      ...GatsbyImageSharpFluid_withWebp_tracedSVG
    }
  }
}
family: file(relativePath: { eq: "tboutique/let_family.jpg" }) {
  childImageSharp {
    fluid(maxWidth: 2000,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
      ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
