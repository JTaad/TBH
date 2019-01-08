import React from 'react'
import {Link, graphql, StaticQuery} from 'gatsby'

const NavBar = ({toggleNavbar, isActive}) => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <strong>Gatsby Starter Business</strong>
          </Link>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

          <div className='navbar-end'>
            <Link className='navbar-item' to='/'>
                            Accueil
            </Link>
            <Link className='navbar-item' to='/chambres'>
                            Chambres
            </Link>
            <Link className='navbar-item' to='/business'>
                            Business
            </Link>
            <Link className='navbar-item' to='/tboutique'>
                            Le "T" Boutique
            </Link>
            <Link className='navbar-item' to='/contact'>
                            À Bientôt
            </Link>
          </div>
        </div>
      </nav>
)

export default NavBar
