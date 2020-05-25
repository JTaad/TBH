import React, {Component} from 'react'
import YouTube from 'react-youtube';

class Video extends Component {
  constructor (props) {
    super(props)
    this.state = {
      onLoad: false
    }

    this._onReady = this._onReady.bind(this)
  }

  
  _onPlay(event) {
  }
  _onReady(event) {
    event.target.pauseVideo();
    setTimeout(
      function() {
        event.target.playVideo();
      }
      .bind(this),
      200
  );
  setTimeout(
    function() {
      this.setState({ onLoad: true })
    }
    .bind(this),
    2000
);
    
  }
  
  _onEnd(event) {
    event.target.playVideo();
  }

  
  render () {
    
    const videoOptions = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        mute: 1,
        rel: 0,
        showinfo: 0
      }
    }

    return (
      <div className="video-background">
      <div
        className={ this.state.onLoad == true ? 'loadVideoTrue' : 'loadVideoFalse' }  
        style={{ width: '100%', height: '100%', position: 'absolute', zIndex: '99999'}}
      >
        
      </div>
        <div className="video-foreground">
          <YouTube
            onPlay={this.onPlay}
            videoId="MH4pGO-KFu0"
            opts={videoOptions}
            className="video-iframe"  
            onReady={this._onReady}
            onEnd={this._onEnd}
          /> 
        </div>
      </div>
    )
  }
}

export default Video
