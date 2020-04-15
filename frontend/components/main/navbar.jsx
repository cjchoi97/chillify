import React from 'react';
import { connect } from 'react-redux'; 
import { logout } from '../../actions/session_actions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: "closed"
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    if (this.state.dropdown === "closed") {
      this.setState({ dropdown: "open" });
    } else {
      this.setState({ dropdown: "closed" });
    }
  }

  handleLogout(e) {
    const { logout } = this.props;
    logout().then(() => this.props.history.push("/"));
  }

  render() {

    const { currentUser, logout } = this.props;
    return (
      <div className="navbar">
        {/* search bar here */}

        <div className="navbar-dropdown">
          <div className="navbar-arrow" onClick={this.toggleDropdown}>
            <span className="user-preferred-name">{currentUser.preferred_name}</span>
          </div>
          <ul className={`navbar-menu ${this.state.dropdown}`} >
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

            <li className="navbar-menu-item" onClick={this.handleLogout}>
              Logout
            </li>
          </ul>
        </div>
      </div>
    );
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