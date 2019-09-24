/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from 'react';
import { withFirebase } from '../../firebase/index';
import { withRouter } from 'react-router-dom';
import CreateUserFormBase from '../CreateUserFormBase/CreateUserFormBase';
import { compose } from 'recompose';

const CreateUserForm = compose(
  withRouter,
  withFirebase
)(CreateUserFormBase);

export { CreateUserForm };
