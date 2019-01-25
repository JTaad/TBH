import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
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
            <DatePicker
              locale="fr-FR"
              dateFormat="DD/MM/YYYY"
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
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
