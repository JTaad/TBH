import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import Reveal from 'react-reveal/Reveal';
import { Link } from 'gatsby'

const TboutiquePageTemplate = ({
  background_header,
  concept,
  family,
  boutique,
  histoire,
}) => {
  return (
    <div>
      <div className='headerHome'>
          <Img  
            style={{ position: 'absolute', left: '0', top: "0", width: "100%", height: "100%" }} 
            fluid={background_header.childImageSharp.fluid} 
          />
      </div>

    <div className='section is-marginless is-paddingless'>
        <div className='titleTbh title is-size-2-mobile is-size-1-tablet is-size-1-desktop'>
          <h1 className='titleTbhFull'>Concept_</h1>
        </div>
    </div>

<div className="container-full">
    <div className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless'>
        <div className='column is-6   center-v is-noPaddingRight'>   
                  <div style={{ width: "100%", marginLeft: 'auto' }}>
                        <br/> 
                        <Reveal effect="fadeInUp"  duration={1400} >
                              <Img fluid={concept.childImageSharp.fluid}/>
                        </Reveal>
                        <br/>
                    </div> 
        </div>
            <div  className='column is-6 center-v '>
                <div className='section '>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <div>
                            <div className="arrow-r subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">←</div>
                            <br/>
                            <h2 className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>Le "T"</h2>
                        </div>
                    </Reveal>
                    <br/>
                    <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <p>
                        Le T est un boutique-hôtel à Arcachon.          Et même un peu plus.                                         Notre hôtel est une invitation à partager de l’émotion dans de beaux lieux de vie et de nuit. À vivre au rythme du Bassin d’Arcachon, ses particuliarités, ses activités et sa beauté. À profiter d’une expérience personnalisée dans une ambiance décontractée. À découvrir de belles choses et de jolis objets. 
                        </p>
                    </Reveal>
                    <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                      <div className='sub-p is-size-5'><p>À prendre du bon temps<br/>finalement !</p></div>
                    </Reveal>
                </div>
            </div>
    </div>
    </div>
    </div>


    <div  className='container-full '>
        <div className='is-bg-orange'>
        <div className='container'>
    <br/>
    <br/>
          <div className='columns is-paddingless is-marginless '>
              <div  className='column  is-6   center-v'>
                  <div className='section'>
                      <Reveal effect="fadeInUp"  duration={1400} >
                        <div>
                            <div className="arrow-l subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">→</div>
                            <br/>
                            <h2 className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>L'hôtel</h2>
                        </div>
                      </Reveal>
                        <br/>
                        <br/>
                      <Reveal effect="fadeInUp"  duration={1400} >
                      <p>
                      Le T renouvelle les codes de l’hôtellerie pour vous proposer une expérience plus conviviale, plus authentique, plus mémorable aussi. À ceci s’ajoute le lieu, le cadre et le décor. Un architecte et une décoratrice ont aménagé chaque espace, dans son moindre détail.</p>
                      <br/><p>Bienvenue dans un hôtel comme à la maison, chic et design à la fois, avec du confort et des prestations 3 étoiles.
                      </p>
                      </Reveal>
                  </div>
              </div>
              <div className='column is-6  center-v'>
                  
                <div className="" style={{ width: "100%" }}>
                <br/>
                      <Reveal effect="fadeInUp"  duration={1400} >
                            <Img fluid={histoire.childImageSharp.fluid}/>
                      </Reveal>
  
              </div>
              </div>
          </div> 
    <br/>
    <br/>
</div> 
</div>
    </div>
 

<div className="container-full">
    <div className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless'>
            <Reveal effect="fadeInUp"  duration={1400} >
                <div className='column is-half is-paddingless is-marginless is-paddingless-noTouch imgContent' style={{ textAlign: 'left' }}>
                <Img 
                    style={{ position: 'relative', left: '0', top: "0", width: "100%", height: "100%" }} 
                    fluid={boutique.childImageSharp.fluid}
                    /> 
                </div>
            </Reveal>
            <div  className='column is-5 center-v '>
                <div className='section '>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <div>
                            <div className="arrow-r subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">←</div>
                            <br/>
                            <h3 className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>La boutique</h3>
                        </div>
                    </Reveal>
                          <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                          <p>
                          Une boutique a pris ses quartiers dans l’entrée de l’hôtel. Nous aimons chiner et trouver de jolies choses au gré des saisons, des tendances, des modes. Sélection d’articles, d’objets, de créations, mise en avant d’artistes et de jeunes créateurs, collaborations... c’est au T que vous les découvrirez ! 
                          </p> 
                    </Reveal>
                          <br/> 
                    <Reveal effect="fadeInUp"  duration={1400} >
                          <p>
                          On vous a dit que vous pouviez aussi acheter le mobilier de la salle de déjeuner ?</p>
                    </Reveal>
                </div>
            </div>
    </div>
    </div>
 </div>

    <div className='section is-marginless is-paddingless'>
        <div className='titleTbh title is-size-2-mobile is-size-1-tablet is-size-1-desktop'>
           <h3><span className='titleTbhEmpty'>L'histoire </span> <span className='titleTbhFull'>du T_</span></h3>
        </div>
    </div>



    <div className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless'>
            
        <div className='column is-6   is-paddingless  center-v  is-paddingless-noTouch'>   
                  <div className="section imgMinResp" style={{ marginLeft: 'auto' }}>
                        <br/> 
                        <Reveal effect="fadeInUp"  duration={1400} >
                              <Img fluid={family.childImageSharp.fluid}/>
                        </Reveal>
                        <br/>
                    </div> 
            </div>
            <div  className='column is-5  center-v is-paddinglessTB'>
                <div className='section'>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <div>
                            <div className="arrow-r subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">←</div>
                            <br/>
                            <h3 className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>A Family story</h3>
                        </div>
                    </Reveal>
                    
                    <br/>
                    <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <p>
                        Le T est avant tout l’histoire d’une famille. De deux générations précisément, qui tour à tour ont transmis leur passion pour l’hôtellerie et le métier. Mathilde est la 3ème génération. Elle a décidé de bousculer son destin pour reprendre le flambeau familial.
                        </p> 
                     </Reveal>
                       <br/> 
                     
                    <Reveal effect="fadeInUp"  duration={1400} > 
                     <p>
                     À sa façon, avec sa vision et après 9 mois de rénovation. 
                    </p>
                    </Reveal>

                    <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <Link className='sub-p is-size-5' to='/chambres'>
                        On vous montre le résultat ?
                        </Link>
                    </Reveal>
                    
                </div>
            </div>
        </div>
    </div>


    </div>
  )
}

export default TboutiquePageTemplate
