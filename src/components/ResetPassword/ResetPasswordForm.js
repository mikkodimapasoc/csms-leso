import React from 'react';
import ResetPasswordFormBase from './ResetPasswordFormBase';
import { withFirebase } from '../../firebase';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
const ResetPasswordForm = withFirebase(ResetPasswordFormBase);

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_RESET}>Forgot Password?</Link>
  </p>
);
export { ResetPasswordForm, PasswordForgetLink };
