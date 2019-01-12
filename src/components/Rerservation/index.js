import React, { Component } from 'react'
import bulmaCalendar from 'bulma-calendar'


class Rerservation extends Component {

  constructor (props) {
    super(props)
  }

/* 
  componentDidMount() {
    var date = new bulmaCalendar(document.querySelector('.chooseDate'), {
      startDate: '2018-12-31',
      displayMode: "dialog",
      closeOnSelect: true,
      showFooter: false,
      dateFormat: 'DD/MM/YYYY',
    });
      <input id='date-picker-arrivee' className='chooseDate' type="date"/>
  
}
 */


  render () {
    return (
      <div>
        <div id='blocResa'>
            <div className='blocResaDiv'>
                <div className='blocResaArrow'>→</div>  <div style={{marginLeft: "10px"}}>Arrivée ?</div>
            </div>
            <div className='blocResaDiv'>
                <div className='blocResaArrow'>→</div>  <div style={{marginLeft: "10px"}}>Départ ?</div>
            </div>
            <div className='blocResaDiv'>
                 Disponibilités
            </div>
        </div>
      </div>
    )
  }
}

export default Rerservation


