import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => {
  return (
    <div>
      {/* <ul>
        <li>
          <Link to={ROUTES.LANDING}></Link>
        </li>
        <li>
          <Link to={ROUTES.CREATE_USER}></Link>
        </li>
        <li>
          <Link to={ROUTES.PASSWORD_RESET}></Link>
        </li>
      </ul> */}

      {/* <AuthUserContext.Consumer>
        {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
      </AuthUserContext.Consumer> */}
    </div>
  );
};

export default Navigation;
