import React from 'react'
import Helmet from 'react-helmet'
import config from '../../../data/config'
import OpenGraph from "../../assets/img/OpenGraph_TBH.jpg"
import Img from "gatsby-image"
import CarouselBusiness from '../CarouselBusiness'
import Reveal from 'react-reveal/Reveal';
import icon_wifi1 from '../../assets/img/icons/Wifi1_HDx2.png'
import icon_tableau from '../../assets/img/icons/Board_HDx2.png'
import icon_imprimante from '../../assets/img/icons/Printer_HDx2.png'
import icon_theCafe from '../../assets/img/icons/TeaCoffee_HDx2.png'
import icon_lumiere from '../../assets/img/icons/SunLight_HDx2.png'
import icon_clim from '../../assets/img/icons/Clim_HDx2.png'
import icon_retro from '../../assets/img/icons/Retro_HDx2.png'
import icon_patio from '../../assets/img/icons/Patio_HDx2.png'
import forfaits from '../../assets/img/business/business_sectionforfaits.jpg'
 


const BusinessPageTemplate = ({
  background_header,
  vos_espaces,
  vos_evenements,
}) => { 
  return (
    <div>
    <Helmet>
      <title>Business | {config.siteTitle}</title>
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
          <h1><span className='titleTbhEmpty'>Pour les</span> <span className='titleTbhFull'>professionnels_</span></h1>
        </div>
    </div>
 



    <div className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless'>
            <Reveal effect="fadeInUp"  duration={1400} >
                <div className='column is-half is-paddingless is-marginless imgContent' style={{ textAlign: 'left' }}>
                <Img 
                    style={{ position: 'absolute', left: '0', top: "0", width: "100%", height: "100%" }} 
                    fluid={vos_espaces.childImageSharp.fluid}
                    />
                </div>
            </Reveal>
            <div  className='column is-5  center-v paddinglessTB'>
                <div className='section'>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <div>
                            <div className="arrow-r subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">←</div>
                            <br/>
                            <h2 className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>Vos espaces</h2>
                        </div>
                    </Reveal>
                    <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                      <div className='sub-p is-size-5'><p>APPROPRIEZ-VOUS LES LIEUX</p></div>
                    </Reveal>
                    <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                    <p>
                    Nous vous choyons aussi lors de vos escales professionnelles. Des espaces dédiés, fonctionnels et esthétiques sont mis à votre disposition. Notre salle, pouvant accueillir jusqu’à 30 personnes, est idéale pour se réunir. Le patio et le salon bibliothèque sont quant à eux parfaits pour des moments d’échange et de pause. Sans oublier nos 27 chambres et nos 3 suites, que vous aurez plaisir à retrouver une fois la nuit tombée !
                    </p>
                    </Reveal>
                </div>
            </div>
        </div>
    </div>




    <div  className='container-full '>
        <div className='is-bg-vert'>
        <div className='container'>

      <div className='section  is-paddingless is-marginless'>
          <div className='columns is-paddingless is-marginless '>
              <div  className='column  is-6   center-v'>
                  <div className='section'>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <div>
                            <div className="arrow-l subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">→</div>
                            <br/>
                            <h2 className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>VOS événements</h2>
                        </div>
                    </Reveal>
                        <br/>
                        <Reveal effect="fadeInUp"  duration={1400} >
                            <div className='sub-p is-size-5'><p>Clef-en-main</p></div>
                        </Reveal>
                        <br/>
                        <Reveal effect="fadeInUp"  duration={1400} >
                      <p>
                      Pour que vos ateliers de quelques heures ou vos séminairse de plusieurs jours soient de bons moments, nous vous accompagnons dans l’organisation de vos évènements. Des activités aux restaurants, dites-nous ce que vous voulez, nous nous occupons du reste.
                          <br/>  <br/> 
                          N’hésitez pas à nous envoyer vos souhaits pour obtenir un devis personnalisé. 
                      </p>
                      </Reveal>
                  </div>
              </div>
              <div className='column is-6  is-offset-1  is-paddingless  center-v'>
                  
                <div style={{ width: "100%" }}>
                      <Reveal effect="fadeInUp"  duration={1400} >
                            <Img fluid={vos_evenements.childImageSharp.fluid}/>
                      </Reveal>
  
              </div>
              </div>
          </div> 
      </div>
</div> 
</div>
    </div>


    <section className="hero is-medium has-bg-img" style={{backgroundImage: `url('${forfaits}')`, backgroundPosition: 'center center', backgroundSize: 'cover'}}> 
      <div className="hero-body"> 
        <div className="container has-text-centered"> 
           <Reveal effect="fadeInUp"  duration={1400} >
              <span className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop' style={{color: "#FFF"}}>
                    Des forfaits sur-mesure<br/>pour vos évènements_
              </span>
           </Reveal>
        </div> 
      </div> 
    </section>


<CarouselBusiness />


    <div className='section is-marginless is-paddingless'>
        <div className='titleTbh title is-size-2-mobile is-size-1-tablet is-size-1-desktop'>
          <h3><span className='titleTbhEmpty'>Nos </span> <span className='titleTbhFull'>petits +_</span></h3>
        </div>
    </div>
    
<div className="container-fullhd" style={{position: "absolute"}}>
    <div className='petitPlus title  is-size-5-mobile is-size-4-tablet is-size-4-desktop'>
        <div className='petitPlusBorder is-paddinglessTB1'>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_wifi1}/></span>
                    <span className='petitPlusItemTitle'>WIFI_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_tableau}/></span>
                    <span className='petitPlusItemTitle'>TABEAU_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_imprimante}/></span>
                    <span className='petitPlusItemTitle'>IMPRIMANTE_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_theCafe}/></span>
                    <span className='petitPlusItemTitle'>THÉ & CAFÉ_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_lumiere}/></span>
                    <span className='petitPlusItemTitle'>LUMIÈRE DU JOUR_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_clim}/></span>
                    <span className='petitPlusItemTitle'>CLIMATISATION_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_retro}/></span>
                    <span className='petitPlusItemTitle'>RÉTROPROJECTEUR_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_patio}/></span>
                    <span className='petitPlusItemTitle'>PATIO_</span>
            </div>
    </div>
</div>
</div>
<div className="container-fullhd is-bg-orange">
    <div className='petitPlus title  is-size-5-mobile is-size-4-tablet is-size-4-desktop'>
        <div className='petitPlusBorder1 is-paddinglessTB1'>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_wifi1}/></span>
                    <span className='petitPlusItemTitle'>WIFI_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_tableau}/></span>
                    <span className='petitPlusItemTitle'>TABEAU_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_imprimante}/></span>
                    <span className='petitPlusItemTitle'>IMPRIMANTE_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_theCafe}/></span>
                    <span className='petitPlusItemTitle'>THÉ & CAFÉ_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_lumiere}/></span>
                    <span className='petitPlusItemTitle'>LUMIÈRE DU JOUR_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_clim}/></span>
                    <span className='petitPlusItemTitle'>CLIMATISATION_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_retro}/></span>
                    <span className='petitPlusItemTitle'>RÉTROPROJECTEUR_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><img className='image is-48x48' src={icon_patio}/></span>
                    <span className='petitPlusItemTitle'>PATIO_</span>
            </div>
    </div>
</div>
</div>
   

<div className='section "center-v'>
<br/>
      <div className='business-call center-v ' style={{alignItems: "center" ,justifyContent: "center"}}>
              <ul className="center-v " style={{display: 'flex', justifyContent: 'center', }}>
                    <Reveal effect="fadeInUp"  duration={1400} >
                    
                    <li>
                        <a className='title is-4' href='mailto:hello@tboutiquehotel.fr' >
                        DEMANDER NOUS UN DEVIS
                        </a>
                    </li>
                        <li className='title is-5 '   style={{marginBottom: "-4px"}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                        </li>
                    <li>
                        <a className='title is-4' href='tel:(+33)556836770' >
                        APPELLEZ-NOUS
                        </a>
                    </li>
                    </Reveal>
            </ul>
      </div>
<br/>
   </div>






    </div>
  )
}

export default BusinessPageTemplate