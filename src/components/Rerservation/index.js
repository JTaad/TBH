import React from "react";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class Reservation extends React.Component {
  constructor(props) {
    super(props);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
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
    );
  }
}


export default Reservation
