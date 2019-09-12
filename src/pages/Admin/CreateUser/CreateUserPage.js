/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import firebase from '../../../firebase/firebase.utils';

const createUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');
  const [error, setError] = useState('');

  const register = event => {
    try {
      firebase.loginUser(email, password).then(authUser => {
        setEmail('');
        setPasswordTwo('');
        setPassword('');
      });
    } catch (error) {
      setError(error);
    }
    event.preventDefault();
  };

  const isInvalid = password !== passwordTwo || password === '' || email === '';

  return (
    <div>
      <form onSubmit={register}>
        <input
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          type='text'
          placeholder='college name'
        />
        <input
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='text'
          placeholder='college name'
        />
        <input
          name='passwordTwo'
          value={passwordTwo}
          onChange={e => setPasswordTwo(e.target.value)}
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
};

export default createUser;
