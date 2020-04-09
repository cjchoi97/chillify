import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin(e) {
    e.preventDefault();
    const demoUser = {
      email: 'demo@gmail.com',
      password: 'password'
    };
    this.props.processForm(demoUser);
  }
  
  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    const { errors } = this.props;
    const errorsList = errors.map((error, i) => <li key={i}>{error}</li>)

    return (
      <ul>
        {errorsList}
      </ul>
    );
  };

  render() {
    return (
      <div className="login">
        <div className="session-error-messages">{this.renderErrors()}</div>
        {/* some sort of logo header thing*/}
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="login-message">To continue, log in to Chillify.</div>
          <button
            className="demo-button"
            onClick={this.demoLogin}>
            Log In As A Demo User
          </button>

          <div className="line">
            <span className="or">or</span>
          </div>

          <input
            className="input email"
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update('email')}
          />
          <input
            className="input password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update('password')}
          />

          <div className="login-remember">
            <div className="remember">
              <input type="checkbox" />
              <span className="remember-message">Remember me</span>
            </div>
            <button className="session-submit">{this.props.formType}</button>
          </div>

          <div className="line"></div>
          <div className="login-message">Don't have an account?</div>
          {this.props.navLink}
        </form>
      </div>
    );
  }
}

export default LoginForm;