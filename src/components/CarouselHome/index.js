import React, { Component } from 'react'
import Carousel from 'nuka-carousel';
import headerImage from '../../assets/img/home/chambre_1.jpg'
import {Link} from 'gatsby'


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
      urlLink: 'standard'
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
                        Le T Boutique Hôtel vous propose une expérience 3 étoiles, à la fois unique et multiple, à Arcachon. Ici la convivialité se mêle au chic, la décontraction au design et la singularité au partage.
                          <br/>  <br/> 
                        Entièrement rénové, notre hôtel est pensé pour être avant tout le vôtre. Appropriez-vous chacun des espaces, comme à la maison.
                      </p>
  
                      <br/>
                      <br/>
                      <Link className='button is-outlined title is-5' to={`chambres#${this.state.urlLink}`}>
                         <span className='boldTitle'>+</span>&nbsp;d'infos
                      </Link>
 
                      <div className='carouselNumber is-pulled-right is-hidden-touch'>
                         0{this.state.slideIndex + 1}
                      </div>
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
                <img src={headerImage} 
                      onClick={this.handleImageClick}/>
                      
                      <img src={headerImage} 
                            onClick={this.handleImageClick}/>
                      
                            <img src={headerImage} 
                                  onClick={this.handleImageClick}/>
                </Carousel> 

                <div className='carouselAll ' style={{ display: "flex", justifyContent: "flex-start" }}>
                      <button className={ this.state.slideIndex == 0 ? 'carouselActive' : 'carouselNotActive' } onClick={() => this.setState({ slideIndex: 0, urlLink: 'standard' })}>Standard</button>
                      <button className={ this.state.slideIndex  == 1 ? 'carouselActive' : 'carouselNotActive' } onClick={() => this.setState({ slideIndex: 1, urlLink: 'suite' })}>Suite</button>
                      <button className={ this.state.slideIndex  == 2 ? 'carouselActive' : 'carouselNotActive' } onClick={() => this.setState({ slideIndex: 2, urlLink: 'luxe' })}>Luxe</button>
                </div>

              </div>
              </div>
          </div>
      </div>



    )
  }
}

export default CarouselHome


