import React from 'react';
import { connect } from 'react-redux'; 
import { logout } from '../../actions/session_actions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    <div className="navbar">
      {/* search bar here */}
      <div className="navbar-dropdown">
        
      </div>
    </div>
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})



export default connect(
  null,
  mapDispatchToProps
)(Navbar);