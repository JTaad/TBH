import React from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"

const Instagram = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map(item => (
      <div key={item.id} className='column is-6' style={{borderRadius: '5px'}}>
        <section className='section'>
           <a target='_blank' rel="noopener"href={'https://www.instagram.com/p/'+item.node.id}><Img fluid={item.node.localFile.childImageSharp.fluid} /></a>
        </section>
      </div>
    ))}
  </div>
)


export default Instagram
