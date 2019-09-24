import React from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../../firebase';
import * as Routes from '../../../constants/routes';
import CreateUserForm from '../../../components/CreateUserForm/CreateUserForm';

const CreateUserPage = () => {
  return (
    <div>
      <h1>Create User</h1>
      <CreateUserForm />
    </div>
  );
};
