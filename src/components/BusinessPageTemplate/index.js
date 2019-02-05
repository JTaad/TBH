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
                    <p>
                      Le T Boutique Hôtel vous propose une expérience 3 étoiles, à la fois unique et multiple, à Arcachon. Ici la convivialité se mêle au chic, la décontraction au design et la singularité au partage.
                        <br/>  <br/> 
                      Entièrement rénové, notre hôtel est pensé pour être avant tout le vôtre. Appropriez-vous chacun des espaces, comme à la maison.
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
                      <p>
                        Le T Boutique Hôtel vous propose une expérience 3 étoiles, à la fois unique et multiple, à Arcachon. Ici la convivialité se mêle au chic, la décontraction au design et la singularité au partage.
                          <br/>  <br/> 
                        Entièrement rénové, notre hôtel est pensé pour être avant tout le vôtre. Appropriez-vous chacun des espaces, comme à la maison.
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
              <div  className='column  is-half  center-v'>
                  <div className='section'>
                  résidentiel

chambre, petit déjeuner, déjeuner, diner, location de salle et pauses

                  </div>
              </div>
              <div className='column is-half is-paddingless is-marginless center-v'>
              résidentiel

chambre, petit déjeuner, déjeuner, diner, location de salle et pauses

              </div>
          </div>
      </div>


      <div className='section'>

                    <a className='button is-outlined title is-5' href='mailto:hello@tboutiquehotel.fr'>
                      Demander nous un devis
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a className='button is-outlined title is-5' href='tel:(+33)556836770'>
                     Appellez-nous
                    </a>

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
