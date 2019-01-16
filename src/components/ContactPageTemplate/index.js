import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import headerImage from '../../assets/img/contact/header_contact_tbh.jpg'
import SimpleMap from '../SimpleMap'

const ContactPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  contacts,
}) => {
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      

      <div className='headerHome' style={{backgroundImage: `url(${headerImage})`}}>
         
      </div>
  
      <div className='section is-marginless is-paddingless'>
          <div className='titleTbh  title'>
            <span className='titleTbhEmpty'>Notre</span> <span className='titleTbhFull'>Emplacement_</span>
          </div>
      </div>
      <SimpleMap />
  
  
      </div>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  contacts: PropTypes.array,

}

export default ContactPageTemplate
