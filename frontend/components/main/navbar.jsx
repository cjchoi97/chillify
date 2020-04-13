import React from 'react';
import { connect } from 'react-redux'; 
import { logout } from '../../actions/session_actions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    const { currentUser, logout } = this.props;
    <div className="navbar">
      {/* search bar here */}

      <div className="navbar-dropdown">
        <div className="navbar-arrow">
          <span className="user-preferred-name">{currentUser.preferred_name}</span>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-menu-item">
            <a target="_blank" href="https://github.com/cjchoi97/chillify">
              Github
            </a>
          </li>

          <li className="navbar-menu-item">
            <a target="_blank" href="https://www.linkedin.com/in/chanuchoi/">
              LinkedIn
            </a>
          </li>

          <li className="navbar-menu-item" onClick={logout}>
            Logout
          </li>
        </ul>
      </div>
    </div>
  }
}

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);