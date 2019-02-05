import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import CarouselChambre from '../CarouselChambre'
import {Link} from 'gatsby'
import Img from "gatsby-image"



const ChambresPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  contacts,
  background_header,
  standard,
  petitDej,
  icon_clim,
  icon_coffre,
  icon_douche,
  icon_secheCheveux,
  icon_telephone,
  icon_tele,
  icon_wifi, 
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


       
     {/*    <div className='container' style={{height: `calc(100vh - 100px)`}}>
                
                <div className='columns center-v'  style={{height: `100%`}}>
                    <div className='column  '>
                      <div className='chambreNum'>
                             01
                       </div>
                    </div>
                    <div  className='column'>
                      <div className='chambreNum'>
                             02
                       </div>
                    </div>
                    <div  className='column'>
                      <div className='chambreNum'>
                             03
                       </div>
                    </div>
                </div>
        </div>
       
    */}

 </div>

    <div className='section is-marginless is-paddingless'>
        <div className='titleTbhFirst titleTbh title is-size-3-mobile is-size-1-tablet is-size-1-desktop'>
          <span className='titleTbhEmpty'>Les</span> <span className='titleTbhFull'>Chambres_</span>
        </div>
    </div>



    <div id="standard" className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless'>
            <div className='column is-half is-paddingless is-marginless ' style={{ textAlign: 'left' }}>
                <CarouselChambre imgs={standard} />
            </div>
            <div  className='column is-5  center-v'>
                <div className='section is-paddinglessTB'>
                    <div className="arrow-r subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop is-marginless is-paddingless">←</div>
                    <br/>
                    <span className='subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>Standard</span>
                    <br/>
                    <br/>
                    <p>
                    La Standard est le refuge idéal pour se (re)poser après une longue journée. Chaque mètre carré est optimisé pour transformer l’espace en joli nid douillet. 
Il ne vous reste plus qu’à profiter, le temps d’une nuit et plus si affinités...
                    </p>

                    <br/>
                    <br/>
                    <a className='button is-outlined title is-5' target="_blank" href='https://secure.reservit.com/fo/booking/2/10768/dates?specialMode=default&langcode=FR&partid=0&custid=2&hotelid=10768&m=booking'>
                       Réserver
                    </a>
                </div>
            </div>
        </div>
    </div>



      <div  id="luxe" className='section  is-paddingless is-marginless'>
          <div className='columns is-paddingless is-marginless'>
              <div  className='column  is-5  is-offset-1  center-v is-paddinglessTB'>
                  <div className='section'>
                      <div className="arrow-l subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop is-marginless is-paddingless">→</div>
                      <br/>
                      <span className='subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>Luxe</span>
                      <br/>
                      <br/>
                      <p>
                        Le T Boutique Hôtel vous propose une expérience 3 étoiles, à la fois unique et multiple, à Arcachon. Ici la convivialité se mêle au chic, la décontraction au design et la singularité au partage.
                          <br/>  <br/> 
                        Entièrement rénové, notre hôtel est pensé pour être avant tout le vôtre. Appropriez-vous chacun des espaces, comme à la maison.
                      </p>
  
                      <br/>
                      <br/>
                    <a className='button is-outlined title is-5' target="_blank" href='https://secure.reservit.com/fo/booking/2/10768/dates?specialMode=default&langcode=FR&partid=0&custid=2&hotelid=10768&m=booking'>
                       Réserver
                    </a>
                  </div>
              </div>
              <div className='column is-half is-paddingless is-marginless'>
                  
                <div style={{ width: "100%" }}>
                <CarouselChambre />

              </div>
              </div>
          </div>
      </div>




    <div id="suite" className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless'>
            <div className='column is-half is-paddingless is-marginless' style={{ textAlign: 'left' }}>
                <CarouselChambre  />
            </div>
            <div  className='column is-5 center-v is-paddinglessTB'>
                <div className='section'>
                    <div className="arrow-r subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop is-marginless is-paddingless">←</div>
                    <br/>
                    <span className='subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>Suite</span>
                    <br/>
                    <br/>
                    <p>
                    La Standard est le refuge idéal pour se (re)poser après une longue journée. Chaque mètre carré est optimisé pour transformer l’espace en joli nid douillet. 
Il ne vous reste plus qu’à profiter, le temps d’une nuit et plus si affinités...
                    </p>

                    <br/>
                    <br/>
                    <a className='button is-outlined title is-5' target="_blank" href='https://secure.reservit.com/fo/booking/2/10768/dates?specialMode=default&langcode=FR&partid=0&custid=2&hotelid=10768&m=booking'>
                       Réserver
                    </a>
                </div>
            </div>
        </div>
    </div>




<div className='section is-marginless is-paddingless'>
    <div className='titleTbh title is-size-3-mobile is-size-1-tablet is-size-1-desktop'>
      <span className='titleTbhEmpty'>Vos</span> <span className='titleTbhFull'>petits +_</span>
    </div>
</div>

<div className="container-fullhd">
    <div className='petitPlus title is-3'>
        <div className='petitPlusBorder is-paddinglessTB'>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-64x64' fluid={icon_wifi.childImageSharp.fluid}/></span>
                    <span>WIFI_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-64x64' fluid={icon_telephone.childImageSharp.fluid}/></span>
                    <span>TELEPHONE_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-64x64' fluid={icon_tele.childImageSharp.fluid}/></span>
                    <span>TV_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-64x64' fluid={icon_douche.childImageSharp.fluid}/></span>
                    <span>DOUCHE MODERNE_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-64x64' fluid={icon_secheCheveux.childImageSharp.fluid}/></span>
                    <span>Sèche Cheveux_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-64x64' fluid={icon_clim.childImageSharp.fluid}/></span>
                    <span>Climatisation Réversible_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-64x64' fluid={icon_coffre.childImageSharp.fluid}/> </span>
                    <span>Coffre-fort_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span>Machine Nespresso_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                <span>
                    <span>Bouteille d'eau_</span>
                </span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span>Petit-Déjeuner inclus_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span>Produits caudalie_</span>
            </div>
    </div>
</div>
</div>


<div className='section is-marginless is-paddingless'>
    <div className='titleTbh title is-size-3-mobile is-size-1-tablet is-size-1-desktop' style={{borderTop: '0px'}}>
      <span className='titleTbhEmpty'>Le petit-</span><span className='titleTbhFull'>Déjeuner_</span>
    </div>
</div>






    <div className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless'>
            <div className='column is-half is-paddingless is-marginless' style={{ textAlign: 'left' }}>
                <Img fluid={petitDej.childImageSharp.fluid}/>
            </div>
            <div  className='column is-half center-v'>
                <div className='section marginless is-paddingless'>
                    <div className="arrow-r subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop is-marginless is-paddingless">←</div>
                    <br/>
                    <span className='subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>
                        Une belle journée commence par un bon petit-déjeuner, servi au lit ou au buffet". 
                    </span>
                </div>
            </div>
        </div>
    </div>


    


    </div>
  )
}

ChambresPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  contacts: PropTypes.array,

}

export default ChambresPageTemplate
