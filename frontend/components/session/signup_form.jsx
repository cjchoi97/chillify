import React from 'react';

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      confirmEmail: '',
      password: '',
      preferredName: '',
      month: '',
      year: '',
      day: '',
      gender: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin(e) {
    e.preventDefault();
    const demoUser = {
      email: 'a',
      password: 'password'
    };

    this.props.login(demoUser);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm({
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
      preferred_name: this.state.preferredName,
      username: "testing",
      birth_date: "19971007"
    });
  }

  update(type) {
    return e => this.setState({ [type]: e.currentTarget.value });
  }

  renderErrors() {
    const { errors } = this.props;
    const errorList = errors.map((error, i) => <li key={i}>{error}</li>)

    return (
      <ul>
        {errorList}
      </ul>
    );
  };

  confirmEmailErrors() {
    const { email, confirmEmail } = this.state;
    if (email && confirmEmail && email.slice(0, confirmEmail.length) != confirmEmail) {
      return <div className="session-error-messages">Email addresses don't match</div>
    }
  };

  dayErrors() {
    if (this.state.day === '') return null;
    const day = parseInt(this.state.day);
    if (!day || day < 0 || day > 31) {
      return <div className="session-error-messages">Please enter a valid day</div>
    };
  }

  yearErrors() {
    if (this.state.year === '') return null;
    const year = parseInt(this.state.year);

    if (year) {
      if (year < 1900 || year > 2020) {
        return <div className="session-error-messages">You don't exist</div>
      }
    } else {
      return <div className="session-error-messages">Please enter a valid year</div>
    }
  }

  render() {
    return (
      <div className="signup">
        {/* some sort of logo header thing*/}

        <form className="signup-form" onSubmit={this.handleSubmit}>

          <button
            className="demo-button"
            onClick={this.demoLogin}>
            Log In As A Demo User
          </button>

          <div className="line">
            <span className="or">or</span>
          </div>

          <div className="signup-prompt">Sign up with your email address</div>
          <div className="session-error-messages">{this.renderErrors()}</div>

          <input
            className="input email"
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update('email')}
          />

          <input
            className="input confirm-email"
            type="text"
            placeholder="Confirm email"
            value={this.state.confirmEmail}
            onChange={this.update('confirmEmail')}
          />
          {this.confirmEmailErrors()}

          <input
            className="input password-input"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update('password')}
          />

          <input
            className="input name-input"
            type="text"
            placeholder="What should we call you?"
            onChange={this.update('preferredName')}
          />

          <div className="date-of-birth-header">Date of Birth</div>
          <div className="date-of-birth">
            <select className="month" placeholder="Month">
              <option disabled>Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>

            <input
              className="day"
              type="text"
              placeholder="Day"
              value={this.state.day}
              onChange={this.update('day')}
            />

            <input
              className="year"
              type="text"
              placeholder="Year"
              value={this.state.year}
              onChange={this.update('year')}
            />
          </div>
          {this.dayErrors()}
          {this.yearErrors()}

          <div className="radio-buttons">
            <input 
              type="radio" 
              name="gender" 
              value="male" 
              onChange={this.update('gender')}
            />
            <span className="radio-text">Male</span>

            <input 
              type="radio" 
              name="gender" 
              value="female" 
              onChange={this.update('gender')}
            />
            <span className="radio-text">Female</span>

            <input 
              type="radio" 
              name="gender" 
              value="nonbinary" 
              onChange={this.update('gender')}
            />
            <span className="radio-text">Non-binary</span>
          </div>
          <input className="session-submit" type="submit" value={this.props.formType} />
        </form>

        <div className="login-instead">Already have an account? {this.props.navLink}</div>
      </div>
    )
  }
}