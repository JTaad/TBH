import React from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import { FaInstagram } from 'react-icons/fa';

const Instagram = ({ gridItems }) => (
  <section id='instagram' className='section  is-paddingless'>
      <div className='columns is-paddingless is-marginless is-centered'>
          <div  className='column is-2 is-paddingless is-marginless' style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
              <a href="https://www.instagram.com/tboutiquehotel/">
                <div>
                   <FaInstagram size={25} />
                </div>
                <div>
                   @tboutiquehotel
                </div>
              </a>
          </div>
        {gridItems.map(item => (
          <div key={item.node.id} className='column is-2 is-paddingless is-marginless' >
              <a target='_blank' rel="noopener"href={'https://www.instagram.com/p/'+item.node.id}>
                  <Img fluid={item.node.localFile.childImageSharp.fluid}/>
              </a>
          </div>
        ))}
      </div>
  </section>
)


export default Instagram
