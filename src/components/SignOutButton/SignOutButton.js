import React from 'react';
import { withFirebase } from '../../firebase';

const SignOutButton = ({ firebase }) => {
  // eslint-disable-next-line no-unused-expressions
  <button type='button' onClick={firebase.logoutUser}>
    Sign Out
  </button>;
};

export default withFirebase(SignOutButton);
