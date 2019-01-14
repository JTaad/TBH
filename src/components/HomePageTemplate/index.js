import React from 'react'
import Helmet from 'react-helmet'
import Img from "gatsby-image"
import Offerings from '../Offerings'
import Rerservation from '../Rerservation'
import Instagram from '../Instagram'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import headerImage from '../../assets/img/home/header_tbh.jpg'
import nousTrouver from '../../assets/img/home/illuHotel_tbh.png'
import {Link} from 'gatsby'

const HomePageTemplate = ({
  title,
  heading, 
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
  posts_instagram,
  espace_pro,
  bienvenue,
}) => (
  <div> 
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />  
    </Helmet>

    <div className='headerHome' style={{backgroundImage: `url(${headerImage})`}}>
        <Rerservation />
    </div>



    <div className='section is-marginless is-paddingless'>
        <div className='titleTbh  title'>
          <span className='titleTbhEmpty'>Bienvenue au</span> <span className='titleTbhFull'>T_</span>
        </div>
    </div>
    

    <div className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless'>
            <div className='column is-half is-paddingless is-marginless' style={{ textAlign: 'left' }}>
                <Img fluid={bienvenue.childImageSharp.fluid}/>
            </div>
            <div  className='column is-4 is-paddingless is-marginless center-v'>
                <div className='section'>
                    <div className="arrow-r title is-2 is-marginless is-paddingless">←</div>
                    <br/>
                    <span className='subtitle is-2'>Le concept</span>
                    <br/>
                    <br/>
                    <p>
                      Le T Boutique Hôtel vous propose une expérience 3 étoiles, à la fois unique et multiple, à Arcachon. Ici la convivialité se mêle au chic, la décontraction au design et la singularité au partage.
                        <br/>  <br/> 
                      Entièrement rénové, notre hôtel est pensé pour être avant tout le vôtre. Appropriez-vous chacun des espaces, comme à la maison.
                    </p>

                    <br/>
                    <br/>
                    <Link className='button is-outlined title is-5' to='/tboutique'>
                       <span className='boldTitle'>+</span>&nbsp;d'infos
                    </Link>
                </div>
            </div>
        </div>
    </div>

    <div className='section is-marginless is-paddingless'>
        <div className='titleTbh  title'>
          <span className='titleTbhEmpty'>Comme chez </span> <span className='titleTbhFull'>vous_</span>
        </div>
    </div>
    


    <div className='section is-marginless is-paddingless'>
        <div className='titleTbh  title is-marginless'>
            <span className='titleTbhFull'>Mieux</span> <span className='titleTbhEmpty'>qu'au bureau_</span>
        </div>
        <Link to='/business'>
            <Img fluid={espace_pro.childImageSharp.fluid}/>
        </Link>
    </div>


    <div className='container'>
        <div className='section'>
            <Link to='/contact'>
                <div id='nousTrouver' className='columns is-vcentered  '>
                        <div className='column is-half has-text-centered'>
                            <span className=' title is-2 center'>_Nous&nbsp;&nbsp;&nbsp;<br/>Trouver</span>
                        </div>
                        <div className='column is-half'>
                            <img src={nousTrouver} />
                        </div>
                </div>
            </Link>
        </div>
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
