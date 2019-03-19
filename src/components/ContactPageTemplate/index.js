import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import headerImage from '../../assets/img/contact/header_contact_tbh.jpg'
import SimpleMap from '../SimpleMap'
import Img from "gatsby-image"

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
                           <SimpleMap />
                        </div>
                </div>
                <div className='columns  semiBold'>
                        <div className='column is-4'>
                            82 Boulevard de la Plage,<br/>
                            33120 Arcachon
                        </div>
                        <div className='column is-4'>
                           (+33)5.56.83.67.70
                        </div>
                        <div className='column is-4'>
                            hello@tboutiquehotel.fr
                        </div>
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
                            <div className='blocWithArrow'>
                                <div className='arrowText subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>→&nbsp;</div>
                                <h2 className='subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>de l’aéroport de bordeaux</h2>
                            </div>
                                <p>BUS / TRAIN — 1h20min.  15€</p>
                                <br/>
                            <div className='blocWithArrow'>
                                <div className='arrowText subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>→&nbsp;</div>
                                <h2 className='subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>de la gare d’arcachon</h2>
                            </div>
                            <div className='columns'>
                                <p className='column  is-4'>TAXI — 5min.</p>
                                <p className='column is-4'>BUS — 10min.</p>
                                <p className='column is-4'>A PIED — 12min.</p>
                            </div>
                            </div>
                     </div>
         </div>

    </div>
    <div className='container-full is-bg-grey titleTbh'>
        <div className='container'>

                <div className='section is-marginless is-paddingless'>
                    <div className='  title' style={{height: 'auto', fontSize: 'inherit', textAlign: 'left'}}>
                        <div className='container'>
                             <div className='section columns'>
                                 <div className='column is-10 is-offset-1'>
                                        <div className='blocWithArrow'>
                                            <div className='arrowText subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>→&nbsp;</div>
                                            <h3 className='subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>Parking</h3>
                                        </div>
                                        <p>Parking Municipal du Marché</p>
                                        <p>ZONES DE STATIONNEMENT GRATUIT</p>
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
