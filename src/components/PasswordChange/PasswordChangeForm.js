import React, { Component } from 'react';
import { withFirebase } from '../../firebase';

const INITIAL_STATE = {
  password: '',
  passwordTwo: '',
  error: null
};
class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { password } = this.state;
    this.props.firebase
      .changePassword(password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { password, passwordTwo, error } = this.state;
    const isInvalid = password !== passwordTwo || password === '';
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name='password'
          value={password}
          onChange={this.onChange}
          type='password'
          placeholder='New Password'
        />
        <input
          name='passwordTwo'
          value={passwordTwo}
          onChange={this.onChange}
          type='password'
          placeholder='Confirm New Password'
        />
        <button disabled={isInvalid} type='submit'>
          Reset Password
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withFirebase(PasswordChangeForm);
