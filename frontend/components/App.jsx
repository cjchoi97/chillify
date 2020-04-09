import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignupForm from './session/signup_form_container';
import LoginForm from './session/login_form_container';
import Splash from './splash/splash_container';

const App = () => (
  <div>
    {/* <header>
      <Link to="/" className="header-link">
        <h1>Chillify Wassuppppp</h1>
      </Link>
      <GreetingContainer />
    </header> */}
    <Route exact path="/" component={Splash}/>
    <AuthRoute exact path="/login" component={LoginForm} />
    <AuthRoute exact path="/signup" component={SignupForm} />
  </div>
);

export default App;