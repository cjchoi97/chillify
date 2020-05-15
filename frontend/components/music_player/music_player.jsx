import React from 'react';
import { Link } from 'react-router-dom';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      play: "show",
      pause: "dontshow"
    }
    
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.renderMainButton = this.renderMainButton.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
  }

  play(e) {
    // e.preventDefault();
    document.getElementById('player').play();
    // this.props.playing = true;
    this.props.togglePlay();
    // this.setState({
    //   play: "dontshow",
    //   pause: "show"
    // });
    // e.preventDefault();

  }

  pause(e) {
    // e.preventDefault();
    document.getElementById('player').pause();
    // this.props.playing = false;
    this.props.togglePause();
    // this.setState({
    //   play: "show",
    //   pause: "dontshow"
    // });
    // e.preventDefault();
  }

  componentDidMount() {
    this.props.fetchSongs();
    this.props.fetchUsers();
  }

  componentDidUpdate(prevProps) {
    const audio = document.getElementById("player");
    if (audio) {
      if (prevProps.currentSongId !== this.props.song.id) {
        // console.log("changed song");
        audio.src = this.props.song.song_url;
      }
      // console.log(this.props.playing);
      if (this.props.playing) {
        audio.play();
      } else {
        audio.pause();
      }

    }

  }

  renderButtons(playshow, pauseshow) {
    const audio = document.getElementById("player");
    if (audio) {
      return (
        <>
          <button className={`play ${playshow}`} onClick={this.play}><i className="far fa-play-circle"></i></button>
          <button className={`pause ${pauseshow}`} onClick={this.pause}><i className="far fa-pause-circle"></i></button>
          {/* <button onClick="document.getElementById('player').volume += 0.1">Vol +</button>
          <button onClick="document.getElementById('player').volume -= 0.1">Vol -</button> */}
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
            {/* <img
              src="https://chillify-aa-dev.s3.amazonaws.com/previous.png"
              className="song-select"
              />
              {this.renderMainButton()}
              <img
              src="https://chillify-aa-dev.s3.amazonaws.com/next.png"
              className="song-select"
            /> */}
          </div>
          <audio id="player"
            controls
            >
            <source type="audio/mp3"/>
          </audio>
        </div>

        <div className="volume-control">
        </div>

        {/* <audio
          src="https://chillify-aa-dev.s3.amazonaws.com/music/Towkio+-+Heaven+Only+Knows+(ft.+Chance+The+Rapper%2C+Lido+%26+Eryn+Allen+Kane).mp3"
          ref="player"
          autoPlay={playing}>
        </audio> */}
      </div>
    )
  }
}

export default MusicPlayer;