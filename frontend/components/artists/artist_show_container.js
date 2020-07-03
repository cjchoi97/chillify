import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { openModal } from '../../actions/modal_actions';
import { addSongToPlaylist } from '../../actions/playlist_song_actions';
import { 
  togglePause, 
  togglePlay,
  updateCurrentSong,
  updateCurrentPlayAlbumId,
  updateCurrentPlayAlbum,
  updateSongHistory,
  updateQueue
 } from '../../actions/music_actions';

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
    artistSongs: artistSongs.filter(song => song !== undefined),
    repeat: state.ui.music.repeat,
    shuffle: state.ui.music.shuffle,
    songHistory: state.ui.music.songHistory,
    currentUserId: state.session.id,
    currentItemId: state.ui.music.currentItemId,
    currentItemType: state.ui.music.currentItemType,
    path: ownProps.location.pathname.split('/')
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
    addSongToPlaylist: (playlistSong) => dispatch(addSongToPlaylist(playlistSong)),
    updateQueue: queue => dispatch(updateQueue(queue)),
    updateCurrentPlayAlbum: item => dispatch(updateCurrentPlayAlbum(item)),
    updateSongHistory: history => dispatch(updateSongHistory(history)),
    updateCurrentPlayAlbumId: item => dispatch(updateCurrentPlayAlbumId(item))
  }
}

export default connect(
  msp,
  mdp
)(ArtistShow);