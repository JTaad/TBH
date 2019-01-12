import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Rerservation from '../Rerservation'
import Instagram from '../Instagram'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import headerImage from '../../assets/img/header_home_tbh.jpg'
import nousTrouver from '../../assets/img/illu_hotel_tbh.png'

const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
  posts_instagram,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />  
    </Helmet>

    <div className='headerHome' style={{backgroundImage: `url(${headerImage})`}}>
        <Rerservation />
    </div>

    <div className='titleTbh  title'>
      <span className='titleTbhEmpty'>Bienvenue au</span> <span className='titleTbhFull'>T_</span>
    </div>


    <div className='container'>
        <div className='section is-marginless'>
            <div id='nousTrouver' className='columns is-vcentered  '>
                <div className='column is-half has-text-centered'>
                    <span className=' title is-2 center'>_Nous&nbsp;&nbsp;&nbsp;<br/>Trouver</span>
                </div>
                <div className='column is-half'>
                    <img src={nousTrouver} />
                </div>
            </div>
        </div>
    </div>
    
    <div className='titleTbh  title'>
      <span className='titleTbhEmpty'>Comme chez </span> <span className='titleTbhFull'>vous_</span>
    </div>
    
    <div className='titleTbh  title'>
      <span className='titleTbhFull'>Mieux</span> <span className='titleTbhEmpty'>qu'au bureau_</span>
    </div>
    <Instagram gridItems={posts_instagram} />

    <section className='section section--gradient' style={{display:'none'}}>
      <div className='container'>

        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  <h3 className='has-text-weight-semibold is-size-2'>
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
                <Offerings gridItems={offerings.blurbs} />
                <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <Testimonials testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
  posts_instagram: PropTypes.array,

}

export default HomePageTemplate
