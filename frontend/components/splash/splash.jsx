import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import Main from '../main/Main';

const Splash = ({ currentUser, logout, demoLogin }) => {
  const sessionLinks = () => {
    const demoUser = { email: 'demo@gmail.com', password: 'password' };

    return (
      <div className="home">
        <header className="main-header">
          <nav className="main-nav">
            {/* logo goes here */}
            <div>
              <Link to="/signup" className="main-nav-link">Sign Up</Link>
              <Link to="/login" className="main-nav-link">Login</Link>
            </div>
          </nav>
        </header>

        <main className="home-main">
          <h1 className="home-text">Music for everyone.</h1>
          <h3 className="home-sub-text">Millions of songs. No credit card needed.</h3>
          <button
            className="session-submit"
            onClick={() => demoLogin(demoUser)}
          >
            Log In as A Demo User
          </button>
        </main>
      </div>
    )
  };

  const welcomeMessage = () => {
    return (
      // <Redirect to="/explore" />
      <Main />
      // <div className='logout-prompt'>
      //   <h1>Welcome {currentUser.username}</h1>
      //   <button onClick={logout}>Logout</button>
      // </div>
    )
  };
  return currentUser ? welcomeMessage() : sessionLinks();
};


const mapDispatchToProps = dispatch => {
  return {
    demoLogin: demoUser => dispatch(login(demoUser))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Splash);

// export default Splash;