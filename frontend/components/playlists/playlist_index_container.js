import { connect } from 'react-redux';
import CollectionIndex from '../library/collection_index';
import { fetchPlaylists } from '../../actions/playlist_actions';


const msp = state => {
  return ({
    items: Object.values(state.entities.playlists)
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