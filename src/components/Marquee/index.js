import React, { Component } from 'react'
import {TimelineMax} from "gsap/TweenMax";

const SLIDE_TO_SHOW = 3;
const WIDTH = 50;
const HEIGHT = 20;
const DURATION = 20;
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const tl = new TimelineMax({
  repeat: -1,
});

class Marquee extends Component {
  componentDidMount() {
    const { content } = this.refs;
    tl.add(TweenLite.to(content, DURATION, {
      transform: `translate3d(${data.length * WIDTH * -1}px, 0, 0)`, 
      ease: Linear.easeNone, 
    }));
    tl.add(TweenLite.to(content, 0, { 
      transform: `translate3d(0, 0, 0)`
    }));
  }
  render() {
    return (
      <div 
        className="marquee"
        style={{
          width: `${SLIDE_TO_SHOW * WIDTH}px`,
          height: `${HEIGHT}px`,
        }}
      >
        <div
          className="child"
          style={{
            width: `${(data.length + SLIDE_TO_SHOW) * WIDTH}px`,
          }}
          ref="content"
          onMouseEnter={() => {
            tl.pause();
          }}
          onMouseLeave={() => {
            tl.play();
          }}
        >
          {
            data.map((item, index) => {
              return (
              <span key={index+1}>
                  <span>HELLO!</span>
                  <span>BONJOUR!</span>
                  <span>Hallo!</span>
                  <span>SALAM!</span>
                  <span>Hola!</span>
                  <span>Hei!</span>
                  <span>ossu!</span> 
                  <span>Ola!</span>
                  <span>ciao!</span>
                  <span>kaixo!</span>
                  <span>zdravo!</span>
                  <span>hej!</span> 
                  <span>tere!</span> 
                  <span>salu!</span> 
                  <span>pryvit!</span> 
                  <span>watdi!</span>
              </span>
              );
            })
          }
          {
            data.map((item, index) => {
              if (index + 1 <= SLIDE_TO_SHOW) {
                return (
                  <span key={`last-${index + 1}`}>
                      <span>HELLO!</span>
                      <span>BONJOUR!</span>
                      <span>Hallo!</span>
                      <span>SALAM!</span>
                      <span>Hola!</span>
                      <span>Hei!</span>
                      <span>ossu!</span> 
                      <span>Ola!</span>
                      <span>ciao!</span>
                      <span>kaixo!</span>
                      <span>zdravo!</span>
                      <span>hej!</span> 
                      <span>tere!</span> 
                      <span>salu!</span> 
                      <span>pryvit!</span> 
                      <span>watdi!</span>
                  </span>
                ); 
              }
              return null;
            })
          }
        </div>
      </div>
    );
  }
}

export default Marquee