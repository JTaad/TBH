import React, { Component } from 'react'
import Carousel from 'nuka-carousel';
import image1 from '../../assets/img/business/plans_seminaire_1.png'
import image2 from '../../assets/img/business/plans_seminaire_1.png'
import image3 from '../../assets/img/business/plans_seminaire_1.png'
import { CSSTransition, TransitionGroup } from "react-transition-group";



class CarouselBusiness extends Component {

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
      urlLink: 'conference',
      colorBg: 'is-bg-rose',
      capacite: '18 personnes',
      titre: 'Conférence',
      items: [
        { slideIndex: 0, image: image1, titre: 'Conférence', capacite: '21 personnes', urlLink: 'conference' },
        { slideIndex: 1, image: image2, titre: 'Théâtre', capacite: '22 personnes', urlLink: 'theatre' },
        { slideIndex: 2, image: image3, titre: 'En "U', capacite: '23 personnes', urlLink: 'enu' },
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
      urlLink = 'conference' 
    }
    else if (slideIndex == 1) {
      urlLink = 'theatre' 
    }
    else {
      urlLink = 'enu'
    }
    this.setState({ slideIndex:slideIndex, urlLink: urlLink })
  }

  render () {
    return (
      <div className='container-fullhd' className={this.state.colorBg} >
    <div className='container'>
    
    
      <div className='section' style={{paddingBottom: "0px"}}>
        <div className='subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop is-centered' style={{textAlign:'center'}}>NOS PLANS DE SALLES_</div>
      
        <div id="carousel-business" className='carouselAll ' style={{ display: "flex", justifyContent: "space-evenly" }}>
            {this.state.items.map(({ titre, capacite, urlLink, slideIndex }) => (
               <button className={ this.state.slideIndex == slideIndex ? 'carouselActive' : 'carouselNotActive' } onClick={() => this.setState({ slideIndex, urlLink, capacite, titre})}><p>{titre}</p></button>
            ))} 
      </div>
</div>

      <div className='section  is-paddingless is-marginless'>
      
      <div >

          <div className='columns is-paddingless is-marginless is-paddinglessTB '>
           <div className='column 
              is-paddingless is-marginless
              is-half-desktop   '>
                  
                <div className="section" >
                <Carousel
                  renderCenterLeftControls={false}
                  renderCenterRightControls={false}
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
                  <img src={image} 
                        onClick={this.handleImageClick}/>
                ))}
                </Carousel> 

              </div>
          </div>




              <div  className='column center-v is-paddinglessTB 
               is-full-tablet
               is-5-desktop  '>
                  <div className='section'>
                      <div className="arrow-r title is-2 is-marginless is-paddingless">←</div>
                      <br/>
                      <span className='subtitle is-size-3-mobile is-size-2-tablet is-size-2-desktop'>
               
                           {this.state.titre}
                      </span>
                      <br/>
                      <br/>
                      <p>
                    
                      CAPACITÉ:&nbsp;&nbsp;
                      <TransitionGroup   style={{display: "inline"}}>
                        <CSSTransition
                          key={this.state.slideIndex}
                          timeout={1000}
                          classNames="messageout"
                        style={{position: 'absolute', height:"20px"}}
                        >
                          <span>
                           {this.state.capacite}
                          </span>
                        </CSSTransition>
                      </TransitionGroup>
                      
                      </p>

 
                      <TransitionGroup  style={{display: "block", height:"140px"}}>
                        <CSSTransition
                          key={this.state.slideIndex}
                          timeout={1000}
                          classNames="messageout"
                          style={{position: 'absolute'}}
                        >
                        <div  className='carouselNumber is-pulled-left is-hidden-touch'>
                         0{this.state.slideIndex + 1}
                         </div>
                        </CSSTransition>
                      </TransitionGroup>
                      </div>
              </div>
           
              </div>
              </div>
      </div>

</div>
</div>

    )
  }
}

export default CarouselBusiness


