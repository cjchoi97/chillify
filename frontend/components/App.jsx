import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Main from './main/Main';

import SignupForm from './session/signup_form_container';
import LoginForm from './session/login_form_container';
import Splash from './splash/splash_container';

const App = () => (
  <>
    {/* <header>
      <Link to="/" className="header-link">
        <h1>Chillify Wassuppppp</h1>
      </Link>
      <GreetingContainer />
    </header> */}
    <Switch>  
      {/* path="/explore" component={Main} */}
      <AuthRoute exact path="/login" component={LoginForm} />
      <AuthRoute exact path="/signup" component={SignupForm} />
      <Route path="/" component={Splash}/>
      {/* <ProtectedRoute path="/" component={Main}/> */}
    </Switch>
  </>
);

export default App;