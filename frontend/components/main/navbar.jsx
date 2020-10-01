import React from 'react';
import { connect } from 'react-redux'; 
import { logout } from '../../actions/session_actions';
import SearchBar from '../library/search/search-bar-container';
import Collection from '../library/collection';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: "closed",
      icon: "",
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.leftComponent = this.leftComponent.bind(this);
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

  leftComponent() {
    if (this.props.url[1] === "search") {
      return(
        <div className="search-bar-container">
          <SearchBar />
        </div>
      )
    } else if (this.props.url[1] === "collection") {
      return (
        <div className="collection-container">
          <Collection collection={this.props.url[2]}/>
        </div>
      )
    }
  }

  render() {
    // console.log(this.props.location.pathname);
    // const path = this.props.location.pathname.split("/");
    
    const { currentUser } = this.props;
    return (
      <div className="navbar">
        <div className="left-nav">
          {this.leftComponent()}
        </div>

        <div className="right-nav">

          <div className="navbar-dropdown-click" onClick={this.toggleDropdown}>
            <h3 className="user-preferred-name">{currentUser.preferred_name}</h3>
            <i className="fas fa-caret-down"></i>
          </div>
          <ul className={`navbar-menu ${this.state.dropdown}`} >
            <li className="navbar-menu-item github">
              <a target="_blank" href="https://github.com/cjchoi97/chillify">
                Github
              </a>
            </li>

            <li className="navbar-menu-item linkedin">
              <a target="_blank" href="https://www.linkedin.com/in/chanuchoi/">
                LinkedIn
              </a>
            </li>

            <li className="navbar-menu-item logout" onClick={this.handleLogout}>
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