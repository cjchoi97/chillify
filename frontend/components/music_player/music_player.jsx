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
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.handleRepeat = this.handleRepeat.bind(this);
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
        audio.loop = false;
        audio.src = this.props.song.song_url;
      }
      if (this.props.playing) {
        audio.play();
      } else {
        audio.pause();
      }
    } 
  }
  
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  handleShuffle() {
    if (this.props.shuffle) {
      this.props.toggleShuffle(false);
    } else {
      this.props.toggleShuffle(true);
      const shuffledQueue = this.shuffle(this.props.queue);
      this.props.updateQueue(shuffledQueue);
    }
  }

  handleRepeat() {
    if (this.props.repeat) {
      this.props.toggleRepeat(false);
    } else {
      this.props.toggleRepeat(true);
    }
  }

  previous() {
    const { songHistory, songs, queue, currentSongId } = this.props;
    if (!songHistory.length) return;

    queue.unshift(songs[currentSongId]);

    this.props.updateQueue(queue);
    this.props.updateCurrentSong(songHistory[0]);
    this.props.updateSongHistory(songHistory.slice(1));
    this.props.togglePlay();
  }

  next() {
    const { 
      queue, 
      songHistory, 
      currentSongId, 
      songs, 
      repeat,
      currentItem
     } = this.props;
    if (!queue.length) return;

    songHistory.unshift(songs[currentSongId]);

    let tempQueue = queue;
    
    // console.log(songHistory);
    if (queue.length === 1 && repeat) {
      // console.log("HEREHRERHERH");
      tempQueue = queue.concat(currentItem);
      console.log(tempQueue);
    }

    this.props.updateSongHistory(songHistory)
    this.props.updateCurrentSong(tempQueue[0]);
    this.props.updateQueue(tempQueue.slice(1));
    this.props.togglePlay();
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
            
            <p className="artist-name">
              <Link to={`/artists/${song.artist_id}`}>{song.artist_name}</Link>
            </p>
          </div>
        </div>

        <div className="mp-main">
          <div className="control-buttons">
            <i className={`fas fa-random ${this.props.shuffle === true ? "green" : "notgreen"}`} onClick={this.handleShuffle} ></i>
            <i className="fas fa-step-backward" onClick={this.previous}></i>
            {this.renderButtons(playshow, pauseshow)}
            <i className="fas fa-step-forward" onClick={this.next}></i>
            <i className={`fas fa-retweet ${this.props.repeat === true ? "green" : "notgreen"}`} onClick={this.handleRepeat} ></i>
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
          <audio id="player" onEnded={this.next}>
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