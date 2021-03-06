import React from 'react'
import {Link} from 'gatsby'
import config from '../../../data/config'
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import Mailchimp from '../Mailchimp'
import logo_footer from '../../assets/img/logos/logo_footer_4K.svg'

  
const Footer = ({ scrollTop }) => {
  return (
    <footer className='footer'>

      <div className='container'>

          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <div>
                    
                    
                    <div className='columns'>
                          <div className='column'>
                          <img src={logo_footer} style={{ width: '170px'}} alt="T Boutique Hôtel" />

                          </div>
                          <div className='column is-8'>
                              <Mailchimp />
                          </div>
                    </div>
                    
                    <div className='columns'>
                        <div className='column is-4'>
                        <p>82 Boulevard de la Plage,<br/>
                          33120 Arcachon</p>
                          <a className="navTel" href="tel:(+33)556836770">(+33) 5 56 83 67 70</a>
                          <br/>
                          <a className="navMail" href="mailto:hello@tboutiquehotel.fr">hello@tboutiquehotel.fr</a>
                  
                        </div>
                        <div className='column is-3'>
                        
                            <ul>
                              <li><Link className='' to='/'>
                                              Accueil
                              </Link></li>
                              <li><Link className='' to='/chambres'>
                                              Chambres
                              </Link></li>
                              <li><Link className='' to='/business'>
                                              Business
                              </Link></li>
                              <li ><Link className='' to='/tboutique'>
                                              Le "T" Boutique
                              </Link></li>
                              <li ><Link className='' to='/bassin'>
                                              Le Bassin
                              </Link></li>
                              <li ><Link className='' to='/contact'>
                                              À Bientôt
                              </Link></li>
                            </ul>
                        </div>
                        <div className='column is-3'>
                        
                          <div>
                              <div style={{ fontWeight: "500", marginBottom: "15px" }}>@tboutiquehotel</div>
                              <a style={{ marginRight: "15px" }} href="https://www.instagram.com/tboutiquehotel/"><FaInstagram size={25} /></a>
                              <a href="https://www.facebook.com/tboutiquehotel/"><FaFacebook size={25} /></a>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <Link className='' to='/mentions-legales' style={{marginTop: "-3px", display: "block"}}>
                                              Mentions légales
                              </Link>
                          </div>
                        </div>
                        <div className='column is-2'>
                          <div className="is-pulled-right">
                              <a id='arrowTop' className='title is-3' onClick={scrollTop}>↑</a>
                          </div>
                        </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
    </footer>
  )
}

export default Footer
