import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import headerImage from '../../assets/img/contact/header_contact_tbh.jpg'
import SimpleMap from '../SimpleMap'
import Img from "gatsby-image"
import Reveal from 'react-reveal/Reveal';

const MentionsLegalesPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  contacts,
  background_header,
}) => {
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      

<div className="container">
    <div className="section">
        <div className="columns">
            <div className="column">
                <h1>Mentions légales</h1>
            </div>
        </div>
    </div>
</div>



    </div>


  )
}

MentionsLegalesPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  contacts: PropTypes.array,

}

export default MentionsLegalesPageTemplate
