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
import OpenGraph from "../assets/img/OpenGraph_TBH.jpg"
import CookieConsent from "react-cookie-consent";


class TemplateWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: false,
      navToggle: false,
      isRemise: true,
      isHoverNav: false
    }
    this.toggleNavbar = this.toggleNavbar.bind(this) 
    this.toggleNavbarMain = this.toggleNavbarMain.bind(this) 
    this.handleHoverNav = this.handleHoverNav.bind(this) 
  }

  handleHoverNav () {
    this.setState(prevState => ({
      isHoverNav: !prevState.isHoverNav
    }));
  }

  componentDidMount () {
    window.onscroll = function() {
      if(window.pageYOffset === 0 && this.state.isRemise === false) {
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
          <meta property='og:title' content={config.siteTitle} />
          <meta property='og:description' content={config.siteDescription} />
          <meta property='og:image' content={OpenGraph} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content={OpenGraph} />
        </Helmet>
          <GlobalStyles />
  <CookieConsent
  buttonText="Accepter"
  style={{ background: "#00165F", color: "#FFF" , fontFamily: "Poppins"}}
  buttonStyle={{ color: "#00165F", fontSize: "14px", backgroundColor: "#FFF", fontFamily: "Poppins", textTransform: "uppercase" }}
  >
    <span style={{ color: "#FFF" }}>En poursuivant la navigation, vous acceptez l'utilisation des cookies. <a style={{color: "#FFF"}} href="/mentions-legales">En savoir plus</a></span>
</CookieConsent>
        <Marquee />
        <NavBar 
          isActive={this.state.isActive} 
          navToggle={this.state.navToggle} 
          isHoverNav={this.state.isHoverNav} 
          toggleNavbarMain={() => this.toggleNavbarMain()}
          toggleNavbar={() => this.toggleNavbar()} 
          handleHoverNav={() => this.handleHoverNav()} 
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
