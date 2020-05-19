import React from 'react';
import { Link } from 'react-router-dom';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      play: "show",
      pause: "dontshow",
      mute: "dontshow",
      quiet: "dontshow",
      loud: "show",
      percentage: 1
    }
    
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.renderMainButton = this.renderMainButton.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
    this.setNewVolume = this.setNewVolume.bind(this);
    this.mute = this.mute.bind(this);
    this.unmute = this.unmute.bind(this);
  }

  
  componentDidMount() {
    this.props.fetchSongs();
    this.props.fetchUsers();
  }
  
  componentDidUpdate(prevProps) {
    const audio = document.getElementById("player");
    if (audio) {
      if (prevProps.currentSongId !== this.props.song.id) {
        audio.src = this.props.song.song_url;
      }
      if (this.props.playing) {
        audio.play();
      } else {
        audio.pause();
      }
    } 
  }
  
  play(e) {
    document.getElementById('player').play();
    this.props.togglePlay();
  }

  pause(e) {
    document.getElementById('player').pause();
    this.props.togglePause();
  }

  mute() {
    document.getElementById("player").volume = 0;
    document.getElementById("volume-status").style.width = "0px";
    // document.getElementById("volume-status").style.width = 0 + "px";
    this.setState({
      mute: "show",
      quiet: "dontshow",
      loud: "dontshow",
    })
  }

  unmute() {
    document.getElementById("player").volume = this.state.percentage;
    const volumeMeter = document.getElementById("volume-meter");
    const meterWidth = volumeMeter.offsetWidth;
    const percentVolume = this.state.percentage / 1;
    const volumeSlider = meterWidth * percentVolume;
    document.getElementById("volume-status").style.width = Math.round(volumeSlider) + "px";
    
    if (this.state.percentage <= .5 && this.state.percentage != 0) {
      this.setState({
        mute:"dontshow",
        quiet: "show",
        loud: "dontshow",
      })
    } else if (this.state.percentage > .5 && this.state.percentage <= 1) {
      this.setState({
        mute:"dontshow",
        quiet: "dontshow",
        loud: "show",
      })
    } else {
      this.setState({
        mute: "show",
        quiet: "dontshow",
        loud: "dontshow",
      })
    }
  }

  setNewVolume(e) {
    const volumeMeter = document.getElementById("volume-meter");
    const meterWidth = volumeMeter.offsetWidth;
    const evt = window.event ? event : e;
    const clickLoc = evt.layerX - volumeMeter.offsetLeft;

    const percentage = (clickLoc/meterWidth);

    if (percentage <= .5 && percentage != 0) {
      this.setState({
        mute:"dontshow",
        quiet: "show",
        loud: "dontshow",
        percentage: percentage
        // percentage: percentage
      })
    } else if (percentage > .5 && percentage <= 1) {
      this.setState({
        mute:"dontshow",
        quiet: "dontshow",
        loud: "show",
        percentage: percentage
      })
    } else {
      this.setState({
        mute: "show",
        quiet: "dontshow",
        loud: "dontshow",
        percentage: percentage
      })
    }

    const song = document.getElementById("player");

    song.volume = percentage;

    const percentVolume = song.volume / 1;
    const volumeSlider = meterWidth * percentVolume;
    document.getElementById("volume-status").style.width = Math.round(volumeSlider) + "px";
  }
  renderButtons(playshow, pauseshow) {
    const audio = document.getElementById("player");
    if (audio) {
      return (
        <>
          <button className={`play ${playshow}`} onClick={this.play}><i className="far fa-play-circle"></i></button>
          <button className={`pause ${pauseshow}`} onClick={this.pause}><i className="far fa-pause-circle"></i></button>
        </>
      )
    }
  }

  renderMainButton() {
    let src;
    if (this.props.playing) {
      src = "https://chillify-aa-dev.s3.amazonaws.com/pausebutton.png"
      return (
        <img
          onClick={this.pause}
          src={src}
          className="main-button"
        />
      )
    } else {
      src = "https://chillify-aa-dev.s3.amazonaws.com/playbutton.png"
      return (
        <img
          onClick={this.play}
          src={src}
          className="main-button"
        />
      )
    }
  }

  render() {
    // console.log(this.props);
    const { song, playing, artist } = this.props
    let playshow;
    let pauseshow;
    if (playing === false) {
      playshow = "show";
      pauseshow = "dontshow";
    } else {
      playshow = "dontshow";
      pauseshow = "show";
    }
    return (
      <div className="music-player">
        <div className="song-display">
          {/* song name */}
          {/* artist name */}
          {/* album cover */}
          {/* links to show pages */}
          {/* favorite button */}
        </div>

        <div className="mp-main">
          <div className="control-buttons">
            <i className="fas fa-random"></i>
            <i className="fas fa-step-backward"></i>
            {this.renderButtons(playshow, pauseshow)}
            <i className="fas fa-step-forward"></i>
            <i className="fas fa-retweet"></i>
          </div>
          <div id="song-slider">

          </div>
          <audio id="player">
            <source type="audio/mp3"/>
          </audio>
        </div>

        <div className="right-side">
          <div className="volume">
            <div className="volume-icon">
              <i className={`fas fa-volume-mute ${this.state.mute}`} tabIndex="1" onClick={this.unmute}></i>
              <i className={`fas fa-volume-down ${this.state.quiet}`} tabIndex="1" onClick={this.mute}></i>
              <i className={`fas fa-volume-up ${this.state.loud}`} tabIndex="1" onClick={this.mute}></i>

            </div>
            <div className="progress-bar" onClick={this.setNewVolume}>
              <div id="volume-meter">
                <div id="volume-status">
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MusicPlayer;