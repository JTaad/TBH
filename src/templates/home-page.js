import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark


  const postsInstagram = data.allInstaNode.edges.slice(0, 3)
  
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
    espacePro: file(relativePath: { eq: "home/espacePro_tbh.jpg" }) {
      ...fluidImage
    }
    bienvenue: file(relativePath: { eq: "home/bienvenue_tbh.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
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
    fluid(maxWidth: 2000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;
