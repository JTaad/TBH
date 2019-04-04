import React from 'react'
import {Link, graphql, StaticQuery} from 'gatsby'
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import logo_nav from '../../assets/img/logos/logo_nav_tbh.png'
import logo_nav_header from '../../assets/img/logos/logo_navbar_4K_2x.svg'


const NavBar = ({toggleNavbarMain, navToggle}) => (
  <div>
      <nav id="nav_norm" className={navToggle ? 'nav-on' : 'nav-off'} aria-label='main navigation' style={{zIndex:"999999999"}}>
        <div  id="navMain" className='container is-fixed-top '>
                <div className="column-nav-left is-flex-desktop">
                    <div id="contentNavNorm" className=''>
                        <div id="contentNavNormTopLeft">
                        <ul className='section' onClick={toggleNavbarMain}>
                            <li className='title is-3 is-size-3-touch'><Link activeClassName='navFocus' to='/'>
                                            Accueil
                            </Link></li>
                            <li className='title is-3 is-size-3-touch'><Link activeClassName='navFocus' className='' to='/chambres'>
                                            Chambres
                            </Link></li>
                            <li className='title is-3 is-size-3-touch'><Link activeClassName='navFocus' className='' to='/business'>
                                            Business 
                            </Link></li> 
                            <li className='title is-3 is-size-3-touch'><Link activeClassName='navFocus' className='' to='/tboutique'>
                                            Le "T" Boutique
                            </Link></li>
                            <li className='title is-3 is-size-3-touch'><Link activeClassName='navFocus' className='' to='/bassin'>
                                            Le Bassin
                            </Link></li>
                            <li className='title is-3 is-size-3-touch'><Link activeClassName='navFocus' className='' to='/contact'>
                                            À Bientôt
                            </Link></li>
                            <li style={{marginTop: "20px",marginBottom: "20px"}}>
                                <div className="is-hidden-desktop" >
                                    <a style={{ marginRight: "15px" }} href="https://www.instagram.com/tboutiquehotel/"><FaInstagram size={25} /></a>
                                    <a href="https://www.facebook.com/tboutiquehotel/"><FaFacebook size={25} /></a>
                                </div>
                            </li>
                            <li>
                                <div id="contentNavArrowCloseResp" className='title is-3 is-hidden-desktop'>
                                    <div onClick={toggleNavbarMain}>→</div>
                                </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div id="contentNavNormBot" className='section' style={{ paddingTop: '0'}} >
                        <div id="contentNavNormBotLeft">
                            <img className="is-hidden-touch" src={logo_nav} style={{ width: '100px', marginBottom: '30px' }} alt="T Boutique Hôtel" />
                            
                            <div className="is-hidden-touch" >
                                <div style={{ fontWeight: "500", marginBottom: "15px" }}>@tboutiquehotel</div>
                                <a style={{ marginRight: "15px" }} href="https://www.instagram.com/tboutiquehotel/"><FaInstagram size={25} /></a>
                                <a href="https://www.facebook.com/tboutiquehotel/"><FaFacebook size={25} /></a>
                            </div>
                        </div>
                    </div>
            </div>
 

              <div className='column-nav-right section is-hidden-touch is-flex-desktop'>
                    <div id="contentNavNormTopRight" className='title is-4'>
                        <a href="https://secure.reservit.com/fo/booking/2/10768/dates?specialMode=default&langcode=FR&partid=0&custid=2&hotelid=10768&m=booking" target="_blank">RÉSERVER</a>
                    </div>
                    <div id="contentNavNormMiddleRight" className='title is-2'>
                        <div onClick={toggleNavbarMain}>→</div>
                    </div>
                    <div id="contentNavNormBotRight" className='is-hidden-touch is-size-7'>
                        <a className="navTel" href="tel:(+33)556836770">(+33) 5 56 83 67 70</a>
                        <br/>
                        <a className="navMail" href="mailto:hello@tboutiquehotel.fr">hello@tboutiquehotel.fr</a>
                    </div>
                </div>
         </div>

      </nav>


      <div id='nav_header' className="container navbar is-fixed-top ">
      
            <div id="navHeader" >
                <div>
                    <div id="navButtonHover" onClick={toggleNavbarMain}>
                        <div id='navButton' >
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link className='' to='/'>
                        <img className='center' src={logo_nav_header} style={{ display: "block", width: '45px', marginLeft: 'auto', marginRight: 'auto' }} alt="T Boutique Hôtel" />
                    </Link>
                </div>
                
                <div id="navHeaderRight">
                    <a className='title is-5' href="https://secure.reservit.com/fo/booking/2/10768/dates?specialMode=default&langcode=FR&partid=0&custid=2&hotelid=10768&m=booking" target="_blank">RÉSERVER</a>
                </div>         
          </div>
      </div>



  </div>
)

export default NavBar
