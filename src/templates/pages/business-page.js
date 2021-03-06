import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import {HTMLContent} from '../../components/Content'
import BusinessPageTemplate from '../../components/BusinessPageTemplate'

const BusinessPages = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <div>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
      </Helmet>
      <BusinessPageTemplate
        contentComponent={HTMLContent}
        background_header={data.background_header}
        title={post.frontmatter.title}
        content={post.html}
        vos_espaces={data.vosEspaces}
        vos_evenements={data.vosEvent}
        icon_wifi1={data.iconWifi}
        icon_tableau={data.iconTableau}
        icon_imprimante={data.iconImprimante}
        icon_theCafe={data.iconTheCafe}
        icon_lumiere={data.iconLumiere}
        icon_clim={data.iconClim}
        icon_retro={data.iconRetro}
        icon_patio={data.iconPatio}
        slider1={data.slider1}
        slider2={data.slider1}
        slider3={data.slider1}
      />
    </div>
  )
}
export default BusinessPages

export const businessPageQuery = graphql`
  query BusinessPages($id: String!) {
    background_header: file(relativePath: { eq: "business/business_header1.jpg" }) {
      childImageSharp{
        fluid(maxWidth: 2000,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
           ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slider1: file(relativePath: { eq: "business/plans_seminaire_1.jpg" }) {
      childImageSharp{
        fluid(maxWidth: 2000,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
           ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    iconWifi: file(relativePath: { eq: "icons/Wifi1_HDx2.png" }) {
      childImageSharp {
        fluid(maxWidth: 50,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    iconTableau: file(relativePath: { eq: "icons/Board_HDx2.png" }) {
      childImageSharp {
        fluid(maxWidth: 50,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    iconImprimante: file(relativePath: { eq: "icons/Printer_HDx2.png" }) {
      childImageSharp {
        fluid(maxWidth: 50,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    iconTheCafe: file(relativePath: { eq: "icons/TeaCoffee_HDx2.png" }) {
      childImageSharp {
        fluid(maxWidth: 50,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    iconLumiere: file(relativePath: { eq: "icons/SunLight_HDx2.png" }) {
      childImageSharp {
        fluid(maxWidth: 50,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    iconClim: file(relativePath: { eq: "icons/Clim_HDx2.png" }) {
      childImageSharp {
        fluid(maxWidth: 50,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    iconRetro: file(relativePath: { eq: "icons/Retro_HDx2.png" }) {
      childImageSharp {
        fluid(maxWidth: 50,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    iconPatio: file(relativePath: { eq: "icons/Patio_HDx2.png" }) {
      childImageSharp {
        fluid(maxWidth: 50,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    vosEspaces: file(relativePath: { eq: "business/business_vosespaces.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
  }
  vosEvent: file(relativePath: { eq: "business/business_vosevenements.jpg" }) {
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
      }
    }
}
`