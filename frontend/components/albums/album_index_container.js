import { connect } from 'react-redux';
import CollectionIndex from '../library/collection_index';
import { fetchAlbums } from '../../actions/album_actions';

const msp = state => {
  const currentId = state.session.id;
  const currentUser = state.entities.users[currentId];
  return ({
    items: Object.values(state.entities.albums),
    itemType: 'albums',
    currentUser: currentUser
  });
}

const mdp = dispatch => {
  return({
    fetchItems: () => dispatch(fetchAlbums())
  })
}

export default connect(
  msp,
  mdp
)(CollectionIndex);