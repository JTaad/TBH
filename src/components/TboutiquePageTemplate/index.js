import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import { Link } from 'gatsby'

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
        <div className='titleTbhFirst titleTbh title is-size-3-mobile is-size-1-tablet is-size-1-desktop'>
          <span className='titleTbhFull'>Concept_</span>
        </div>
    </div>


    <div className='section  is-paddingless is-marginless'>
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
                      Le T Boutique Hôtel vous propose une expérience 3 étoiles, à la fois unique et multiple, à Arcachon. Ici la convivialité se mêle au chic, la décontraction au design et la singularité au partage.
                        <br/>  <br/> 
                      Entièrement rénové, notre hôtel est pensé pour être avant tout le vôtre. Appropriez-vous chacun des espaces, comme à la maison.
                    </p>
                </div>
            </div>
    </div>
    </div>
    <div className='container'>
    <div className='section  is-paddingless is-marginless'>
                <div className='columns'>
                  <div  className='column is-5 is-offset-1'>
                    <div className="arrow-l subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop is-marginless is-paddingless">→</div>
                          <br/>
                          <span className='subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>L'hôtel</span>
                          <br/>
                          <br/>
                          <p>
                            Le T Boutique Hôtel vous propose une expérience 3 étoiles, à la fois unique et multiple, à Arcachon. Ici la convivialité se mêle au chic, la décontraction au design et la singularité au partage.
                              <br/>  <br/> 
                            Entièrement rénové, notre hôtel est pensé pour être avant tout le vôtre. Appropriez-vous chacun des espaces, comme à la maison.
                          </p>
                          <br/>
                          <br/>
                    <div className="arrow-l subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop is-marginless is-paddingless">→</div>
                          <br/>
                          <span className='subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop'>L'hôtel</span>
                          <br/>
                          <br/>
                          <p>
                            Le T Boutique Hôtel vous propose une expérience 3 étoiles, à la fois unique et multiple, à Arcachon. Ici la convivialité se mêle au chic, la décontraction au design et la singularité au partage.
                              <br/>  <br/> 
                            Entièrement rénové, notre hôtel est pensé pour être avant tout le vôtre. Appropriez-vous chacun des espaces, comme à la maison.
                          </p>
                  </div>

                    <div  className='column is-5 '>
                      <Img fluid={boutique.childImageSharp.fluid}/>
                      <br/>
                      <br/>
                      <Img fluid={histoire.childImageSharp.fluid}/>
                  </div>
              </div>
    </div>
  </div>
 


    <div className='section is-marginless is-paddingless'>
        <div className='titleTbh title is-size-3-mobile is-size-1-tablet is-size-1-desktop'>
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
                      Le T Boutique Hôtel vous propose une expérience 3 étoiles, à la fois unique et multiple, à Arcachon. Ici la convivialité se mêle au chic, la décontraction au design et la singularité au partage.
                        <br/>  <br/> 
                      Entièrement rénové, notre hôtel est pensé pour être avant tout le vôtre. Appropriez-vous chacun des espaces, comme à la maison.
                    </p>
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
