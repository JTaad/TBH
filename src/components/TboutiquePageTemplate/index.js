import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import headerImage from '../../assets/img/tboutique/header_tboutique_tbh.jpg'
import { Link } from 'gatsby'

const TboutiquePageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  contacts,
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
      

    <div className='headerHome' style={{backgroundImage: `url(${headerImage})`}}>
       
    </div>



    <div className='section is-marginless is-paddingless'>
        <div className='titleTbh  title'>
          <span className='titleTbhFull'>Concept_</span>
        </div>
    </div>


    <div className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless'>
            <div className='column is-half is-paddingless is-marginless' style={{ textAlign: 'left' }}>
               <Img fluid={concept.childImageSharp.fluid}/> 
            </div>
            <div  className='column is-5 center-v'>
                <div className='section'>
                    <div className="arrow-r title is-2 is-marginless is-paddingless">←</div>
                    <br/>
                    <span className='subtitle is-2'>Le concept</span>
                    <br/>
                    <br/>
                    <p>
                      Le T Boutique Hôtel vous propose une expérience 3 étoiles, à la fois unique et multiple, à Arcachon. Ici la convivialité se mêle au chic, la décontraction au design et la singularité au partage.
                        <br/>  <br/> 
                      Entièrement rénové, notre hôtel est pensé pour être avant tout le vôtre. Appropriez-vous chacun des espaces, comme à la maison.
                    </p>
                    <br/>
                    <br/>
                    <Img fluid={boutique.childImageSharp.fluid}/>
                    <br/>
                    <br/>
                    <Img fluid={histoire.childImageSharp.fluid}/>
                </div>
            </div>
        </div>
    </div>





    <div className='section is-marginless is-paddingless'>
        <div className='titleTbh  title'>
        <span className='titleTbhEmpty'>L'histoire </span> <span className='titleTbhFull'>du T_</span>

        </div>
    </div>



    <div className='section  is-paddingless is-marginless'>
        <div className='columns is-paddingless is-marginless'>
            <div className='column is-half is-paddingless is-marginless' style={{ textAlign: 'left' }}>
               <Img fluid={histoire.childImageSharp.fluid}/> 
            </div>
            <div  className='column is-5  center-v'>
                <div className='section'>
                    <div className="arrow-r title is-2 is-marginless is-paddingless">←</div>
                    <br/>
                    <span className='subtitle is-2'>Family story</span>
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
