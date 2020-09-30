import { connect } from 'react-redux';
import CollectionIndex from '../library/collection_index';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchArtists } from '../../actions/artist_actions';

const msp = state => {
  const currentId = state.session.id;
  const currentUser = state.entities.users[currentId];
  const { artists, albums } = state.entities;
  return ({
    items: albums,
    itemType: 'albums',
    currentUser: currentUser,
    creators: artists
  });
}

const mdp = dispatch => {
  return({
    fetchItems: () => dispatch(fetchAlbums()),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchCreators: () => dispatch(fetchArtists())
  })
}

export default connect(
  msp,
  mdp
)(CollectionIndex);