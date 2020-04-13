import { connect } from 'react-redux';
import CollectionIndex from '../library/collection_index';
import { fetchAlbums } from '../../actions/album_actions';

const msp = state => {
  return ({
    items: Object.values(state.entities.albums)
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