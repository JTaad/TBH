import React,{Component} from "react"
import moment from 'moment'
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"
import "./index.sass"
import { DateRangePicker } from "react-dates"
moment.locale('fr', {
  months : 'Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Août_Septembre_Octobre_Novembre_Décembre'.split('_'),
  monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
  monthsParseExact : true,
  weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
  weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
  weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
  weekdaysParseExact : true,
  longDateFormat : {
      LT : 'HH:mm',
      LTS : 'HH:mm:ss',
      L : 'DD/MM/YYYY',
      LL : 'D MMMM YYYY',
      LLL : 'D MMMM YYYY HH:mm',
      LLLL : 'dddd D MMMM YYYY HH:mm'
  },
  calendar : {
      sameDay : '[Aujourd’hui à] LT',
      nextDay : '[Demain à] LT',
      nextWeek : 'dddd [à] LT',
      lastDay : '[Hier à] LT',
      lastWeek : 'dddd [dernier à] LT',
      sameElse : 'L'
  },
  relativeTime : {
      future : 'dans %s',
      past : 'il y a %s',
      s : 'quelques secondes',
      m : 'une minute',
      mm : '%d minutes',
      h : 'une heure',
      hh : '%d heures',
      d : 'un jour',
      dd : '%d jours',
      M : 'un mois',
      MM : '%d mois',
      y : 'un an',
      yy : '%d ans'
  },
  dayOfMonthOrdinalParse : /\d{1,2}(er|e)/,
  ordinal : function (number) {
      return number + (number === 1 ? 'er' : 'e');
  },
  meridiemParse : /PD|MD/,
  isPM : function (input) {
      return input.charAt(0) === 'M';
  },
  // In case the meridiem units are not separated around 12, then implement
  // this function (look at locale/id.js for an example).
  // meridiemHour : function (hour, meridiem) {
  //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
  // },
  meridiem : function (hours, minutes, isLower) {
      return hours < 12 ? 'PD' : 'MD';
  },
  week : {
      dow : 1, // Monday is the first day of the week.
      doy : 4  // Used to determine first week of the year.
  }
});


class DateRangeInput extends Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null,
    startDay: null,
    startMonth: null,
    startYear: null,
    endDay: null,
    endMonth: null,
    endYear: null
  };

handleChangeDate = ({ startDate, endDate }) => {

  var startDateObj = new Date(startDate);
  var momentObjStart = moment(startDateObj);
  var startDay = momentObjStart.format('DD'); 
  var startMonth = momentObjStart.format('MM'); 
  var startYear = momentObjStart.format('YYYY'); 

  var endDateObj = new Date(endDate);
  var momentObjEnd = moment(endDateObj);
  var endDay = momentObjEnd.format('DD'); 
  var endMonth = momentObjEnd.format('MM'); 
  var endYear = momentObjEnd.format('YYYY'); 


  this.setState({ 
    startDate, 
    endDate,
    startDay,
    startMonth,
    startYear,
    endDay,
    endMonth,
    endYear
   });


}

handleSubmitForm = () => {
  document.getElementById("form_reservit").submit(); 
}


  render() {

    return (
      <div id='blocResa'>
        <form id="form_reservit" action="http://hotel.reservit.com/reservit/reserhotel.php" target="frami" method="get"> 
            <input type="hidden" value="FR" name="lang" id="lang"/>
            <input type="hidden" value="10768" name="hotelid" id="hotelid"/>
            <input id="de_jour" type="hidden" value={this.state.startDay} name="fday" id="fday"/>
            <input id="de_mois" type="hidden" value={this.state.startMonth} name="fmonth" id="fmonth"/>
            <input id="de_annee" type="hidden" value={this.state.startYear} name="fyear" id="fyear"/>
            <input id="a_jour" type="hidden" value={this.state.endDay} name="tday" id="tday"/>
            <input id="a_mois" type="hidden" value={this.state.endMonth} name="tmonth" id="tmonth"/>
            <input id="a_annee" type="hidden" value={this.state.endYear} name="tyear" id="tyear"/>
          </form>
      <DateRangePicker
        transitionDuration={0}
        startDateId="startDate"
        displayFormat={() => "DD/MM/YYYY"}
        endDateId="endDate"
        numberOfMonths={2}
        startDatePlaceholderText=  "Arrivée ?"
        endDatePlaceholderText="Départ ?"
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onDatesChange={({ startDate, endDate }) => {
          this.handleChangeDate({ startDate, endDate })
        }}
        focusedInput={this.state.focusedInput}
        onFocusChange={focusedInput => {
          this.setState({ focusedInput });
        }}
      />
          <div onClick={() => this.handleSubmitForm()} className='blocResaDiv'>
               Disponibilités
          </div>
      </div>
    );
  }
}

export default DateRangeInput;
