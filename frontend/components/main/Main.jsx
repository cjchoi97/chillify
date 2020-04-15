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

const Main = (props) => {
  // const { logout } = props;
  return (
    <div className="main-page">
      {/* <p>You're on the main page</p>
      <div className='logout-prompt'>
        <button onClick={logout}>Logout</button>
      </div> */}

      <Sidebar />

      <div className="main-content">
        <Navbar history={props.history}/>
        <Switch>
          <Route path="/explore" component={Explore} />
          <Route path="/search" component={Search} />
          {/* <Route path="/explore" component={Radio} /> */}
          <Route path="/collection/playlists" component={PlaylistIndex} />
          <Route path="/collection/albums" component={AlbumIndex} />
          {/* <Route path="/collection/artists" component={ArtistIndex} /> */}
        </Switch>
      </div>
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
