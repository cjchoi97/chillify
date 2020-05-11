import React from 'react';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import PlaylistIndex from '../playlists/playlist_index_container';
import AlbumIndex from '../albums/album_index_container';
import ArtistIndex from '../artists/artist_index_container';
import Search from '../library/search';
import Explore from '../library/explore';
import Sidebar from '../sidebar/sidebar';
import Modal from '../ui/modal_container';
import MusicPlayer from '../music_player/music_player_container';
import PlaylistShow from '../playlists/playlist_show_container';
import AlbumShow from '../albums/album_show_container';

const Main = (props) => {
  // const { logout } = props;
  let page = "main";
  const path = props.location.pathname.split('/');
  const loc = path[1];
  if (loc === "albums" || loc === "playlists") {
    page = "show";
  }
  return (
    <div className="main-page">
      {/* <p>You're on the main page</p>
      <div className='logout-prompt'>
        <button onClick={logout}>Logout</button>
      </div> */}
      <Modal />
      <Sidebar />

      <div className={`main-content ${page}`} >
        <Navbar history={props.history} location={props.location}/>
        <Switch>
          <Route path="/explore" component={Explore} />
          <Route path="/search" component={Search} />
          <Route path="/collection/playlists" component={PlaylistIndex} />
          <Route path="/collection/albums" component={AlbumIndex} />
          <Route path="/playlists/:id" component={PlaylistShow} />
          <Route path="/albums/:id" component={AlbumShow} />
          {/* <Route path="/collection/artists" component={ArtistIndex} /> */}
        </Switch>
      </div>
      <MusicPlayer />
    </div>
  );
}

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  null,
  mdp
)(Main);
