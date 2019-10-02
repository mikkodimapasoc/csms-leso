import React from 'react';
import LoginFormBase from '../LoginFormBase/LoginFormBase';
import { withFirebase } from '../../firebase';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
const LoginForm = compose(
  withRouter,
  withFirebase
)(LoginFormBase);

export default LoginForm;
