import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import {HTMLContent} from '../components/Content'
import BusinessPageTemplate from '../components/BusinessPageTemplate'

const BassinPages = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <div>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <BusinessPageTemplate
        contentComponent={HTMLContent}
        background_header={data.background_header}
        title={post.frontmatter.title}
        content={post.html}
        vos_espaces={data.vosEspaces}
        vos_evenements={data.vosEvent}
        icon_wifi={data.wifi}
        icon_tele={data.tele}
      />
    </div>
  )
}
export default BassinPages

export const bassinPageQuery = graphql`
  query BassinPages($id: String!) {
    background_header: file(relativePath: { eq: "business/header_business_tbh.jpg" }) {
      childImageSharp{
        fluid(maxWidth: 2000) {
           ...GatsbyImageSharpFluid
        }
      }
    }
    wifi: file(relativePath: { eq: "icons/WIFI_4K_2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tele: file(relativePath: { eq: "icons/tv_4K_2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vosEspaces: file(relativePath: { eq: "business/vosespaces.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
  }
  vosEvent: file(relativePath: { eq: "business/vosevenements.jpg" }) {
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