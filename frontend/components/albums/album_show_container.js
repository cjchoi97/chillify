import { connect } from 'react-redux';
import PlaylistShow from '../playlists/playlist_show';
import { deletePlaylist } from '../../actions/playlist_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchSongs } from '../../actions/song_actions';
// import { fetchUsers } from '../../actions/user_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { 
  togglePlay, 
  togglePause, 
  updateCurrentSong, 
  updateQueue,
  updateCurrentPlayAlbum,
  updateSongHistory,
  updateCurrentPlayAlbumId
} from '../../actions/music_actions'
import { openModal } from '../../actions/modal_actions'

const msp = (state, ownProps) => {
  const album = state.entities.albums[ownProps.match.params.id];
  const { artists, songs } = state.entities

  return ({
    item: album,
    songs: songs,
    creators: artists,
    type: "album",
    playing: state.ui.music.playing,
    currentSongId: state.ui.music.songId,
    repeat: state.ui.music.repeat,
    shuffle: state.ui.music.shuffle,
    songHistory: state.ui.music.songHistory,
    currentUserId: state.session.id,
    currentItemId: state.ui.music.currentItemId,
    currentItemType: state.ui.music.currentItemType,
    path: ownProps.location.pathname.split('/')
  });
}

const mdp = dispatch => {
  return ({
    deleteItem: id => dispatch(deletePlaylist(id)),
    fetchItems: () => dispatch(fetchAlbums()),
    fetchSongs: () => dispatch(fetchSongs()),
    fetchCreators: () => dispatch(fetchArtists()),
    togglePlay: () => dispatch(togglePlay()),
    togglePause: () => dispatch(togglePause()),
    updateCurrentSong: (song) => dispatch(updateCurrentSong(song)),
    openModal: (modal, song) => dispatch(openModal(modal, song)),
    updateQueue: (queue) => dispatch(updateQueue(queue)),
    updateCurrentPlayAlbum: item => dispatch(updateCurrentPlayAlbum(item)),
    updateSongHistory: history => dispatch(updateSongHistory(history)),
    updateCurrentPlayAlbumId: item => dispatch(updateCurrentPlayAlbumId(item))
  })
}

export default connect(
  msp,
  mdp
)(PlaylistShow);

