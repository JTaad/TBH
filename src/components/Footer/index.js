import React from 'react'
import {Link} from 'gatsby'
import config from '../../../data/config'
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import logo_footer from '../../assets/img/logos/logo_nav_tbh.png'

const Footer = () => {
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
                          <img src={logo_footer} style={{ width: '178px'}} alt="T Boutique Hôtel" />

                          </div>
                          <div className='column is-two-thirds'>
                          
                          <div class="field">
                            <div class="control">
                            <label>Newsletter</label>
                              <input class="input is-medium" type="text" placeholder="Votre adresse e-mail"/>
                            </div>
                          </div>
                          </div>
                    </div>
                    
                    <div className='columns'>
                        <div className='column'>
                        <p>82 Boulevard de la Plage,<br/>
                          33120 Arcachon</p>
                          <a className="navTel" href="tel:(+33)556836770">(+33) 5 56 83 67 70</a>
                          <br/>
                          <a className="navMail" href="mailto:hello@tboutiquehotel.fr">hello@tboutiquehotel.fr</a>
                  
                        </div>
                        <div className='column'>
                        
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
                              <li ><Link className='' to='/contact'>
                                              À Bientôt
                              </Link></li>
                            </ul>
                        </div>
                        <div className='column'>
                        
                        <div>
                            <div style={{ fontWeight: "500", marginBottom: "15px" }}>@tboutiquehotel</div>
                            <a style={{ marginRight: "15px" }} href="https://www.instagram.com/tboutiquehotel/"><FaInstagram size={25} /></a>
                            <a href="https://www.facebook.com/tboutiquehotel/"><FaFacebook size={25} /></a>
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
