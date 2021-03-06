import React from 'react'
import config from '../../../data/config'
import Helmet from 'react-helmet';
import OpenGraph from "../../assets/img/OpenGraph_TBH.jpg"
import headerImage from '../../assets/img/contact/header_contact_tbh.jpg'
import SimpleMap from '../SimpleMap'
import Img from "gatsby-image"
import Reveal from 'react-reveal/Reveal';
 

const ContactPageTemplate = ({
  background_header,
}) => {
  return (
    <div>
    <Helmet>
      <title>Contact | {config.siteTitle}</title>
      <meta name='description' content={config.siteDescription} />
      <meta property='og:title' content={config.siteTitle} />
      <meta property='og:description' content={config.siteDescription} />
      <meta property='og:image' content={OpenGraph} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image' content={OpenGraph} />
    </Helmet>
      <div className='headerHome'>
          <Img
            style={{ position: 'absolute', left: '0', top: "0", width: "100%", height: "100%" }} 
            fluid={background_header.childImageSharp.fluid} 
          />
      </div>
  
      <div className='section is-marginless is-paddingless'>
          <div className=' titleTbh title is-size-2-mobile is-size-1-tablet is-size-1-desktop'>
            <h1><span className='titleTbhEmpty'>Notre</span> <span className='titleTbhFull'>Emplacement_</span></h1>
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
                            <a href="tel:+33556836770">(+33)5.56.83.67.70</a>
                            </div>
                        </Reveal>
                        <Reveal effect="fadeInUp"  duration={1400} >
                            <div className='column is-4'>
                                <a href="mailto:hello@boutiquehotel.fr">hello@tboutiquehotel.fr</a>
                            </div>
                        </Reveal>
                </div>
        </div>
    </div>


      <div className='section is-marginless is-paddingless'>
      <div className='titleTbh title is-size-2-mobile is-size-1-tablet is-size-1-desktop is-bg-white'  style={{'position': 'relative', 'zIndex': '999'}}>

            <h2><span className='titleTbhEmpty'>Accès</span><span className='titleTbhFull'>_</span></h2>
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
                            <div className='columns is-gapless'>
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
                                        <p style={{fontWeight: 'bold'}}>L'hôtel ne dispose pas de parking</p>
                                        </Reveal>
                                        <br/>
                                        <br/>
                                        <Reveal effect="fadeInUp"  duration={1400} >
                                            <ul id="parking_links">
                                                <li><a href='https://goo.gl/maps/Goopi82rZHU2' target="_blank">Parking du petit port à 50m</a></li>
                                                <li><a href='http://www.arcachon.com/acces.html' target="_blank">Zone de stationnement sur le boulevard de la Plage</a>
                                                <p>-> Payant de de juin à septembre, gratuit le reste de l’année.</p></li>
                                                <li><a href='https://goo.gl/maps/FRUA9xMerQ22' target="_blank">Parking Municipal du Marché</a></li>
                                                <li><a href='http://www.ville-arcachon.fr/stationnement/' target="_blank">VOIR LES ZONES DE STATIONNEMENT GRATUIT</a></li>
                                            </ul>
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


export default ContactPageTemplate
