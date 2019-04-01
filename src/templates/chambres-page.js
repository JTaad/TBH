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
        icon_wifi={data.iconWifi}
        icon_phone={data.iconPhone}
        icon_tv={data.iconTv}
        icon_douche={data.iconDouche}
        icon_secheCheveux={data.iconSecheCheveux}
        icon_clim={data.iconClim}
        icon_coffre={data.iconCoffre}
        icon_cafe={data.iconCafe}
        icon_caudalie={data.iconCaudalie}
        icon_eau={data.iconEau}
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
    background_header: file(relativePath: { eq: "chambres/header_chambre_1.jpg" }) {
      childImageSharp{
        fluid(maxWidth: 2000,traceSVG: { background: "#fff", color: "#F8F7D6" }) {
           ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    petitDej: file(relativePath: { eq: "chambres/chambre_petitdejeuner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000,traceSVG: { background: "#fff", color: "#F8F7D6" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    iconWifi: file(relativePath: { eq: "icons/Wifi_HDx2.png" }) {
      childImageSharp {
        fluid(maxWidth: 50,traceSVG: { background: "#fff", color: "#F8F7D6" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    iconPhone: file(relativePath: { eq: "icons/Phone_HDx2.png" }) {
      childImageSharp {
        fluid(maxWidth: 50,traceSVG: { background: "#fff", color: "#F8F7D6" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    iconTv: file(relativePath: { eq: "icons/TV_HDx2.png" }) {
      childImageSharp {
        fluid(maxWidth: 50,traceSVG: { background: "#fff", color: "#F8F7D6" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    iconDouche: file(relativePath: { eq: "icons/Shower_HDx2.png" }) {
      childImageSharp {
        fluid(maxWidth: 50,traceSVG: { background: "#fff", color: "#F8F7D6" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    iconSecheCheveux: file(relativePath: { eq: "icons/HotHair_HDx2.png" }) {
      childImageSharp {
        fluid(maxWidth: 50,traceSVG: { background: "#fff", color: "#F8F7D6" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    iconClim: file(relativePath: { eq: "icons/Clim_HDx2.png" }) {
      childImageSharp {
        fluid(maxWidth: 50,traceSVG: { background: "#fff", color: "#F8F7D6" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    iconCoffre: file(relativePath: { eq: "icons/Lock_HDx2.png" }) {
      childImageSharp {
        fluid(maxWidth: 50,traceSVG: { background: "#fff", color: "#F8F7D6" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    iconCafe: file(relativePath: { eq: "icons/Coffee_HDx2.png" }) {
      childImageSharp {
        fluid(maxWidth: 50,traceSVG: { background: "#fff", color: "#F8F7D6" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    iconCaudalie: file(relativePath: { eq: "icons/Beauty_HDx2.png" }) {
      childImageSharp {
        fluid(maxWidth: 50,traceSVG: { background: "#fff", color: "#F8F7D6" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    iconEau: file(relativePath: { eq: "icons/Water_HDx2.png" }) {
      childImageSharp {
        fluid(maxWidth: 50,traceSVG: { background: "#fff", color: "#F8F7D6" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
