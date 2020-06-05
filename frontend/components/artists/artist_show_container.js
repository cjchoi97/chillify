import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { openModal } from '../../actions/modal_actions';
import { 
  togglePause, 
  togglePlay,
  updateCurrentSong } from '../../actions/music_actions';

const msp = (state, ownProps) => {
  const artist = state.entities.playlists[ownProps.match.params.id];
  const { songs, albums } = state.entities;

  return {
    artist: artist,
    songs: songs,
    albums: albums
  }
}

const mdp = dispatch => {
  return {
    fetchArtists: () => dispatch(fetchArtists()),
    fetchAlbums: () => dispatch(fetchAlbums()),
    openModal: (modal, song) => dispatch(openModal(modal, song)),
    togglePause: () => dispatch(togglePause()),
    togglePlay: () => dispatch(togglePlay()),
    updateCurrentSong: (song) => dispatch(updateCurrentSong(song))
  }
}

export default connect(
  msp,
  mdp
)(ArtistShow);