import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import CarouselChambre from '../CarouselChambre'
import Img from "gatsby-image"
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import icon_wifi from '../../assets/img/icons/Shower_HDx2.png'
import icon_secheCheveux from '../../assets/img/icons/HotHair_HDx2.png'
import icon_clim from '../../assets/img/icons/Clim_HDx2.png'
import icon_coffre from '../../assets/img/icons/Lock_HDx2.png'
import icon_cafe from '../../assets/img/icons/Coffee_HDx2.png'
import icon_caudalie from '../../assets/img/icons/Beauty_HDx2.png'
import icon_eau from '../../assets/img/icons/Water_HDx2.png'
import icon_phone from '../../assets/img/icons/Phone_HDx2.png'
import icon_tv from '../../assets/img/icons/TV_HDx2.png'
import icon_douche from '../../assets/img/icons/Shower_HDx2.png'
import chambre_standard_1 from '../../assets/img/chambres/chambre_standard_1.jpg'
import chambre_standard_2 from '../../assets/img/chambres/chambre_standard_2.jpg'
import chambre_standard_3 from '../../assets/img/chambres/chambre_standard_3.jpg'
import chambre_luxe_1 from '../../assets/img/chambres/chambre_luxe_1.jpg'
import chambre_luxe_2 from '../../assets/img/chambres/chambre_luxe_2.jpg'
import chambre_luxe_3 from '../../assets/img/chambres/chambre_luxe_3.jpg'
import chambre_suite_1 from '../../assets/img/chambres/chambre_suite_1.jpg'
import chambre_suite_2 from '../../assets/img/chambres/chambre_suite_2.jpg'
import chambre_suite_3 from '../../assets/img/chambres/chambre_suite_3.jpg'

let meta_title = 'Les Chambres | T Boutique Hôtel — Arcachon'
let meta_description = 'description'
const standard = [
    {
        id: 1,
        imageSrc: chambre_standard_1
    },
    {
        id: 2,
        imageSrc: chambre_standard_2
    },
    {
        id: 3,
        imageSrc: chambre_standard_3
    }
]
const luxe = [
    {
        id: 1,
        imageSrc: chambre_luxe_1
    },
    {
        id: 2,
        imageSrc: chambre_luxe_2
    },
    {
        id: 3,
        imageSrc: chambre_luxe_3
    }
]
const suite = [
    {
        id: 1,
        imageSrc: chambre_suite_1
    },
    {
        id: 2,
        imageSrc: chambre_suite_2
    },
    {
        id: 3,
        imageSrc: chambre_suite_3
    }
]
const ChambresPageTemplate = ({
  title,
  subtitle,
  meta_description,
  contacts,
  background_header,
  petitDej
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
        <div className=' titleTbh title is-size-2-mobile is-size-1-tablet is-size-1-desktop'>
          <span className='titleTbhEmpty'>Les</span> <span className='titleTbhFull'>Chambres_</span>
        </div>
    </div>



    <div id="standard" className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless is-bg-orange'>
            <div className='column is-half is-paddingless is-marginless is-hidden-touch' style={{ textAlign: 'left' }}>
                <CarouselChambre  images={standard} />
            </div>
            <div  className='column is-5-desktop  is-full-tablet center-v'>
                <div className='section is-paddinglessTB'>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <div>
                            <div className="arrow-r subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">←</div>
                            <br/>


                            <span className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>Standard</span>
                        </div>
                    </Reveal>
                    <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                      <div className='sub-p is-size-5'><p>Pour une bonne nuit</p></div>
                    </Reveal>
                    <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <p>
                        La Standard est un refuge idéal pour se (re)poser après une longue journée. Chaque mètre carré est optimisé pour transformer l’espace en joli nid douillet.                         </p>
                    </Reveal>
                    <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <p>
                        Il ne vous reste plus qu’à profiter, le temps d’une nuit ou plus si affinité...
                        </p>
                    </Reveal>
                    <br/>
                    <br/>
                    <div className='columns is-size-7'>
                        <Reveal effect="fadeInUp"  duration={1400} >
                            <div className='column is-half '>
                                <div className='subtitle subtitle-chambres is-size-6 is-marginless '>LA CHAMBRE</div>
                                <p>16 m2 en moyenne</p>
                            </div>
                        </Reveal>
                        <Reveal effect="fadeInUp"  duration={1400} >
                        <div className='column is-half'>
                            <div className='subtitle subtitle-chambres is-size-6 is-marginless'>LA LITERIE</div>
                            <p >Queen Size twin ou double</p>
                        </div>
                        </Reveal>
                    </div>
                    <div className='columns is-size-7'>
                        <Reveal effect="fadeInUp"  duration={1400} >
                            <div className='column is-half'>
                                <div className='subtitle subtitle-chambres is-size-6 is-marginless'>LA CAPACITÉ</div>
                                <p>2 personnes</p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
            <div className='column is-full is-paddingless is-marginless is-hidden-desktop' style={{ textAlign: 'left' }}>
                <CarouselChambre  images={standard} />
            </div>
        </div>
    </div>



      <div  id="luxe" className='section  is-paddingless is-marginless'>
          <div className='columns is-paddingless is-marginless is-bg-jaune'>
              <div  className='column  is-5  is-offset-1  center-v is-paddinglessTB'>
                  <div className='section'>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <div>
                            <div className="arrow-l subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">→</div>
                            <br/>
                            <span className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>Luxe</span>
                      </div>
                     </Reveal>
                    <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                      <div className='sub-p is-size-5'><p>POUR UN BON MOMENT</p></div>
                    </Reveal>
                    <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                      <p>
                      La Luxe est une zone de confort dans laquelle on lâche prise. Toutes les chambres ont un balcon, certaines sont côté cours ou d’autres offrent un aperçu sur le Bassin. Toutes ont le nécessaire pour votre bien-être.
                      </p>
                    </Reveal>
                      <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                      <p>Oubliez tout, ne pensez qu’à vous !</p>
                    </Reveal>
  
                      <br/>
                    <br/>
                    <div className='columns is-size-7'>
                        <Reveal effect="fadeInUp"  duration={1400} >
                            <div className='column is-half'>
                                <div className='subtitle subtitle-chambres is-size-6 is-marginless'>LA CHAMBRE</div>
                                <p>20 m2 en moyenne</p>
                            </div>
                        </Reveal>
                        <Reveal effect="fadeInUp"  duration={1400} >
                            <div className='column is-half'>
                                <div className='subtitle subtitle-chambres is-size-6 is-marginless'>LA LITERIE</div>
                                <p >Queen Size twin ou double</p>
                            </div>
                        </Reveal>
                    </div>
                    <div className='columns is-size-7'>
                        <Reveal effect="fadeInUp"  duration={1400} >
                            <div className='column is-half'>
                                <div className='subtitle subtitle-chambres is-size-6 is-marginless'>LA CAPACITÉ</div>
                                <p>2 personnes</p>
                            </div>
                        </Reveal>
                        <Reveal effect="fadeInUp"  duration={1400} >
                            <div className='column is-half'>
                                <div className='subtitle subtitle-chambres is-size-6 is-marginless'>LE ++ LE BALCON</div>
                                <p>Côté cours ou aperçu mer</p>
                            </div>
                        </Reveal>
                    </div>
                  </div>
              </div>
              <div className='column is-half is-paddingless is-marginless'>
                  
                <div style={{ width: "100%" }}>
                <CarouselChambre images={luxe} />

              </div>
              </div>
          </div>
      </div>




    <div id="suite" className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless is-bg-vert'>
            <div className='column is-half is-paddingless is-marginless' style={{ textAlign: 'left' }}>
                <CarouselChambre  images={suite} />
            </div>
            <div  className='column is-5 center-v is-paddinglessTB'>
                <div className='section'>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <div>
                            <div className="arrow-r subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">←</div>
                            <br/>
                            <span className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>Suite</span>
                        </div>
                    </Reveal>
                    <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                      <div className='sub-p is-size-5'><p>POUR UNE BELLE EXPÉRIENCE</p></div>
                    </Reveal>
                    <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <p>
                        La Suite est un espace sur-mesure pour un séjour à deux, en famille ou entre amis. Prenez vos aises, étalez vos affaires, flânez sur la terrasse... bref faites tout ce qui vous plaît.                        </p>  
                    </Reveal>
                    <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <p>Idéal pour un séjour “wahou” qu’on n’oublie pas !</p>  
                    </Reveal>

                    <br/>
                    <br/>
                    <div className='columns is-size-7'>
                        <Reveal effect="fadeInUp"  duration={1400} >
                            <div className='column is-half'>
                                <div className='subtitle subtitle-chambres is-size-6 is-marginless'>LA CHAMBRE</div>
                                <p>30 m2 en moyenne</p>
                            </div>
                        </Reveal>
                        <Reveal effect="fadeInUp"  duration={1400} >
                        <div className='column is-half'>
                            <div className='subtitle subtitle-chambres is-size-6 is-marginless'>LA LITERIE</div>
                            <p >Queen Size twin + canapé lit</p>
                        </div>
                        </Reveal>
                    </div>
                    <div className='columns is-size-7'>
                        <Reveal effect="fadeInUp"  duration={1400} >
                            <div className='column is-half'>
                                <div className='subtitle subtitle-chambres is-size-6 is-marginless'>LA CAPACITÉ</div>
                                <p>4 personnes</p>
                            </div>
                        </Reveal>
                        <Reveal effect="fadeInUp"  duration={1400} >
                            <div className='column is-half'>
                                <div className='subtitle subtitle-chambres is-size-6 is-marginless'>LE ++ LA TERRASSE</div>
                                <p>Côté cours</p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className='section is-marginless is-paddingless'>
        <div className='titleTbh title is-size-2-mobile is-size-1-tablet is-size-1-desktop'>
        <span className='titleTbhEmpty'>Vos</span> <span className='titleTbhFull'>petits +_</span>
        </div>
    </div>

<div className="container-fullhd"   style={{position: 'absolute'}}>
    <div className='petitPlus  is-size-5-mobile is-size-4-tablet is-size-4-desktop'>
        <div className='petitPlusBorder1 is-paddinglessTB'>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_wifi}/></span>
                    <span className='petitPlusItemTitle'>WIFI_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_phone}/></span>
                    <span className='petitPlusItemTitle'>TELEPHONE_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_tv}/></span>
                    <span className='petitPlusItemTitle'>TV_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_douche}/></span>
                    <span className='petitPlusItemTitle'>DOUCHE MODERNE_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_secheCheveux}/></span>
                    <span className='petitPlusItemTitle'>SÈCHE CHEVEUX_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_clim}/></span>
                    <span className='petitPlusItemTitle'>CLIMATISATION RÉVERSIBLE_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_coffre}/></span>
                    <span className='petitPlusItemTitle'>COFFRE-FORT_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_cafe}/></span>
                    <span className='petitPlusItemTitle'>MACHINE NESPRESSO_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_caudalie}/></span>
                    <span className='petitPlusItemTitle'>PRODUITS CAUDALIE_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_eau}/></span>
                    <span className='petitPlusItemTitle'>BOUTEILLE D'EAU_</span>
            </div>
    </div>
</div>
</div>

<div className="container-fullhd is-bg-rose" >
    <div className='petitPlus  is-size-5-mobile is-size-4-tablet is-size-4-desktop'>
        <div className='petitPlusBorder is-paddinglessTB'>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_wifi}/></span>
                    <span className='petitPlusItemTitle'>WIFI_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_phone}/></span>
                    <span className='petitPlusItemTitle'>TELEPHONE_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_tv}/></span>
                    <span className='petitPlusItemTitle'>TV_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_douche}/></span>
                    <span className='petitPlusItemTitle'>DOUCHE MODERNE_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_secheCheveux}/></span>
                    <span className='petitPlusItemTitle'>SÈCHE CHEVEUX_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_clim}/></span>
                    <span className='petitPlusItemTitle'>CLIMATISATION RÉVERSIBLE_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_coffre}/></span>
                    <span className='petitPlusItemTitle'>COFFRE-FORT_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_cafe}/></span>
                    <span className='petitPlusItemTitle'>MACHINE NESPRESSO_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_caudalie}/></span>
                    <span className='petitPlusItemTitle'>PRODUITS CAUDALIE_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_eau}/></span>
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
            <Reveal effect="fadeInUp"  duration={1400} >
                <div className='column is-half is-paddingless is-marginless' style={{ textAlign: 'left' }}>
                    <Img fluid={petitDej.childImageSharp.fluid}/>
                </div>
            </Reveal>
            <div  className='column is-4 center-v'>
                <div className='section marginless is-paddingless'>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <div>
                            <div className="arrow-r subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">←</div>
                            <br/>
                            <span className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>LE PETIT<br/>déjeuner</span>
                        </div>
                    </Reveal>
                    <br/>
                    <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                      <div className='is-size-5'><p>“Une belle journée commence par un bon petit-déjeuner, servi au lit ou au buffet". </p></div>
                    </Reveal>
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
