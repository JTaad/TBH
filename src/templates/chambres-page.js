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
        standard={standard}
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
  }
`
