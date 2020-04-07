import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { logout, currentUser } = this.props;

    if (currentUser) {
      return (
        <div className='greeting'>
          <h2>Welcome {currentUser.username}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className='greeting'>
          <h3>Not logged in!</h3>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Log in</Link>
        </div>
      );
    }
  }
}

export default Greeting;