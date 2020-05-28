import React from 'react';
import PlaylistCreate from '../playlists/playlist_create_container';
import AddSongToPlaylist from '../playlists/playlist_add_song_container'
// import {  } from '../../actions/modal_actions';

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { modal, closeModal } = this.props;
    if (!modal) return null;
  
    let component;
    switch (modal) {
      case 'createPlaylist':
        component = <PlaylistCreate />
        break;

      case 'addSongToPlaylist':
        component = <AddSongToPlaylist />
        break;
  
      default:
        return null;
    }
    return (
      <div className="modal-background">
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }
}

export default Modal;