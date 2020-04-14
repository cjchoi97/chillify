import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        {/* logo */}

        <div className="sidebar-nav-links">
          <Link to="/explore">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/collection/playlists">Library</Link>
          {/* change above to be playlists later! */}
        </div>

        <div className="create-playlist">

        </div>

        <div className="sidebar-playlists">

        </div>
      </div>
    );
  }
}

export default Sidebar;