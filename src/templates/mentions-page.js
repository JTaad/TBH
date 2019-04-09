import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import {HTMLContent} from '../components/Content'
import MentionsLegalesPageTemplate from '../components/MentionsLegalesPageTemplate'


const MentionsPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <div>
        <Helmet>
          <title>{post.frontmatter.meta_title}</title>
          <meta name='description' content={post.frontmatter.meta_description} />
        </Helmet>
        <MentionsLegalesPageTemplate
          contentComponent={HTMLContent}
          title={post.frontmatter.title}
          content={post.html}
          background_header={data.background_header}
        />
    </div>
  )
} 

MentionsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MentionsPage

export const mentionsPageQuery = graphql`
  query MentionsPage($id: String!) {
    background_header: file(relativePath: { eq: "contact/abientot_header.jpg" }) {
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
        meta_title
        meta_description
      }
    }
  }
`