import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import CarouselChambre from '../CarouselChambre'
import {Link} from 'gatsby'
import Img from "gatsby-image"
var Scroll = require('react-scroll');

var LinkScroll = Scroll.Link;
var Element = Scroll.Element;


const ChambresPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  contacts,
  background_header,
  standard,
  petitDej,
  icon_wifi,
  icon_phone,
  icon_tv,
  icon_douche,
  icon_secheCheveux,
  icon_clim,
  icon_coffre,
  icon_cafe,
  icon_caudalie,
  icon_eau
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
        <div className='titleTbhFirst titleTbh title is-size-2-mobile is-size-1-tablet is-size-1-desktop'>
          <span className='titleTbhEmpty'>Les</span> <span className='titleTbhFull'>Chambres_</span>
        </div>
    </div>



    <div id="standard" className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless is-bg-orange'>
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
                      <div className='sub-p is-size-5'><p>Pour une bonne nuit</p></div>
                    <br/>
                    <p>
                        La Standard est le refuge idéal pour se (re)poser après une longue journée. Chaque mètre carré est optimisé pour transformer l’espace en joli nid douillet. 
                    </p>
                    <br/>
                    <p>
                    Il ne vous reste plus qu’à profiter, le temps d’une nuit et plus si affinités...
                    </p>

                    <br/>
                    <br/>

                    <LinkScroll to="lesplus" spy={true} smooth={true} >
                        <span style={{ lineHeight: '40px'}} className='subtitle'>les <span className="is-size-3" style={{fontWeight: 'bold'}}>+</span></span>
                    </LinkScroll>
                </div>
            </div>
        </div>
    </div>



      <div  id="luxe" className='section  is-paddingless is-marginless'>
          <div className='columns is-paddingless is-marginless is-bg-jaune'>
              <div  className='column  is-5  is-offset-1  center-v is-paddinglessTB'>
                  <div className='section'>
                      <div className="arrow-l subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop is-marginless is-paddingless">→</div>
                      <br/>
                      <span className='subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>Luxe</span>
                    <br/>
                    <br/>
                      <div className='sub-p is-size-5'><p>POUR UN BON MOMENT</p></div>
                    <br/>
                      <p>
                        La Luxe est une zone de confort dans laquelle on lâche prise. Certaines chambres ont un balcon, d’autres sont côté cours ou offrent un aperçu sur le Bassin. Toutes ont le nécessaire pour votre bien-être.
                      </p>
                      <br/>
                      <p>Oubliez tout, ne pensez qu’à vous !</p>
  
                      <br/>
                      <br/>

                    <LinkScroll to="lesplus" spy={true} smooth={true} >
                        <span style={{ lineHeight: '40px'}} className='subtitle'>les <span className="is-size-3" style={{fontWeight: 'bold'}}>+</span></span>
                    </LinkScroll>
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
        <div className='columns is-paddingless is-marginless is-bg-vert'>
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
                      <div className='sub-p is-size-5'><p>POUR UNE BELLE EXPÉRIENCE</p></div>
                    <br/>
                    <p>
                    La Suite est un espace sur-mesure pour une escale à deux, en famille ou entre amis. Prenez vos aises, étalez vos affaires, glânez sur la terrasse... bref faites ce qui vous plait.
                    </p>  
                    <br/>
                    <p>Idéal pour un séjour “wahou” qu’on n’oublie pas !</p>  

                    <br/>
                    <br/>

                    <LinkScroll to="lesplus" spy={true} smooth={true} >
                        <span style={{ lineHeight: '40px'}} className='subtitle'>les <span className="is-size-3" style={{fontWeight: 'bold'}}>+</span></span>
                    </LinkScroll>
                </div>
            </div>
        </div>
    </div>



<Element name="lesplus" >
    <div className='section is-marginless is-paddingless'>
        <div className='titleTbh title is-size-2-mobile is-size-1-tablet is-size-1-desktop'>
        <span className='titleTbhEmpty'>Vos</span> <span className='titleTbhFull'>petits +_</span>
        </div>
    </div>
</Element>

<div className="container-fullhd is-bg-rose" >
    <div className='petitPlus  is-size-5-mobile is-size-4-tablet is-size-3-desktop'>
        <div className='petitPlusBorder is-paddinglessTB'>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-48x48' fluid={icon_wifi.childImageSharp.fluid}/></span>
                    <span className='petitPlusItemTitle'>WIFI_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-48x48' fluid={icon_phone.childImageSharp.fluid}/></span>
                    <span className='petitPlusItemTitle'>TELEPHONE_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-48x48' fluid={icon_tv.childImageSharp.fluid}/></span>
                    <span className='petitPlusItemTitle'>TV_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-48x48' fluid={icon_douche.childImageSharp.fluid}/></span>
                    <span className='petitPlusItemTitle'>DOUCHE MODERNE_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-48x48' fluid={icon_secheCheveux.childImageSharp.fluid}/></span>
                    <span className='petitPlusItemTitle'>SÈCHE CHEVEUX_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-48x48' fluid={icon_clim.childImageSharp.fluid}/></span>
                    <span className='petitPlusItemTitle'>CLIMATISATION RÉVERSIBLE_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-48x48' fluid={icon_coffre.childImageSharp.fluid}/></span>
                    <span className='petitPlusItemTitle'>COFFRE-FORT_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-48x48' fluid={icon_cafe.childImageSharp.fluid}/></span>
                    <span className='petitPlusItemTitle'>MACHINE NESPRESSO_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-48x48' fluid={icon_caudalie.childImageSharp.fluid}/></span>
                    <span className='petitPlusItemTitle'>PRODUITS CAUDALIE_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-48x48' fluid={icon_eau.childImageSharp.fluid}/></span>
                    <span className='petitPlusItemTitle'>BOUTEILLE D'EAU_</span>
            </div>
    </div>
</div>
</div>


<div className='section is-marginless is-paddingless'>
    <div className='titleTbh title is-size-2-mobile is-size-1-tablet is-size-1-desktop' style={{borderTop: '0px'}}>
      <span className='titleTbhEmpty'>Le petit-</span><span className='titleTbhFull'>Déjeuner_</span>
    </div>
</div>






    <div className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless is-bg-vert'>
            <div className='column is-half is-paddingless is-marginless' style={{ textAlign: 'left' }}>
                <Img fluid={petitDej.childImageSharp.fluid}/>
            </div>
            <div  className='column is-4 center-v'>
                <div className='section marginless is-paddingless'>
                    <div className="arrow-r subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop is-marginless is-paddingless">←</div>
                    <br/>
                    <span className='subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>LE PETIT<br/>déjeuner</span>
                    <br/>
                    <br/>
                      <div className='is-size-5'><p>“Une belle journée commence par un bon petit-déjeuner, servi au lit ou au buffet". </p></div>
                   
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
