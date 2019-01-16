import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import headerImage from '../../assets/img/contact/header_contact_tbh.jpg'
import SimpleMap from '../components/SimpleMap'

const AbientotPageTemplate = ({
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
       
    test
    </div>

    <SimpleMap /> 


    <div className='section is-marginless is-paddingless'>
        <div className='titleTbh  title'>
          <span className='titleTbhFull'>Notre emplacement</span>
        </div>
    </div>

    </div>
  )
}

AbientotPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  contacts: PropTypes.array,

}

export default AbientotPageTemplate
