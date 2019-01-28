import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import CarouselChambre from '../CarouselChambre'
import {Link} from 'gatsby'
import headerImage from '../../assets/img/chambres/header_chambres_tbh.jpg'
import Img from "gatsby-image"



const ChambresPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  contacts,
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
      

    <div className='headerHome' style={{backgroundImage: `url(${headerImage})`}}>
       
        <div className='container' style={{height: `calc(100vh - 100px)`}}>
                
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
       
    </div>



    <div className='section is-marginless is-paddingless'>
        <div className='titleTbh  title'>
          <span className='titleTbhEmpty'>Les</span> <span className='titleTbhFull'>Chambres_</span>
        </div>
    </div>



    <div className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless'>
            <div className='column is-half is-paddingless is-marginless' style={{ textAlign: 'left' }}>
                <CarouselChambre imgs={standard} />
            </div>
            <div  className='column is-5  center-v'>
                <div className='section'>
                    <div className="arrow-r title is-2 is-marginless is-paddingless">←</div>
                    <br/>
                    <span className='subtitle is-2'>Standard</span>
                    <br/>
                    <br/>
                    <p>
                    La Standard est le refuge idéal pour se (re)poser après une longue journée. Chaque mètre carré est optimisé pour transformer l’espace en joli nid douillet. 
Il ne vous reste plus qu’à profiter, le temps d’une nuit et plus si affinités...
                    </p>

                    <br/>
                    <br/>
                    <Link className='button is-outlined title is-5' to='/tboutique'>
                       Réserver
                    </Link>
                </div>
            </div>
        </div>
    </div>



      <div className='section  is-paddingless is-marginless'>
          <div className='columns is-paddingless is-marginless'>
              <div  className='column  is-5  is-offset-1  center-v'>
                  <div className='section'>
                      <div className="arrow-l title is-2 is-marginless is-paddingless">→</div>
                      <br/>
                      <span className='subtitle is-2'>Luxe</span>
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
                       Réserver
                    </Link>
                  </div>
              </div>
              <div className='column is-half is-paddingless is-marginless'>
                  
                <div style={{ width: "100%" }}>
                <CarouselChambre />

              </div>
              </div>
          </div>
      </div>




    <div className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless'>
            <div className='column is-half is-paddingless is-marginless' style={{ textAlign: 'left' }}>
                <CarouselChambre  />
            </div>
            <div  className='column is-5 center-v'>
                <div className='section'>
                    <div className="arrow-r title is-2 is-marginless is-paddingless">←</div>
                    <br/>
                    <span className='subtitle is-2'>Suite</span>
                    <br/>
                    <br/>
                    <p>
                    La Standard est le refuge idéal pour se (re)poser après une longue journée. Chaque mètre carré est optimisé pour transformer l’espace en joli nid douillet. 
Il ne vous reste plus qu’à profiter, le temps d’une nuit et plus si affinités...
                    </p>

                    <br/>
                    <br/>
                    <Link className='button is-outlined title is-5' to='/tboutique'>
                       Réserver
                    </Link>
                </div>
            </div>
        </div>
    </div>




<div className='section is-marginless is-paddingless'>
    <div className='titleTbh  title'>
      <span className='titleTbhEmpty'>Vos</span> <span className='titleTbhFull'>petits +_</span>
    </div>
</div>

<div className='petitPlus title is-3'>
    <div className='columns petitPlusBorder  is-vcenter '>
        <div className='column is-centered' >
                <div className="columns is-mobile is-centered is-vcentered is-gapless" style={{justifyContent: 'center'}}>
                    <div className="column is-paddingless" >
                    <Img className='image is-64x64' fluid={icon_wifi.childImageSharp.fluid}/>
                    </div>
                    <div className="column is-paddingless">
                        <span>Wifi</span>
                    </div>
                </div>
            </div>
        <div className='column has-text-centered'>
            <span>
                <Img className='image is-64x64' fluid={icon_telephone.childImageSharp.fluid}/>
                <span>TELEPHONE_</span>
            </span>
        </div>
        <div className='column has-text-centered'>
            <span>
                <Img className='image is-64x64' fluid={icon_tele.childImageSharp.fluid}/>
                <span>TV_</span>
            </span>
        </div>
        <div className='column has-text-centered'>
            <span>
                <Img className='image is-64x64' fluid={icon_douche.childImageSharp.fluid}/>
                <span>DOUCHE MODERNE_</span>
            </span>
        </div>
    </div>
    <div className='columns petitPlusBorder'>
        <div className='column has-text-centered'>
            <span>
                <Img className='image is-64x64' fluid={icon_secheCheveux.childImageSharp.fluid}/>
                <span>Sèche Cheveux_</span>
            </span>
        </div>
        <div className='column has-text-centered'>
            <span>
                <Img className='image is-64x64' fluid={icon_clim.childImageSharp.fluid}/>
                <span>Climatisation Réversible_</span>
            </span>
        </div>
    </div>
    <div className='columns petitPlusBorder'>
        <div className='column has-text-centered'>
            <span>
                <Img className='image is-64x64' fluid={icon_coffre.childImageSharp.fluid}/>
                <span>Coffre-fort_</span>
            </span>
        </div>
        <div className='column has-text-centered'>
            <span>
                <span>Machine Nespresso_</span>
            </span>
        </div>
        <div className='column has-text-centered'>
            <span>
                <span>Bouteille d'eau_</span>
            </span>
        </div>
    </div>
    <div className='columns petitPlusBorder'>
        <div className='column has-text-centered'>
            <span>
                <span>Petit-Déjeuner inclus_</span>
            </span>
        </div>
        <div className='column has-text-centered'>
            <span>
                <span>Produits caudalie_</span>
            </span>
        </div>
    </div>
</div>



<div className='section is-marginless is-paddingless'>
    <div className='titleTbh  title'>
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
                    <div className="arrow-r title is-2 is-marginless is-paddingless">←</div>
                    <br/>
                    <span className='subtitle is-2'>
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
