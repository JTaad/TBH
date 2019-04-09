import React from 'react'
import Helmet from 'react-helmet'
import Img from "gatsby-image"
import CarouselHome from '../CarouselHome'
import Rerservation from '../Rerservation'
import Instagram from '../Instagram'
import Video from '../Video'
import PropTypes from 'prop-types'
import nousTrouver from '../../assets/img/home/facade_tbh.svg'
import {Link} from 'gatsby'
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import espace_pro from '../../assets/img/home/home_espacepro.jpg'

const HomePageTemplate = ({
  title,
  heading, 
  description,
  meta_title,
  meta_description,
  posts_instagram,
  bienvenue,
  background_header,
}) => (
  <div> 
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />  
    </Helmet>

      <div className='headerHome' >
             <Video />
             <Rerservation />
      </div>
      

      
    <div className='section is-marginless is-paddingless'>
        <div className=' titleTbh title is-size-2-mobile is-size-1-tablet is-size-1-desktop' style={{backgroundColor: "#FFF"}}>
       
          <div>
            <span className='titleTbhEmpty'>Bienvenue au</span> <span className='titleTbhFull'>T_</span> 
         </div>
       </div>
    </div>
 
    <div className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless is-bg-grey'>
           <Reveal effect="fadeInUp"  duration={1400} >
              <div className='column is-full-mobile is-half-tablet is-half-desktop is-paddingless is-marginless imgContent'  style={{ textAlign: 'left' }}>
                
              <Img 
                    style={{ position: 'absolute', left: '0', top: "0", width: "100%", height: "100%" }} 
                    fluid={bienvenue.childImageSharp.fluid}/>
                  
              </div> 
            </Reveal>
            <div  className='column center-v is-paddinglessTB 
            is-5
            is-half-tablet'>
                <div className='section section-text'>
                  <Reveal effect="fadeInUp"  duration={1400} >
                    <div>
                        <div className="arrow-r title is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless ">←</div>
                        <br/>
                        <span className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>Le concept</span>
                    </div>
                  </Reveal>
                    <br/>
                    <br/>
                      <Reveal effect="fadeInUp"  duration={1400} >
                    <div>
                        <p>
                        Le T Boutique Hôtel vous propose une expérience 3 étoiles, à la fois unique et multiple, à Arcachon. Ici la convivialité se mêle au chic, la décontraction au design et la singularité au partage.                         </p>
                        <br/><p>
                          
                        Entièrement rénové, notre hôtel est pensé pour être avant tout le vôtre. Appropriez-vous chacun des espaces, comme à la maison.                        </p>
                    </div>
                  </Reveal>
                    <br/>
                  <Reveal effect="fadeInUp"  duration={1400} >
                    <div className='sub-p is-size-5'><p>On vous fait visiter<br/>l’hôtel ? →</p></div>
                  </Reveal>
                    <br/>
                    <br/>
                  <Reveal effect="fadeInUp"  duration={1400} >
                    <Link className='button is-outlined title is-5' to='/tboutique'>
                       <span className='boldTitle'>+</span>&nbsp;d'infos
                    </Link>
                    </Reveal>
                </div>
            </div>
        </div>
    </div>

    <div className='section is-marginless is-paddingless'>
        <div className=' titleTbh title is-size-2-mobile is-size-1-tablet is-size-1-desktop'>
      
          <div>
              <span className='titleTbhEmpty'>Comme chez </span> <span className='titleTbhFull'>vous_</span>
          </div>
        </div>
    </div>
    

    <CarouselHome />


    <div className='section is-marginless is-paddingless'>
        <div className=' titleTbh title is-size-2-mobile is-size-1-tablet is-size-1-desktop is-marginless'>
            
          <div>
            <span className='titleTbhFull'>Mieux</span> <span className='titleTbhEmpty'>qu'au bureau_</span>
          </div>
        </div>
    </div>

   <Reveal effect="fadeInUp"  duration={1400} >
    <section className="hero is-large has-bg-img" style={{backgroundImage: `url('${espace_pro}')`, backgroundPosition: 'center center', backgroundSize: 'cover'}}> 
      <div className="hero-body"> 
        <div className="container has-text-centered"> 
           <Reveal effect="fadeInUp"  duration={1400} >
              <Link className="button-espacePro-home is-size-3 is-size-4-mobile" to='/business'>
                Espace Pro
              </Link>
           </Reveal>
        </div> 
      </div> 
    </section>
   </Reveal>


    <div className='container-full is-bg-jaune'>
        <Link to='/contact' id="nousTrouver-link" >
            <div className='section'>
                    <div id='nousTrouver' className='columns is-vcentered   is-centered'>
                            <div className='is-full-mobile column  is-3-desktop'>
                                <Reveal effect="fadeInLeft"  duration={1400} >
                                  <div>
                                    <span style={{lineHeight: '1'}} className='subtitle is-size-3-mobile is-size-3-tablet is-size-2-desktop'>_Nous&nbsp;&nbsp;&nbsp;<br/>Trouver</span>
                                  </div>
                                </Reveal>
                            </div>
                            <div className='is-full-mobile column  is-4-desktop'>
                                <Reveal effect="fadeInRight"  duration={1400} >
                                      <img style={{width:'75%'}} src={nousTrouver} />
                                </Reveal>
                            </div>
                    </div>
            </div>
        </Link>
    </div>



    <Instagram gridItems={posts_instagram} />


    <div className='container-fullhd'>
        <div className='section is-paddingless  '>
           <div className='titleNote titleTbh title is-size-3-mobile is-size-3-tablet is-size-2-desktop'>
               
            <div className=' is-vcentered'>Sans fausses notes</div>
           </div>

      </div>
    </div>

    <div className='container-fullhd'>
        <div className='section '>
       
            <div id="notes" className='columns is-vcentered is-centered'>
                <div className='column is-4 has-text-centered'> 
                <Reveal effect="fadeInUp"  duration={1400} >
                    <div><span className="noteCount subtitle is-size-3-mobile is-size-2-tablet is-size-1-desktop" style={{lineHeight: '.8'}}>9/10</span>&nbsp;&nbsp;&nbsp;Booking</div>
                </Reveal>
                </div>
                <div className='column is-4 has-text-centered'>
                <Reveal effect="fadeInUp"   duration={1400}>
                  <div><span className="noteCount subtitle is-size-3-mobile is-size-2-tablet is-size-1-desktop"  style={{lineHeight: '.8'}}>4.5/5</span>&nbsp;&nbsp;&nbsp;Trip Advisor</div>
                </Reveal>
                </div>
                <div className='column is-4 has-text-centered'>
                <Reveal effect="fadeInUp"  duration={1400}>
                   <div><span className="noteCount subtitle is-size-3-mobile is-size-2-tablet is-size-1-desktop"  style={{lineHeight: '.8'}}>4.1/5</span>&nbsp;&nbsp;&nbsp;Google</div>
                 </Reveal>
                </div>
            </div>
          </div>
    </div>

  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  posts_instagram: PropTypes.array,

}

export default HomePageTemplate
