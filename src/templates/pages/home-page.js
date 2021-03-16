import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import HomePageTemplate from '../../components/HomePageTemplate'

function sortNumber(a,b) {
  return a - b;
}

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark




  function compare(a,b) {
    if (a.node.timestamp < b.node.timestamp)
      return -1;
    if (a.node.timestamp > b.node.timestamp)
      return 1;
    return 0;
  }
  
  

  return (
    <HomePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      heading={frontmatter.heading}
      description={frontmatter.description}
      bienvenue={data.concept}
      background_header={data.background_header}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    background_header: file(relativePath: { eq: "home/header_tbh.jpg" }) {
      ...fluidImage
    }
    concept: file(relativePath: { eq: "home/home_concept.jpg" }) {
      childImageSharp{
        fluid(maxWidth: 2000,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
           ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
export const fluidImage = graphql`
fragment fluidImage on File { 
  childImageSharp {
    fluid(maxWidth: 2000,traceSVG: { background: "#fff", color: "#F8F7D6" }, quality: 100) {
      ...GatsbyImageSharpFluid_withWebp_tracedSVG
    }
  }
}
`;
