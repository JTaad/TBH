import React, { Component } from 'react'
import Carousel from 'nuka-carousel';
import imageStandard from '../../assets/img/home/home_ch_standard.jpg'
import imageLuxe from '../../assets/img/home/home_ch_luxe.jpg'
import imageSuite from '../../assets/img/home/home_ch_suite.jpg'
import {Link} from 'gatsby'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';


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
      heightMode: "max",
      autoplay: true,
      autoplayInterval: 3000,
      withoutControls: false,
      urlLink: 'standard',
      colorBg: 'is-bg-orange',
      colorFont: 'is-font-orange',
      items: [
        { slideIndex: 0, titre: "STANDARD", image: imageStandard, urlLink: 'standard' , colorBg: 'is-bg-orange', colorFont: 'is-font-orange'},
        { slideIndex: 1, titre: "LUXE", image: imageLuxe, urlLink: 'luxe', colorBg: 'is-bg-jaune', colorFont: 'is-font-jaune' },
        { slideIndex: 2, titre: "SUITE", image: imageSuite, urlLink: 'suite', colorBg: 'is-bg-vert', colorFont: 'is-font-vert'  },
      ], 
    };

  }
  
  componentDidMount() {
    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
          setTimeout(() => {
              window.dispatchEvent(new Event('resize'));
            }, 500);
      }, 100);
}

componentDidUpdate() {
setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 0);
}




  handleChange() {
    this.setState({ slideIndex: this.stateslideIndex })
  }

  moveSlide(slideIndex) {
    let urlLink = null
    let colorBg = null
    let colorFont = null

    switch(slideIndex) {
      case 0:
        colorBg = 'is-bg-orange'
        colorFont = 'is-font-orange'
        urlLink = 'standard' 
        break;
      case 1:
        colorBg = 'is-bg-jaune'
        colorFont = 'is-font-jaune'
        urlLink = 'luxe' 
        break;
      case 2:
        colorBg = 'is-bg-vert'
        colorFont = 'is-font-vert'
        urlLink = 'suite' 
        break;
    }


    this.setState({ slideIndex:slideIndex, urlLink: urlLink, colorBg, colorFont })
  }

  render () {
    return (
    

      <div className='section  is-paddingless is-marginless'>
      <div id="carousel-home-bg" className={this.state.colorBg}>
          <div className='columns is-paddingless is-marginless is-paddinglessTB '>
              <div  className='column center-v is-paddinglessTB 
                is-full-mobile
                is-full-tablet
                is-5-desktop

               is-5-desktop 
               is-offset-1-desktop 'style={{position: 'relative'}}>
                  <div className='section section-text'>

                    <Reveal effect="fadeInUp"  duration={2000} >
                      <div>
                        <div className="arrow-l title is-size-4-mobile is-size-3-tablet is-size-3-desktop is-marginless is-paddingless">→</div>
                        <br/>
                        <span className='subtitle is-size-4-mobile is-size-3-tablet is-size-3-desktop'>Les chambres</span>
                      </div>
                    </Reveal>
                      <br/>
                      <br/>
                    <Reveal effect="fadeInUp"  duration={2000} >
                      <p>
                      Nos chambres sont de jolis cocons où il fait bon se lover. Décoration soignée, choix minutieux des matières, des couleurs, des équipements, petits plus en bonus... nous avons pris soin de nous occuper de tout, pour que vous vous sentiez comme chez vous. Sans parler du petit-déjeuner... !                      </p>
                    </Reveal>

                      <br/>
                      <Reveal effect="fadeInUp"  duration={2000} >
                          <div className='sub-p is-size-5'><p>On vous montre<br/>votre chambre ? </p></div>
                      </Reveal>
                      <br/>
                      <br/>
                      <Reveal effect="fadeInUp"  duration={2000} >
                        <Link className='button is-outlined title is-5' to={`chambres#${this.state.urlLink}`}>
                          <span className='boldTitle'>+</span>&nbsp;d'infos
                        </Link>
                      </Reveal>
 
   
                      <TransitionGroup  className="is-pulled-right  is-hidden-touch " style={{display: "block", height:"140px",position: "absolute",right: "110px", bottom: "55px"}}>
                        <CSSTransition
                          key={this.state.slideIndex}
                          timeout={1000}
                          classNames="messageout"
                          style={{position: 'absolute'}}
                        >
                        <div  className={`carouselNumberHome   ${this.state.colorFont}`}>
                         0{this.state.slideIndex + 1}
                         </div>
                        </CSSTransition>
                      </TransitionGroup>
                  </div>
              </div>
              <div className='column 
              is-paddingless is-marginless
              is-full-mobile
              is-full-tablet
              is-half-desktop  '>
                  
                <div style={{ width: "100%" }}>
                <Carousel
                  renderCenterLeftControls={({ previousSlide }) => (
                    <button onClick={previousSlide}>&nbsp;</button>
                  )}
                  renderCenterRightControls={({ nextSlide }) => (
                    <button onClick={nextSlide}>&nbsp;</button>
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
                >
                {this.state.items.map(({image }) => (
                  <img src={image} style={{minHeight: "100%"}}
                        onClick={this.handleImageClick}/>
                ))}
                </Carousel> 

                <div className='carouselAll ' style={{ display: "flex", justifyContent: "flex-start" }}>
                    {this.state.items.map(({ titre, capacite, urlLink, slideIndex, colorBg, colorFont }) => (
                      <button className={ this.state.slideIndex == slideIndex ? 'carouselActive' : 'carouselNotActive' } onClick={() => this.setState({ slideIndex, urlLink, capacite, titre, colorBg, colorFont})}>{titre}</button>
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


