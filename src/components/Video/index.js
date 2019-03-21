import React, {Component} from 'react'
import YouTube from 'react-youtube';

class Disqus extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }

  
  _onReady(event) {
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
        <div className="video-foreground">
          <YouTube
            videoId="Dac4UA7ojbU"
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

export default Disqus
