import React, { Component } from 'react'
import Carousel from 'nuka-carousel';

class CarouselChambre extends Component {
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
      withoutControls: false,
    };

    this.handleImageClick = this.handleImageClick.bind(this);
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


  handleImageClick() {
    this.setState({ underlineHeader: !this.state.underlineHeader });
  }

  _handleImageLoaded() {
    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 0);
  }

  render () {
    return (
    
                  
                <div style={{ width: "100%" }}>
                <Carousel
                  renderCenterLeftControls={({ previousSlide }) => (
                    <button onClick={previousSlide}>&nbsp;</button>
                  )}
                  renderCenterRightControls={({ nextSlide }) => (
                    <button onClick={nextSlide}>&nbsp;</button>
                  )}
                  slideIndex={this.state.slideIndex}
                  withoutControls={this.state.withoutControls}
                  transitionMode={this.state.transitionMode}
                  cellAlign={this.state.cellAlign}
                  slidesToShow={this.state.slidesToShow}
                  wrapAround={this.state.wrapAround}
                  heightMode={this.state.heightMode}
            
                >
                {this.props.images.map(item => (
                      <img style={{minHeight: "100%!important"}} onLoad={this._handleImageLoaded} src={item.imageSrc} />
                ))}
                      
                </Carousel> 

              </div>



    )
  }
}

export default CarouselChambre


