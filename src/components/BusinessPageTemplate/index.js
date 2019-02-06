import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import { Link } from 'gatsby'

const BusinessPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  background_header,
  contacts,
  vos_espaces,
  vos_evenements,
  icon_wifi, 
  icon_tele, 
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
        <div className='titleTbhFirst titleTbh title is-size-3-mobile is-size-1-tablet is-size-1-desktop'>
          <span className='titleTbhEmpty'>Pour les</span> <span className='titleTbhFull'>professionnels_</span>
        </div>
    </div>




    <div className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless'>
            <div className='column is-half is-paddingless is-marginless imgContent' style={{ textAlign: 'left' }}>
               <Img 
                  style={{ position: 'absolute', left: '0', top: "0", width: "100%", height: "100%" }} 
                  fluid={vos_espaces.childImageSharp.fluid}
                  />
            </div>
            <div  className='column is-5  center-v paddinglessTB'>
                <div className='section'>
                    <div className="arrow-r subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop is-marginless is-paddingless">←</div>
                    <br/>
                    <span className='subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>Vos espaces</span>
                    <br/>
                    <br/>
                      <div className='sub-p is-size-5'><p>APPROPRIEZ-VOUS LES LIEUX</p></div>
                    <br/>
                    <p>
                    Nous vous choyons aussi lors de vos escales professionnelles. Des espaces dédiés, fonctionnels et esthétiques, sont mis à votre disposition. Notre salle, pouvant accueillir jusqu’à 30 personnes, est idéale pour se réunir. Le patio et le salon bibliothèque sont quant à eux parfaits pour des moments d’échange et de pause. Sans oublier nos 27 chambres et nos 3 suites, que vous aurez plaisir à retrouver une fois la nuit tombée !
                    </p>

                    <br/>
                    <br/>
                    <Link className='button is-outlined title is-5' to='/tboutique'>
                      Forfaits
                    </Link>
                </div>
            </div>
        </div>
    </div>




<div className='container'>
      <div className='section  is-paddingless is-marginless'>
          <div className='columns is-paddingless is-marginless'>
              <div  className='column  is-half  center-v'>
                  <div className='section'>
                      <div className="arrow-l subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop is-marginless is-paddingless">→</div>
                      <br/>
                      <span className='subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>VOS événements</span>
                        <br/>
                        <br/>
                        <div className='sub-p is-size-5'><p>Clef-en-main</p></div>
                        <br/>
                      <p>
                      Pour que vos ateliers de quelques heures ou vos séminairse de plusieurs jours soient de bons moments, nous vous accompagnons dans l’organisation de vos évènements. Des activités aux restaurants, dites-nous ce que vous voulez, nous nous occupons du reste.
                          <br/>  <br/> 
                          N’hésitez pas à nous envoyer vos souhaits pour obtenir un devis personnalisé. 
                      </p>
                  </div>
              </div>
              <div className='column is-half is-paddingless is-marginless center-v'>
                  
                <div style={{ width: "100%" }}>
                  <Img fluid={vos_evenements.childImageSharp.fluid}/>

              </div>
              </div>
          </div>
      </div>
   </div>



    <div className='section is-marginless is-paddingless'>
        <div className='titleTbh title is-size-3-mobile is-size-1-tablet is-size-1-desktop'>
          <span className='titleTbhEmpty'>Nos </span> <span className='titleTbhFull'>petits +_</span>
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
                    <span><Img className='image is-64x64' fluid={icon_tele.childImageSharp.fluid}/></span>
                    <span>THÉ & CAFÉ_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-64x64' fluid={icon_tele.childImageSharp.fluid}/></span>
                    <span>TV_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-64x64' fluid={icon_tele.childImageSharp.fluid}/></span>
                    <span>RÉTROPROJECTEUR_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-64x64' fluid={icon_tele.childImageSharp.fluid}/></span>
                    <span>LUMIÈRE DU JOUR_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-64x64' fluid={icon_tele.childImageSharp.fluid}/></span>
                    <span>TABLEAU_</span>
            </div>
            <div className='petitPlusItem has-text-centered'>
                    <span><Img className='image is-64x64' fluid={icon_tele.childImageSharp.fluid}/></span>
                    <span>IMPRIMANTE_</span>
            </div>
    </div>
</div>
</div>

<div className='container'>
      <div className='section  is-paddingless is-marginless'>
          <div className='columns is-paddingless is-marginless'>
              <div  className='column  is-full is-paddinglessTB'>
                  <div className='section is-paddinglessTB'>
                  <br/><br/>
                        <div className="arrow-l subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop is-marginless is-paddingless">→</div>
                        <br/>
                        <span className='subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>
                Des forfaits sur-mesure<br/>
                pour vos évènements :</span>
                    </div>
                </div>
            </div>
      </div>
</div>
   

<div className='container'>
      <div className='section  is-paddingless is-marginless'>
          <div className='columns is-paddingless is-marginless'>
              <div  className='column  is-half '>
                  <div className='section'>
                    <div className='sub-p is-size-5'>RÉSIDENTIEL</div>
                    <br/>
                            <p>chambre, petit déjeuner, déjeuner, diner, location de salle et pauses</p>
                            <br/><br/>
                    <div className='sub-p is-size-5'>JOURNÉE D'ÉTUDE</div>
                    <br/>
                            <p>location de la salle avec pauses et déjeuner</p>
                    </div>
              </div>
              <div className='column is-half'>
                  <div className='section'>
                    <div className='sub-p is-size-5'>SEMI RÉSIDENTIEL</div>
                    <br/>
                            <p>chambre, petit déjeuner, déjeuner ou diner, location de salle et pauses.</p>
                            <br/><br/>
                    <div className='sub-p is-size-5'>DEMI JOURNÉE D'ÉTUDE</div>
                    <br/>
                            <p>location de salle 1/2 journée avec pause et déjeuner</p>
                  </div>
              </div>
          </div>
      </div>


      <div className='section is-paddinglessTB'>
          <div className='columns is-paddingless is-marginless'>
              <div  className='column  is-full is-paddinglessTB'>
                    <a className='button is-outlined title is-5' href='mailto:hello@tboutiquehotel.fr'>
                      Demander nous un devis
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='button is-outlined title is-5' href='tel:(+33)556836770'>
                     Appellez-nous
                    </a>
                 </div>
            </div>
            <br/><br/>
      </div>
   </div>






    </div>
  )
}

BusinessPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  contacts: PropTypes.array,

}

export default BusinessPageTemplate
