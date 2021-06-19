import { Redirect, Route } from 'react-router'
import * as ROUTES from '../constants/routes'
import React from 'react'
import PropTypes from 'prop-types';


export default function ProtectedRoute({ user, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (user) {
                    return React.cloneElement(children, { user });
                }

                if (!user) {
                    return (
                        <Redirect
                            to={{
                                pathname: ROUTES.SIGN_IN,
                                state: { from: location }
                            }}
                        />
                    );
                }
                return null;
            }}
        />
    )
}


ProtectedRoute.propTypes = {
    children: PropTypes.any,
    user: PropTypes.any,
};