import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
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
          {/* demo log in button */}
          <input
            className="input email"
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update('email')}
          />
          <br/>
          <input
            className="input password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update('password')}
          />
          <br/>
          <input className="session-submit" type="submit" value={this.props.formType}/>
        </form>
      </div>
    );
  }
}

export default LoginForm;