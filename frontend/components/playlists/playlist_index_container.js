import { connect } from 'react-redux';
import CollectionIndex from '../library/collection_index';

const msp = state => {
  return ({
    items: "This is the playlist collection"
  });
}

export default connect(
  msp
)(CollectionIndex);