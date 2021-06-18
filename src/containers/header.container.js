import React from 'react';
import * as ROUTES from '../constants/routes';
import { Header } from '../constants/defaults'
import PropTypes from 'prop-types';


export function HeaderContainer({ children }) {


    return (
        <>
            <Header>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="WatchMe Logo" />
                    <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
                </Header.Frame>
                {children}
            </Header>
        </>
    )

}



HeaderContainer.propTypes = {
    children: PropTypes.any,
};