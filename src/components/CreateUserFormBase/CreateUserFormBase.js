import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  passwordTwo: '',
  error: null
};
class CreateUserFormBase extends Component {
  state = [{ ...INITIAL_STATE }];

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  register = event => {
    const { username, email, password } = this.state;
    this.props.firebase
      .registerUser(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.ADMIN_HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  render() {
    const { username, email, password, passwordTwo, error } = this.state;

    const isInvalid =
      password !== passwordTwo || password === '' || email === '';
    return (
      <div>
        <form onSubmit={this.register}>
          <input
            name='email'
            value={email}
            onChange={this.onChange}
            type='text'
            placeholder='college name'
          />
          <input
            name='password'
            value={password}
            onChange={this.onChange}
            type='text'
            placeholder='college name'
          />
          <input
            name='passwordTwo'
            value={passwordTwo}
            onChange={this.onChange}
            type='text'
            placeholder='college name'
          />
          <button disabled={isInvalid} type='submit'>
            Create User
          </button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}
