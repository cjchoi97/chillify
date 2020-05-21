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
      duration: 0,
      currentTime: 0,
      percentage: 1
    }
    
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    // this.renderMainButton = this.renderMainButton.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
    this.setNewVolume = this.setNewVolume.bind(this);
    this.mute = this.mute.bind(this);
    this.unmute = this.unmute.bind(this);
    this.changeTime = this.changeTime.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.convertTime = this.convertTime.bind(this);
  }

  
  componentDidMount() {
    this.props.fetchSongs();
    this.props.fetchUsers();
    // const player = document.getElementById("player");
    // if (player) {
      // player.addEventListener("timeupdate", this.updateTime)
      // console.log("I have mounted")
    // }

  }
  
  componentDidUpdate(prevProps) {
    const audio = document.getElementById("player");
    if (audio) {
      audio.addEventListener("timeupdate", this.updateTime)
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

  changeTime(e) {
    e.preventDefault();
    this.setState({
      currentTime: e.currentTarget.value
    })
    document.getElementById("player").currentTime = e.currentTarget.value;
  }

  updateTime() {
    const player = document.getElementById("player");
    this.setState({
      currentTime: player.currentTime || 0,
      duration: player.duration || 0
    })
  }

  convertTime(time) {
    if (time === 0) return '0:00';
    if (!time) return null;
    time = Math.floor(time);
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) seconds = `0${seconds}`;
    return `${minutes}:${seconds}`;
  }

  renderButtons(playshow, pauseshow) {
    const audio = document.getElementById("player");
    // if (audio) {
      return (
        <>
          <button className={`play ${playshow}`} onClick={this.play}><i className="far fa-play-circle"></i></button>
          <button className={`pause ${pauseshow}`} onClick={this.pause}><i className="far fa-pause-circle"></i></button>
        </>
      )
    // }
  }

  render() {
    // console.log(this.props);
    const { song, playing } = this.props;
    // console.log(song);
    if (!song) return null;
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
          <div className="album-image">
            <img src={song.album_photo_url}/>
          </div>
          <div className="song-title-artist">
            <Link to={`/albums/${song.album_id}`} className="song-title">{song.title}</Link>
            <p className="artist-name">{song.artist_name}</p>
          </div>
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
          <div className="song-slider">
            <p className="time-progressed">{this.convertTime(this.state.currentTime)}</p>
            <input 
              type="range" 
              min={0}
              max={this.state.duration}
              value={this.state.currentTime}
              onChange={this.changeTime}
              className="song-progress"
            />
            <p className="song-duration">{this.convertTime(this.state.duration)}</p>
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