import React, { Component } from 'react';

const INITIAL_STATE = {
  email: '',
  error: null
};

class ResetPasswordFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .passwordReset(email)
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
    const { email, error } = this.state;
    const isInvalid = email === '';
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name='email'
          value={this.state.email}
          onChange={this.onChange}
          type='text'
          placeholder='Email Address'
        />

        <button disabled={isInvalid} type='submit'>
          Reset Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default ResetPasswordFormBase;
