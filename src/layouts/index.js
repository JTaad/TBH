import React, { Component } from 'react'
import Helmet from 'react-helmet'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Marquee from '../components/Marquee'
import { animateScroll as scroll } from 'react-scroll'
import '../assets/sass/styles.sass'
import config from '../../data/config'
import GlobalStyles from '../layouts/globalStyles'
import Transition from "../components/Transition"
import Remise from "../assets/img/home_remiseHD_X2.png"

class TemplateWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: false,
      navToggle: false,
      isRemise: true,
    }
    this.toggleNavbar = this.toggleNavbar.bind(this) 
    this.toggleNavbarMain = this.toggleNavbarMain.bind(this) 
  }



  componentDidMount () {
    window.onscroll = function() {
      if(window.pageYOffset === 0 && this.state.isRemise == false) {
          this.setState({isRemise: true})
      }
      else{
        this.setState({isRemise: false})
      }
    }.bind(this);
  }
  toggleNavbar () {
    this.setState({isActive: !this.state.isActive})
  }

  toggleNavbarMain () {
    this.setState({navToggle: !this.state.navToggle})
  }

  scrollToTop () {
    scroll.scrollToTop();
  }
  render () {
    const { location } = this.props
    return (
      <div>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name='description' content={config.siteDescription} />
        </Helmet>
          <GlobalStyles />

        <Marquee />
        <NavBar 
          isActive={this.state.isActive} 
          navToggle={this.state.navToggle} 
          toggleNavbarMain={() => this.toggleNavbarMain()}
          toggleNavbar={() => this.toggleNavbar()} 
        />
       
       <div> 

      <div id="remise"  className={this.state.isRemise ? 'remise-on' : 'remise-off'} >
        <div style={{fontSize: '22px', position: "relative", left: "10px", top: "35px", zIndex: '999999999', color: "#FFF", fontFamily: "Poppins", fontWeight: "bold"}} id="remise">10%</div>
        <img src={Remise}/>
      </div>

      </div>
        <div >
         <Transition  id="bgTrans" className={this.state.navToggle ? 'nav-on' : 'nav-off'} location={location}>{this.props.children}</Transition>
        </div>
        <Footer 
          scrollTop={() => this.scrollToTop()}
        />
      </div>
    )
  }
}

export default TemplateWrapper
