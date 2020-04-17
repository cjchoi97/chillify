import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { deletePlaylist, fetchPlaylists } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';
import { fetchUsers } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  const playlist = state.entities.playlists[ownProps.match.params.id];

  // debugger
  // const creator = state.entities.users[playlist.user_id];
  const { users, songs } = state.entities
  // const playlistSongs = songs.length > 0 ? playlist.songIds.map(id => {
  //   return songs[id]
  // }) : [];

  return ({
    item: playlist,
    // filteredSongs: playlistSongs,
    songs: songs,
    creators: users
    // creator: creator,
  });
}

const mdp = dispatch => {
  return ({
    deleteItem: id => dispatch(deletePlaylist(id)),
    fetchItems: () => dispatch(fetchPlaylists()),
    fetchSongs: () => dispatch(fetchSongs()),
    fetchCreators: () => dispatch(fetchUsers())
  })
}

export default connect(
  msp,
  mdp
)(PlaylistShow);

