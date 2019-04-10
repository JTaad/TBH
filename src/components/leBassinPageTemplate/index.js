import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import { Link } from 'gatsby'
import Reveal from 'react-reveal/Reveal';
 

const BassinPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  background_header,
  cabanes,
  petittrain,
  criee,
  lemarche,
  dune,
  pinasse,
  moulleau
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
        <div className=' titleTbh title is-size-2-mobile is-size-1-tablet is-size-1-desktop'>
          <span className='titleTbhFull'>Le bassin_</span>
        </div>
    </div>
 
    
    <Reveal effect="fadeInUp"  duration={1400} >
    <div className='section is-bg-orange'>
        <div className='columns'>
            <div className="column is-6 is-offset-3 has-text-centered">
               <Reveal effect="fadeInUp"  duration={1400} >
                <p>
                Nous on l'aime pour son caractère, son authenticité, son nuancier de bleu et son dégradé de pastel. Aussi pour sa douceur de vivre, sa chillance à outrance et cette vague sensation de vacances.
                </p>
                </Reveal>
                <br/>
                <div className='columns'>
                    <div className="column is-10 is-offset-1">
               <Reveal effect="fadeInUp"  duration={1400} >
                         <p style={{fontWeight: '600', textTransform: 'uppercase'}}>Ces quelques idées pour vivre l'expérience et l’ambiance de notre Bassin adoré:</p>
                   
                </Reveal>
                 </div>
                </div>
            </div>
        </div>
        </div>
        </Reveal>



    <div className='section  is-paddingless is-marginless' style={{zIndex: "9999", position:"relative"}}>
        <div className='columns is-paddingless is-marginless'>
            <Reveal effect="fadeInUp"  duration={1400} >
                <div className='column is-full-mobile is-5-tablet is-5-desktop is-paddingless is-paddingless-noTouch is-marginless imgContent' style={{ textAlign: 'left' }}>
                <Img 
                    style={{ position: 'absolute', left: '0', top: "0", width: "100%", height: "100%" }} 
                    fluid={criee.childImageSharp.fluid}
                    />
                </div>
            </Reveal>
            <div  className='column is-5   is-4-widescreen is-offset-1 center-v paddinglessTB'>
                <div className='section'>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <div>
                            <div className="arrow-r subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">←</div>
                            <br/>
                            <span className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>6H30</span>
                        </div>
                    </Reveal>
                    <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                      <div className='sub-p is-size-5 '><p>LA Criée d’arcachon</p></div>
                    </Reveal>
                    <br/>
                    <Reveal effect="fadeInUp"  duration={1400} >
                        <p>
                        Notre programme démarre à 6h30, à la Criée d’Arcachon. Une fois que les pêcheurs du coin ont entassé leurs prises dans des casiers, la vente peut commencer. Vous verrez défiler de nombreuses espèces de poissons, coquillages et crustacés et vous assisterez à la vente aux enchères, s'il vous plaît, de ces beaux produits. Une vraie expérience !
                        </p>
                    </Reveal>
                </div>
            </div>
        </div>
    </div>




<div  className='container-full ' style={{marginTop: '-100px'}}>
    <div className='is-bg-grey'>
    <div className='container'>

  <div className='section  is-paddingless is-marginless'>
  <br/>
  <br/>
  <br/>
  <br/>
      <div className='columns is-paddingless is-marginless '>
          <div  className='column  is-5   '>
              <div className='section'>
                  <Reveal effect="fadeInUp"  duration={1400} >
                    <div>
                        <div className="arrow-l subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">→</div>
                        <br/>
                        <span className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>9H00</span>
                    </div>
                  </Reveal>
                    <br/>
                  <Reveal effect="fadeInUp"  duration={1400} >
                    <div className='sub-p is-size-5'><p>LE PETIT TRAIN</p></div>
                  </Reveal>
                    <br/>
                  <Reveal effect="fadeInUp"  duration={1400} >
                  <p>
                  Il est 9h, soit l'heure idéale pour faire un tour de petit train... Oui, ça fait longtemps que vous n'êtes pas montés à bord d'un tel engin. Donc c’est le moment, ou jamais ! 
<br/><br/>Profitez des lueurs matinales pour découvrir le quartier de la ville d'hiver d'Arcachon et ses somptueuses villas du XIXème siècle.
<br/><br/>Le tout en étant confortablement installés et agréablement bercés. Merci le petit train !
                  </p>
                  </Reveal>
              </div>
          </div>
          <div className='column is-6  is-offset-1 center-v'>
              
            <div style={{ width: "100%" }}>
                  <Reveal effect="fadeInUp"  duration={1400} >
                        <Img fluid={petittrain.childImageSharp.fluid}/>
                  </Reveal>

          </div>
          </div>
      </div> 
  </div>
</div> 
</div>
</div>




<div  className='container-full'>
    <div className=''>
    <div className='container'>

  <div className='section  is-paddingless is-marginless'>
  <br/>
  <br/>
  <br/>
  <br/>
      <div className='columns is-paddingless is-marginless '>
          <div  className='column  is-6   center-v '>

            <div style={{ width: "100%" }}>
                  <Reveal effect="fadeInUp"  duration={1400} >
                        <Img fluid={lemarche.childImageSharp.fluid}/>
                  </Reveal>

            </div>

          </div>
          <div  className='column is-5   is-4-widescreen is-offset-1 center-v paddinglessTB'>

              
              <div className='section'>
                  <Reveal effect="fadeInUp"  duration={1400} >
                    <div>
                        <div className="arrow-r subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">←</div>
                        <br/>
                        <span className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>11H00</span>
                    </div>
                  </Reveal>
                    <br/>
                  <Reveal effect="fadeInUp"  duration={1400} >
                    <div className='sub-p is-size-5'><p>LE MARCHé</p></div>
                  </Reveal>
                    <br/>
                  <Reveal effect="fadeInUp"  duration={1400} >
                  <p>
                  En fin de matinée (à l'heure que vous vous voudrez), une petite halte au marché n'est jamais une mauvaise idée. Les Halles vous attendent au coeur du centre ville d'Arcachon.
<br/><br/>Entre les produits du terroir, les producteurs locaux, les nombreuses boutiques, bars et restaurants, le plus dur sera de choisir. Ou le mieux sera de goûter à tout ! À vous de voir !
                  </p>
                  </Reveal>
              </div>

          </div>
      </div> 
  </div>
</div> 
</div>
</div>



<div  className='container-full ' style={{marginTop: '-100px'}}>
    <div className='is-bg-rose'>
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
                        <span className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>12H00</span>
                    </div>
                  </Reveal>
                    <br/>
                  <Reveal effect="fadeInUp"  duration={1400} >
                    <div className='sub-p is-size-5'><p>Cabanes ostréicoles</p></div>
                  </Reveal>
                    <br/>
                  <Reveal effect="fadeInUp"  duration={1400} >
                  <p>
                  À l'heure du déjeuner (là aussi vous choisirez), la dégustation d'huîtres est incontournable. Direction les cabanes d'ostréiculteurs, au décor traditionnel et à l'atmosphère décontracté. L'Aiguillon, la Teste-de-Buch, Gujan Mestras... plusieurs spots de choix vous attendent avec un petit verre de blanc, ou de rosé. Vous y mangerez aussi des crustacés et du pâté !
                  </p>
                  </Reveal>
              </div>
          </div>
          <div className='column is-6  is-offset-1  is-paddingless  is-paddingless-noTouch center-v'>
              
            <div style={{ width: "100%" }}>
                  <Reveal effect="fadeInUp"  duration={1400} >
                        <Img fluid={cabanes.childImageSharp.fluid}/>
                  </Reveal>

          </div>
          </div>
      </div> 
  </div>
</div> 
</div>
</div>


<div  className='container-full'>
    <div className=''>
    <div className='container'>

  <div className='section  is-paddingless is-marginless'>
  <br/>
  <br/>
  <br/>
  <br/>
      <div className='columns is-paddingless is-marginless '>
          <div  className='column  is-6   center-v'>

            <div style={{ width: "100%" }}>
                  <Reveal effect="fadeInUp"  duration={1400} >
                        <Img fluid={pinasse.childImageSharp.fluid}/>
                  </Reveal>

            </div>

          </div>
          <div className='column is-5  is-offset-1  center-v'>
              
              <div className='section'>
                  <Reveal effect="fadeInUp"  duration={1400} >
                    <div>
                        <div className="arrow-r subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">←</div>
                        <br/>
                        <span className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>14H00</span>
                    </div>
                  </Reveal>
                    <br/>
                  <Reveal effect="fadeInUp"  duration={1400} >
                    <div className='sub-p is-size-5'><p>En pinasse</p></div>
                  </Reveal>
                    <br/>
                  <Reveal effect="fadeInUp"  duration={1400} >
                  <p>
                  Que diriez-vous d'une balade sur l'eau, à bord d'une traditionnelle Pinasse. Laissez-vous guider (quel autre choix !?) pour admirer l'île aux oiseaux et ses célèbres cabanes tchanquées, la Dune du Pyla et la réserve naturelle du banc d'Arguin. Vous pouvez même faire une escale au Cap Ferret et visiter son phare avec vue panoramique sur le bassin. Plutôt tentant non ?                  
                </p>
                </Reveal>
              </div>

          </div>
      </div> 
  </div>
</div> 
</div>
</div>



<div  className='container-full ' style={{marginTop: '-100px'}}>
    <div className=''>
    <div className='container'>

  <div className='section  is-paddingless is-marginless'>
  <br/>
  <br/>
  <br/>
  <br/>
      <div className='columns is-paddingless is-marginless '>
          <div  className='column  is-5   center-v is-offset-2'>
              <div className='section'>
                  <Reveal effect="fadeInUp"  duration={1400} >
                    <div>
                        <div className="arrow-l subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">→</div>
                        <br/>
                        <span className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>17H30</span>
                    </div>
                  </Reveal>
                    <br/>
                  <Reveal effect="fadeInUp"  duration={1400} >
                    <div className='sub-p is-size-5'><p>Dune du Pyla  #sunset</p></div>
                  </Reveal>
                    <br/>
                  <Reveal effect="fadeInUp"  duration={1400} >
                  <p>
                  Ça sent bon la fin de journée. Quoi de mieux que de gravir les 110 mètres de la Dune du Pyla pour admirer le soleil se coucher ! Vous pouvez aussi le regarder d'en bas, mais on ne vous cache pas que c'est beaucoup moins sympa ! Si l’envie vous dit, vous pouvez même vous prévoir un pique-nique. En voilà une bonne idée !                  </p>
                  </Reveal>
              </div>
          </div>
          <div className='column is-6  is-full-mobile is-5-tablet is-6-desktop is-paddingless  center-v is-paddingless-noTouch'>
              
            <div style={{ width: "100%" }}>
                  <Reveal effect="fadeInUp"  duration={1400} >
                        <Img fluid={dune.childImageSharp.fluid}/>
                  </Reveal>

          </div>
          </div>
          </div>
      </div> 
  </div>
</div> 
</div>


<div  className='container-full'>
    <div className=''>
    <div className='container'>

  <div className='section  is-paddingless is-marginless'>
  <br/>
  <br/>
  <br/>
  <br/>
      <div className='columns is-paddingless is-marginless '>
          <div  className='column  is-6   center-v'>

            <div style={{ width: "100%" }}>
                  <Reveal effect="fadeInUp"  duration={1400} >
                        <Img fluid={moulleau.childImageSharp.fluid}/>
                  </Reveal>

            </div>

          </div>
          <div className='column is-5    is-paddingless  center-v'>
              
              <div className='section'>
                  <Reveal effect="fadeInUp"  duration={1400} >
                    <div>
                        <div className="arrow-l subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">→</div>
                        <br/>
                        <span className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>20H00</span>
                    </div>
                  </Reveal>
                    <br/>
                  <Reveal effect="fadeInUp"  duration={1400} >
                    <div className='sub-p is-size-5'><p>LE MOULLEAU</p></div>
                  </Reveal>
                    <br/>
                  <Reveal effect="fadeInUp"  duration={1400} >
                  <p>
                  Si votre belle journée mérite d'être prolongée, rendez-vous dans le quartier du Moulleau. C’est là-bas que vous trouverez les meilleurs animations, glaciers, restaurants,bars, boîtes de nuit... ouverts jusque tard dans la nuit ! Le réveil risque de piquer si vous avez prévu d'aller à la Criée !                  </p>
                  </Reveal>
              </div>

          </div>
      </div> 
  </div>
</div> 
</div>
</div>

    </div>
  )
}

BassinPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  contacts: PropTypes.array,

}

export default BassinPageTemplate
