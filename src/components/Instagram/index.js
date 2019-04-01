import React from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import { FaInstagram } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';


const Instagram = ({ gridItems }) => (
  <section id='instagram' className='section  is-paddingless'>
  {console.log(gridItems)}
  <Fade cascade >
      <div className='columns is-mobile is-paddingless is-marginless is-centered'>
        
          <div  className=' is-one-third-mobile column  is-2-desktop  is-paddingless is-marginless' style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
              <a href="https://www.instagram.com/tboutiquehotel/">
                <div>
                   <FaInstagram size={25} />
                </div>
                <div className='is-hidden-touch'>
                   @tboutiquehotel
                </div>
              </a>
          </div>
        {gridItems.map(item => (
          <div key={item.node.id} className='
          column is-2-desktop 
          is-3-mobile
          is-paddingless is-marginless' >
              <a target='_blank' rel="noopener"href={'https://www.instagram.com/p/'+item.node.id}>
                  <Img fluid={item.node.localFile.childImageSharp.fluid}/>
              </a>
          </div>
        ))}
      </div>
        </Fade>
  </section>
)


export default Instagram
