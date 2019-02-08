import React from 'react'
import {Link} from 'gatsby'

const NotFoundPage = () => (
  <div>
        <div className='container'>
          <div className='columns'>
            <div className='column is-5' style={{marginTop: "160px",marginBottom: "160px"}}>
                <div className='section'>
                <div className='titleTbh title is-size-3-mobile is-size-1-tablet is-size-1-desktop' style={{height: "auto", border: "0", textAlign: 'left'}}>
                  <span className='titleTbhEmpty'>Mauvaise</span> <span className='titleTbhFull'>Route_</span>
                </div>
                <p>
                Vous pouvez retourner à la page d'accueil ou nous écrire si vous ne trouvez pas ce que vous recherchez.
                </p>
                <br/>
                <br/>
                 <Link to='/'>
                    <div className="arrow-l title is-2 is-marginless is-paddingless">→</div>
                    <span className='subtitle is-2'>Accueil</span>
                </Link>
                </div>
            </div>
          </div>
      </div>
  </div>
)

export default NotFoundPage
