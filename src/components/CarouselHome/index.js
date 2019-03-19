import React, { Component } from 'react'
import Carousel from 'nuka-carousel';
import image1 from '../../assets/img/home/chambre_1.jpg'
import {Link} from 'gatsby'
import { CSSTransition, TransitionGroup } from "react-transition-group";


class CarouselHome extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      slideIndex: 0,
      length: 3,
      wrapAround: true,
      underlineHeader: false,
      slidesToShow: 1,
      cellAlign: "center",
      transitionMode: "fade",
      heightMode: "current",
      autoplay: true,
      autoplayInterval: 3000,
      withoutControls: false,
      urlLink: 'standard',
      colorBg: 'is-bg-orange',
      items: [
        { slideIndex: 0, titre: "STANDARD", image: image1, urlLink: 'standard' , colorBg: 'is-bg-orange'},
        { slideIndex: 1, titre: "SUITE", image: image1, urlLink: 'suite', colorBg: 'is-bg-vert'  },
        { slideIndex: 2, titre: "LUXE", image: image1, urlLink: 'luxe', colorBg: 'is-bg-jaune' },
      ], 
    };

    this.handleImageClick = this.handleImageClick.bind(this);
  }
  componentDidMount() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 250);
  }



  handleImageClick() {
    this.setState({ underlineHeader: !this.state.underlineHeader });
  }


  handleChange() {
    this.setState({ slideIndex: this.stateslideIndex })
  }

  moveSlide(slideIndex) {
    let urlLink = null
    if(slideIndex == 0) {
      urlLink = 'standard' 
    }
    else if (slideIndex == 1) {
      urlLink = 'suite' 
    }
    else {
      urlLink = 'luxe'
    }
    this.setState({ slideIndex:slideIndex, urlLink: urlLink })
  }

  render () {
    return (
    

      <div className='section  is-paddingless is-marginless'>
      <div className={this.state.colorBg}>
          <div className='columns is-paddingless is-marginless is-paddinglessTB '>
              <div  className='column center-v is-paddinglessTB 
               is-full-tablet
               is-5-desktop 
               is-offset-1-desktop '>
                  <div className='section'>
                      <div className="arrow-l title is-2 is-marginless is-paddingless">→</div>
                      <br/>
                      <span className='subtitle is-size-3-mobile is-size-2-tablet is-size-2-desktop'>Les chambres</span>
                      <br/>
                      <br/>
                      <p>
                        Nos chambres sont de jolis cocons où il fait bon se lover. Décoration soignée, choix minutieux des matières, des couleurs, des équipements, petits plus en bonus… nous avons pris soin de nous occuper de tout, pour que vous vous sentiez comme chez vous. Sans parler du petit-déjeuner … !
                      </p>

                      <br/>
                      <div className='sub-p is-size-5'><p>On vous montre<br/>votre chambre ? </p></div>
  
                      <br/>
                      <br/>
                      <Link className='button is-outlined title is-5' to={`chambres#${this.state.urlLink}`}>
                         <span className='boldTitle'>+</span>&nbsp;d'infos
                      </Link>
 
 
                      <TransitionGroup  className="is-pulled-right" style={{display: "block", height:"140px"}}>
                        <CSSTransition
                          key={this.state.slideIndex}
                          timeout={1000}
                          classNames="messageout"
                          style={{position: 'absolute'}}
                        >
                        <div  className='carouselNumber  is-hidden-touch'>
                         0{this.state.slideIndex + 1}
                         </div>
                        </CSSTransition>
                      </TransitionGroup>
                  </div>
              </div>
              <div className='column 
              is-paddingless is-marginless
              is-hidden-touch
              is-half-desktop   '>
                  
                <div style={{ width: "100%" }}>
                <Carousel
                  renderCenterLeftControls={({ previousSlide }) => (
                    <button onClick={previousSlide}>←</button>
                  )}
                  renderCenterRightControls={({ nextSlide }) => (
                    <button onClick={nextSlide}>→</button>
                  )}
                  renderBottomCenterControls={false}
                  slideIndex={this.state.slideIndex}
                  urlLink={this.state.urlLink}
                  afterSlide={(slideIndex) => this.moveSlide(slideIndex)}
                  withoutControls={this.state.withoutControls}
                  transitionMode={this.state.transitionMode}
                  cellAlign={this.state.cellAlign}
                  slidesToShow={this.state.slidesToShow}
                  wrapAround={this.state.wrapAround}
                  heightMode={this.state.heightMode}
                  autoplayInterval={this.state.autoplayInterval}
                  initialSlideHeight='720px'
                >
                {this.state.items.map(({image }) => (
                  <img src={image} 
                        onClick={this.handleImageClick}/>
                ))}
                </Carousel> 

                <div className='carouselAll ' style={{ display: "flex", justifyContent: "flex-start" }}>
                    {this.state.items.map(({ titre, capacite, urlLink, slideIndex, colorBg }) => (
                      <button className={ this.state.slideIndex == slideIndex ? 'carouselActive' : 'carouselNotActive' } onClick={() => this.setState({ slideIndex, urlLink, capacite, titre, colorBg})}>{titre}</button>
                    ))}  
                </div>

              </div>
              </div>
              </div>
          </div>
      </div>



    )
  }
}

export default CarouselHome


