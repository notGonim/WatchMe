import React from 'react';
import { Header } from '../constants/defaults'
import { Profiles } from '../constants/defaults'
import * as ROUTES from '../constants/routes'
import PropTypes from 'prop-types';
import useAuthListener from '../hooks/use-auth-listener';




export function ProfileContainer({ setProfile }) {
  const { user } = useAuthListener()

  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={process.env.PUBLIC_URL + "./images/logo.svg"} alt="watch-me" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who`s watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
            data-testid="user-profile" >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>

    </>
  );
}





ProfileContainer.propTypes = {
  user: PropTypes.any,
  setProfile: PropTypes.any
};

