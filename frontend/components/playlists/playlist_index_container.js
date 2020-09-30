import { connect } from 'react-redux';
import CollectionIndex from '../library/collection_index';
import { fetchPlaylists, fetchAuthoredPlaylists } from '../../actions/playlist_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';

const msp = state => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  const { playlists, users } = state.entities;
  // debugger
  // const userPlaylists = Object.values(playlists).length > 0 ? currentUser.playlistIds.map(id => {
  //   return playlists[id]
  // }) : [];
  return ({
    items: playlists,
    currentUser: currentUser, 
    itemType: 'playlists',
    creators: users
  });
}

const mdp = dispatch => {
  return ({
    fetchItems: () => dispatch(fetchPlaylists()),
    fetchOwnedItems: id => dispatch(fetchAuthoredPlaylists(id)),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchCreators: () => dispatch(fetchUsers()),

  });
}

export default connect(
  msp,
  mdp
)(CollectionIndex);