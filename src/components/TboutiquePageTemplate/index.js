import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import { Link } from 'gatsby'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

const TboutiquePageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  contacts,
  background_header,
  concept,
  boutique,
  histoire,
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
        <div className='titleTbhFirst titleTbh title is-size-2-mobile is-size-1-tablet is-size-1-desktop'>
          <span className='titleTbhFull'>Concept_</span>
        </div>
    </div>

<div className="container-full">
    <div className='section  is-paddingless is-marginless' style={{position:'relative', zIndex:"999"}}>
        <div className='columns is-paddingless is-marginless'>
            <div className='column is-half is-paddingless is-marginless imgContent' style={{ textAlign: 'left' }}>
               <Img 
                  style={{ position: 'relative', left: '0', top: "0", width: "100%", height: "100%" }} 
                  fluid={concept.childImageSharp.fluid}
                /> 
            </div>
            <div  className='column is-5 center-v '>
                <div className='section '>
                    <div className="arrow-r subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop is-marginless is-paddingless">←</div>
                    <br/>
                    <span className='subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>Le concept</span>
                    <br/>
                    <br/>
                    <p>
                    Le T est un boutique-hôtel à Arcachon.          Et même un peu plus.                                         Notre hôtel est une invitation à partager de l’émotion dans de beaux lieux de vie et de nuit. À vivre au rythme du Bassin d’Arcachon, ses particuliarités, ses activités et sa beauté. À profiter d’une expérience personnalisée dans une ambiance décontractée. À découvrir de belles choses et de jolis objets. 
                    </p>
                    <br/>
                      <div className='sub-p is-size-5'><p>À prendre du bon temps<br/>finalement !</p></div>
                </div>
            </div>
    </div>
    </div>
    </div>
<ParallaxProvider>
    <Parallax className="container-full" y={[-10, 10]}>
    <div className=" is-bg-orange">
    <div className='container'>
    <div className='section  is-paddingless is-marginless'>
                <div className='columns '>
                  <div  className='column is-5 is-offset-1'>
                    <div className="arrow-l subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop is-marginless is-paddingless">→</div>
                          <br/>
                          <span className='subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>L'hôtel</span>
                          <br/>
                          <p>
                          Le T renouvelle les codes de l’hôtellerie pour vous proposer une expérience plus conviviale, plus authentique, plus mémorable aussi. À ceci s’ajoute le lieu, le cadre et le décor. Un architecte et une décoratrice ont aménagé chaque espace, dans son moindre détail.
                           </p>   <br/> 
                             <p> Bienvenue dans un hôtel comme à la maison, chic et design à la fois, avec du confort et des prestations 3 étoiles. 
                          </p>
                      </div>

                    <div  className='column is-5 '>
                      <Img fluid={histoire.childImageSharp.fluid}/>
                  </div>
              </div>
    </div>
  </div>
  </div>
    </Parallax>
</ParallaxProvider>
 

<div className="container-full">
    <div className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless'>
            <div className='column is-half is-paddingless is-marginless imgContent' style={{ textAlign: 'left' }}>
               <Img 
                  style={{ position: 'relative', left: '0', top: "0", width: "100%", height: "100%" }} 
                  fluid={boutique.childImageSharp.fluid}
                /> 
            </div>
            <div  className='column is-5 center-v '>
                <div className='section '>
                    <div className="arrow-r subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop is-marginless is-paddingless">←</div>
                    <br/>
                    <span className='subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>La boutique</span>
                          <br/>
                          <p>
                          Une boutique a pris ses quartiers dans l’entrée de l’hôtel. Nous aimons chiner et trouver de jolies choses au gré des saisons, des tendances, des modes. Sélection d’articles, d’objets, de créations, mise en avant d’artistes et de jeunes créateurs, collaborations... c’est au T que vous les découvrirez ! 
                          </p> <br/> 
                          <p>
                          On vous a dit que vous pouviez aussi acheter le mobilier de la salle de déjeuner ?</p>
                </div>
            </div>
    </div>
    </div>
 </div>

    <div className='section is-marginless is-paddingless'>
        <div className='titleTbh title is-size-2-mobile is-size-1-tablet is-size-1-desktop'>
           <span className='titleTbhEmpty'>L'histoire </span> <span className='titleTbhFull'>du T_</span>
        </div>
    </div>



    <div className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless'>
            <div className='column is-half is-paddingless is-marginless imgContent' style={{ textAlign: 'left' }}>
               <Img 
                  style={{ position: 'absolute', left: '0', top: "0", width: "100%", height: "100%" }} 
                  fluid={histoire.childImageSharp.fluid}
                  /> 
            </div>
            <div  className='column is-5  center-v is-paddinglessTB'>
                <div className='section'>
                    <div className="arrow-r subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop is-marginless is-paddingless">←</div>
                    <br/>
                    <span className='subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>Family story</span>
                    <br/>
                    <br/>
                    <p>
                    Le T est avant tout l’histoire d’une famille. Celle d’un père qui découvre un jour l’hôtellerie et s’éprend du métier. Puis celle de sa fille, Mathilde, qui décide de bousculer son destin pour reprendre le flambeau familial.
                     </p>   <br/>  
                     <p>
                     À sa façon, avec sa vision et après 9 mois de rénovation.
                    </p>

                    <br/>
                    
                      <div className='sub-p is-size-5'><p>On vous montre le résultat ?</p></div>
                    
                </div>
            </div>
        </div>
    </div>


    </div>
  )
}

TboutiquePageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  contacts: PropTypes.array,

}

export default TboutiquePageTemplate
