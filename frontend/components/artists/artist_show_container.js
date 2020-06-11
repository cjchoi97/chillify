import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { openModal } from '../../actions/modal_actions';
import { addSongToPlaylist } from '../../actions/playlist_song_actions';
import { 
  togglePause, 
  togglePlay,
  updateCurrentSong } from '../../actions/music_actions';

const msp = (state, ownProps) => {
  const artist = state.entities.artists[ownProps.match.params.id] || {};
  const { songs, albums } = state.entities;
  const artistSongs = artist.songIds ? artist.songIds.map(id => songs[id]) : []; 

  return {
    playing: state.ui.music.playing,
    currentSongId: state.ui.music.songId,
    artist,
    songs,
    albums,
    artistSongs: artistSongs.filter(song => song !== undefined)
  }
}

const mdp = dispatch => {
  return {
    fetchArtists: () => dispatch(fetchArtists()),
    fetchAlbums: () => dispatch(fetchAlbums()),
    openModal: (modal, song) => dispatch(openModal(modal, song)),
    togglePause: () => dispatch(togglePause()),
    togglePlay: () => dispatch(togglePlay()),
    updateCurrentSong: (song) => dispatch(updateCurrentSong(song)),
    addSongToPlaylist: (playlistSong) => dispatch(addSongToPlaylist(playlistSong))
  }
}

export default connect(
  msp,
  mdp
)(ArtistShow);