import { connect } from 'react-redux';
import CollectionIndex from '../library/collection_index';
import { fetchPlaylists } from '../../actions/playlist_actions';


const msp = state => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  const { playlists } = state.entities;
  const userPlaylists = Object.values(playlists).length > 0 ? currentUser.playlistIds.map(id => {
    return playlists[id]
  }) : [];
  return ({
    items: userPlaylists
  });
}

const mdp = dispatch => {
  return ({
    fetchItems: () => dispatch(fetchPlaylists())
  });
}

export default connect(
  msp,
  mdp
)(CollectionIndex);