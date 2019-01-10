import React, { Component } from 'react'
import Helmet from 'react-helmet'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../assets/sass/styles.sass'
import config from '../../data/config'
import GlobalStyles from '../layouts/globalStyles'

class TemplateWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: false,
      navToggle: false
    }
    this.toggleNavbar = this.toggleNavbar.bind(this) 
  }

  toggleNavbar () {
    this.setState({isActive: !this.state.isActive})
  }

  toggleNavbarMain () {
    this.setState({navToggle: !this.state.navToggle})
  }

  render () {
    return (
      <div>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name='description' content={config.siteDescription} />
        </Helmet>
          <GlobalStyles />
        <NavBar 
          isActive={this.state.isActive} 
          navToggle={this.state.navToggle} 
          toggleNavbarMain={() => this.toggleNavbarMain()}
          toggleNavbar={() => this.toggleNavbar()} 
        />
        <div>{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}

export default TemplateWrapper
