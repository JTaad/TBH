import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import Reveal from 'react-reveal/Reveal';

const TboutiquePageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  contacts,
  background_header,
  concept,
  family,
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
           <Reveal effect="fadeInUp"  duration={1400} >
                <div className='column is-half is-paddingless is-marginless imgContent' style={{ textAlign: 'left' }}>
                <Img 
                    style={{ position: 'relative', left: '0', top: "0", width: "100%", height: "100%" }} 
                    fluid={concept.childImageSharp.fluid}
                    /> 
                </div>
            </Reveal>
            <div  className='column is-5 center-v '>
                <div className='section '>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <div>
                            <div className="arrow-r subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">←</div>
                            <br/>
                            <h1 className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>Le "T"</h1>
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


    <div  className='container-full ' style={{marginTop: '-100px'}}>
        <div className='is-bg-vert'>
        <div className='container'>

      <div className='section  is-paddingless is-marginless'>
      <br/>
      <br/>
      <br/>
      <br/>
          <div className='columns is-paddingless is-marginless '>
              <div  className='column  is-5   center-v'>
                  <div className='section'>
                      <Reveal effect="fadeInUp"  duration={1400} >
                        <div>
                            <div className="arrow-l subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">→</div>
                            <br/>
                            <span className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>L"hôtel</span>
                        </div>
                      </Reveal>
                        <br/>
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
                            <Img fluid={histoire.childImageSharp.fluid}/>
                      </Reveal>
  
              </div>
              </div>
          </div> 
      </div>
</div> 
</div>
    </div>
 

<div className="container-full">
    <div className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless'>
            <Reveal effect="fadeInUp"  duration={1400} >
                <div className='column is-half is-paddingless is-marginless imgContent' style={{ textAlign: 'left' }}>
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
           <span className='titleTbhEmpty'>L'histoire </span> <span className='titleTbhFull'>du T_</span>
        </div>
    </div>



    <div className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless'>
            <div className='column is-half is-paddingless is-marginless imgContent' style={{ textAlign: 'left' }}>
               <Img 
                  style={{ position: 'absolute', left: '0', top: "0", width: "100%", height: "100%" }} 
                  fluid={family.childImageSharp.fluid}
                  /> 
            </div>
            <div  className='column is-5  center-v is-paddinglessTB'>
                <div className='section'>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <div>
                            <div className="arrow-r subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">←</div>
                            <br/>
                            <h4 className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>Family story</h4>
                        </div>
                    </Reveal>
                    
                    <br/>
                    <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <p>
                        Le T est avant tout l’histoire d’une famille. Celle d’un père qui découvre un jour l’hôtellerie et s’éprend du métier. Puis celle de sa fille, Mathilde, qui décide de bousculer son destin pour reprendre le flambeau familial.
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
                      <div className='sub-p is-size-5'><p>On vous montre le résultat ?</p></div>
                    </Reveal>
                    
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
