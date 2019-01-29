import React, { Component } from 'react'
import Marquee3k from 'marquee3000'


class Marquee extends Component {
  
  componentDidMount() {
    Marquee3k.init();
  }
  render() {
    return (
      <div>
          <div className='marquee3k' data-speed="0.5">
                <span>HELLO!&nbsp;BONJOUR!&nbsp;Hallo!&nbsp;SALAM!&nbsp;Hola!&nbsp;Hei!&nbsp;ossu!&nbsp;Ola!&nbsp;ciao!&nbsp;kaixo!&nbsp;zdravo!&nbsp;hej!&nbsp;tere!&nbsp;salu!&nbsp;pryvit!&nbsp;watdi!</span>
          </div>
      </div>
    )
}
  
}

export default Marquee