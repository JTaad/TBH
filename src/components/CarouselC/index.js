import React, { Component } from 'react'
import Carousel from 'nuka-carousel';
import headerImage from '../../assets/img/home/chambre_1.jpg'

const colors = ["7732bb", "047cc0", "00884b", "e3bc13", "db7c00", "aa231f"];

class CarouselC extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      slideIndex: 0,
      length: 3,
      wrapAround: false,
      underlineHeader: false,
      slidesToShow: 1,
      cellAlign: "left",
      transitionMode: "fade",
      heightMode: "max",
      withoutControls: false
    };

    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick() {
    this.setState({ underlineHeader: !this.state.underlineHeader });
  }

  render () {
    return (
      <div style={{ width: "100%" }}>
      <Carousel
        afterSlide={slideIndex => this.setState({ slideIndex })}
        withoutControls={this.state.withoutControls}
        transitionMode={this.state.transitionMode}
        cellAlign={this.state.cellAlign}
        slidesToShow={this.state.slidesToShow}
        wrapAround={this.state.wrapAround}
        slideIndex={this.state.slideIndex}
        heightMode={this.state.heightMode}
      >
      <img src={headerImage} 
            onClick={this.handleImageClick}
            style={{
              height:
              this.state.heightMode === "current" ? 100 *  1 : 400

            }}/>
            <img src={headerImage} 
                  onClick={this.handleImageClick}
                  style={{
                    height:
                    this.state.heightMode === "current" ? 100 *  1 : 400

                  }}/>
      </Carousel> 
      {this.state.slideIndex + 1}

      <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <button onClick={() => this.setState({ slideIndex: 0 })}>Standard</button>
            <button onClick={() => this.setState({ slideIndex: 1 })}>Suite</button>
            <button onClick={() => this.setState({ slideIndex: 2 })}>Luxe</button>
          </div>
       
      </div>

    </div>
    )
  }
}

export default CarouselC


