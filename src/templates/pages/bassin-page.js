import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import {HTMLContent} from '../../components/Content'
import BassinPageTemplate from '../../components/leBassinPageTemplate'

const BassinPages = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <div>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <BassinPageTemplate
        contentComponent={HTMLContent}
        background_header={data.background_header}
        title={post.frontmatter.title}
        content={post.html}
        vos_espaces={data.vosEspaces}
        cabanes={data.cabanes}
        petittrain={data.petittrain}
        criee={data.criee}
        lemarche={data.lemarche}
        dune={data.dune}
        pinasse={data.pinasse}
        moulleau={data.moulleau}
      />
    </div>
  )
}
export default BassinPages

export const bassinPageQuery = graphql`
  query BassinPages($id: String!) {
    background_header: file(relativePath: { eq: "bassin/lebassin_header.jpg" }) {
      childImageSharp{
        fluid(maxWidth: 2400,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
           ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    criee: file(relativePath: { eq: "bassin/lebassin_lacriee.jpg" }) {
      childImageSharp{
        fluid(maxWidth: 2000,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
           ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    petittrain: file(relativePath: { eq: "bassin/lebassin_petittrain.jpg" }) {
      childImageSharp{
        fluid(maxWidth: 2000,traceSVG: { background: "#e2e4e8", color: "#F8F7D6" }, quality: 100) {
           ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    lemarche: file(relativePath: { eq: "bassin/lebassin_lemarche.jpg" }) {
      childImageSharp{
        fluid(maxWidth: 2000,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
           ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    cabanes: file(relativePath: { eq: "bassin/lebassin_cabanes.jpg" }) {
      childImageSharp{
        fluid(maxWidth: 2000,traceSVG: { background: "#fff", color: "#fbebe4" }, quality: 100) {
           ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    pinasse: file(relativePath: { eq: "bassin/lebassin_pinasse.jpg" }) {
      childImageSharp{
        fluid(maxWidth: 2000,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
           ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    dune: file(relativePath: { eq: "bassin/lebassin_pyla.jpg" }) {
      childImageSharp{
        fluid(maxWidth: 2000,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
           ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    moulleau: file(relativePath: { eq: "bassin/lebassin_lemoulleau.jpg" }) {
      childImageSharp{
        fluid(maxWidth: 2000,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
           ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
}
`