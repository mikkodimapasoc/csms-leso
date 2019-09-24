import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes';
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};
class LoginFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .loginUser(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.ADMIN_HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name='email'
          value={email}
          type='text'
          placeholder='Email Address'
          onChange={this.onChange}
        />
        <input
          name='password'
          value={password}
          type='text'
          placeholder='Password'
          onChange={this.onChange}
        />
        <button disabled={isInvalid} type='submit'>
          Sign In
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default LoginFormBase;
