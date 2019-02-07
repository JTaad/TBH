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




class TemplateWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: false,
      navToggle: false,
    }
    this.toggleNavbar = this.toggleNavbar.bind(this) 
    this.toggleNavbarMain = this.toggleNavbarMain.bind(this) 
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
       
         <Transition location={location}>{this.props.children}</Transition>
        
        <Footer 
          scrollTop={() => this.scrollToTop()}
        />
      </div>
    )
  }
}

export default TemplateWrapper
