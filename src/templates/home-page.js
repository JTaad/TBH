import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'

function sortNumber(a,b) {
  return a - b;
}

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark


  var postsInstagram = data.allInstaNode.edges


  function compare(a,b) {
    if (a.node.timestamp < b.node.timestamp)
      return -1;
    if (a.node.timestamp > b.node.timestamp)
      return 1;
    return 0;
  }
  
  postsInstagram = postsInstagram.sort(compare).reverse().slice(0, 3)
  

  return (
    <HomePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      heading={frontmatter.heading}
      description={frontmatter.description}
      offerings={frontmatter.offerings}
      testimonials={frontmatter.testimonials}
      espace_pro={data.espacePro}
      bienvenue={data.bienvenue}
      posts_instagram={postsInstagram}
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
    espacePro: file(relativePath: { eq: "home/espacePro_tbh.jpg" }) {
      ...fluidImage
    }
    bienvenue: file(relativePath: { eq: "home/bienvenue_tbh.jpg" }) {
      ...fluidImage
    }
    allInstaNode {
      edges {
        node {
          id
          likes
          comments
          original
          timestamp
          localFile { 
            childImageSharp {
                fluid(maxWidth: 220, maxHeight: 210, quality: 100) {
                    ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        offerings {
          blurbs {
            image
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
export const fluidImage = graphql`
fragment fluidImage on File { 
  childImageSharp {
    fluid(maxWidth: 2000, quality: 80) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;
