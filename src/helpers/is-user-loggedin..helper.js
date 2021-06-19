import { Redirect, Route } from 'react-router'
import React from 'react'
import PropTypes from 'prop-types';



export default function IsUserLoggedIn({ user, loggedInPath, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (!user) {
                    return children
                }

                if (user) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath,
                                state: { from: location }
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    );
}


IsUserLoggedIn.propTypes = {
    children: PropTypes.any,
    user: PropTypes.any,
    loggedInPath: PropTypes.any,
};