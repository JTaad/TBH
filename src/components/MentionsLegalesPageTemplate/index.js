import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import headerImage from '../../assets/img/contact/header_contact_tbh.jpg'
import SimpleMap from '../SimpleMap'
import Img from "gatsby-image"
import Reveal from 'react-reveal/Reveal';
import Content from '../Content'

const MentionsLegalesPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  contacts,
  background_header,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      
<div id="mentionsLegales">
    <div className='section is-marginless is-paddingless'>
        <div className=' titleTbh title is-size-2-mobile is-size-1-tablet is-size-1-desktop'>
          <span className="titleTbhEmpty">Mentions</span><span className='titleTbhFull'> légales_</span>
        </div>
    </div>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <PageContent className='content' content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>



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
