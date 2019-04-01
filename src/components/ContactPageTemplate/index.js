import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import headerImage from '../../assets/img/contact/header_contact_tbh.jpg'
import SimpleMap from '../SimpleMap'
import Img from "gatsby-image"
import Reveal from 'react-reveal/Reveal';

const ContactPageTemplate = ({
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
      


      <div className='headerHome'>
          <Img
            style={{ position: 'absolute', left: '0', top: "0", width: "100%", height: "100%" }} 
            fluid={background_header.childImageSharp.fluid} 
          />
      </div>
  
      <div className='section is-marginless is-paddingless'>
          <div className=' titleTbh title is-size-2-mobile is-size-1-tablet is-size-1-desktop'>
            <span className='titleTbhEmpty'>Notre</span> <span className='titleTbhFull'>Emplacement_</span>
          </div>
      </div>



    <div className='container'>
        <div className='section'>
                <div className='columns is-vcentered  '>
                        <div className='column is-12 '>
                        <Reveal effect="fadeInUp"  duration={1400} >
                           <SimpleMap />
                        </Reveal>
                        </div>
                </div>
                <div className='columns  semiBold'>
                        <Reveal effect="fadeInUp"  duration={1400} >
                            <div className='column is-4'>
                                82 Boulevard de la Plage,<br/>
                                33120 Arcachon
                            </div>
                        </Reveal>
                        <Reveal effect="fadeInUp"  duration={1400} >
                            <div className='column is-4'>
                            (+33)5.56.83.67.70
                            </div>
                        </Reveal>
                        <Reveal effect="fadeInUp"  duration={1400} >
                            <div className='column is-4'>
                                hello@tboutiquehotel.fr
                            </div>
                        </Reveal>
                </div>
        </div>
    </div>


      <div className='section is-marginless is-paddingless'>
      <div className='titleTbhFirst titleTbh title is-size-2-mobile is-size-1-tablet is-size-1-desktop is-bg-white'  style={{'position': 'relative', 'zIndex': '999'}}>

            <h1><span className='titleTbhEmpty'>Accès</span><span className='titleTbhFull'>_</span></h1>
          </div>
      </div>
  

    <div className='container-full is-bg-jaune'>
        <div className='container'>
                <div className='section columns'>
                        <div className='column is-10 is-offset-1'>
                                <Reveal effect="fadeInUp"  duration={1400} >
                            <div className='blocWithArrow'>
                                        <div className='arrowText subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>→&nbsp;</div>
                                        <h2 className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>de l’aéroport de bordeaux</h2>
                          
                            </div>
                                </Reveal>
                                <Reveal effect="fadeInUp"  duration={1400} >
                                <p>BUS / TRAIN — 1h20min.  15€</p>
                                </Reveal>
                                <br/>
                                <Reveal effect="fadeInUp"  duration={1400} >
                            <div className='blocWithArrow'>
                                <div className='arrowText subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>→&nbsp;</div>
                                <h2 className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>de la gare d’arcachon</h2>
                            </div>
                                </Reveal>
                            <div className='columns'>
                                <Reveal effect="fadeInUp"  duration={1400} >
                                <p className='column  is-3'>TAXI — 5min.</p>
                                <p className='column is-3'>BUS — 10min.</p>
                                <p className='column is-3'>A PIED — 12min.</p>
                                </Reveal>
                            </div>
                            </div>
                     </div>
         </div>

    </div>
    <div className='container-full is-bg-grey titleTbh' style={{height: 'auto'}}>
        <div className='container'>

                <div className='section is-marginless is-paddingless'>
                    <div className='  title' style={{height: 'auto', fontSize: 'inherit', textAlign: 'left'}}>
                        <div className='container'>
                             <div className='section columns'>
                                 <div className='column is-10 is-offset-1'>
                                        <Reveal effect="fadeInUp"  duration={1400} >
                                            <div className='blocWithArrow'>
                                                <div className='arrowText subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>→&nbsp;</div>
                                                <h3 className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>Parking</h3>
                                            </div>
                                        </Reveal>
                                        <Reveal effect="fadeInUp"  duration={1400} >
                                        <p style={{fontWeight: 'bold'}}>L"hôtel ne dispose pas de parking</p>
                                        </Reveal>
                                        <br/>
                                        <br/>
                                        <Reveal effect="fadeInUp"  duration={1400} >
                                            <div>
                                                <p>Parking du petit port à 50m</p>
                                                <p>Zone de stationnement sur le boulevard de la Plage</p>
                                                <p>-> Payant de de juin à septembre, gratuit le reste de l’année.</p>
                                                <br/>
                                                <p>Parking Municipal du Marché</p>
                                                <p>VOIR LES ZONES DE STATIONNEMENT GRATUIT</p>
                                            </div>
                                        </Reveal>
                                    </div>
                                     </div>
                                  </div>
                              </div>
                         </div>
                    </div>
        </div>
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
