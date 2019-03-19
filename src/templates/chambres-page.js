import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import {HTMLContent} from '../components/Content'
import ChambresPageTemplate from '../components/ChambresPageTemplate'
import standard1 from '../assets/img/chambres/01_standard_chambres.jpg'
import standard2 from '../assets/img/chambres/01_luxe_chambres.jpg'




const ChambresPages = ({data}) => {
  const {markdownRemark: post} = data
  const standard = [
    standard1,
    standard2
  ];
  const luxe = [
    '../../assets/img/chambres/01_luxe_chambres.jpg'
  ];
  const suite = [
    '../../assets/img/chambres/01_suite_chambres.jpg'
  ];

  return (
    <div>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <ChambresPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        background_header={data.background_header}
        standard={standard}
        petitDej={data.petitDej}
        icon_clim={data.clim}
        icon_coffre={data.coffre}
        icon_douche={data.douche}
        icon_secheCheveux={data.secheCheveux}
        icon_telephone={data.telephone}
        icon_tele={data.tele}
        icon_wifi={data.wifi}
      />
    </div>
  )
}
export default ChambresPages

export const chambresPageQuery = graphql`
  query ChambrePage($id: String!) { 
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
      }
    }
    background_header: file(relativePath: { eq: "chambres/header_chambres_tbh.jpg" }) {
      childImageSharp{
        fluid(maxWidth: 2000, quality: 100) {
           ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    petitDej: file(relativePath: { eq: "chambres/petit_dejeuner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    clim: file(relativePath: { eq: "icons/clim_4K_2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 70) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    coffre: file(relativePath: { eq: "icons/coffre_4K_2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 70) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    secheCheveux: file(relativePath: { eq: "icons/hothair_4K_2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 70) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    telephone: file(relativePath: { eq: "icons/phone_4K_2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 70) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    tele: file(relativePath: { eq: "icons/tv_4K_2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 70) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    wifi: file(relativePath: { eq: "icons/WIFI_4K_2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 70) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    douche: file(relativePath: { eq: "icons/shower_4K_2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 70) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
