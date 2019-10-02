import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => {
  return (
    <div>
      <AuthUserContext.Consumer>
        {/* double check if authUser is === leso or college. render Admin for LESO, then College for colleges */}
        {authUser => (authUser ? <AdminNavigation /> : <CollegeNavigation />)}
      </AuthUserContext.Consumer>
    </div>
  );
};

const AdminNavigation = () => {
  return (
    <div>
      <h1>Admin page</h1>
    </div>
  );
};

const CollegeNavigation = () => {
  return (
    <div>
      <h1>College page</h1>
    </div>
  );
};

export default Navigation;
