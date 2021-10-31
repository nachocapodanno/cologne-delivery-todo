import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, roles, ...rest }:any) {
    return (
        <Route {...rest} render={props => {
            if (!localStorage.getItem('token')) {
                // redirect to login page with the return url
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }

            // logged in
            return <Component {...props} />
        }} />
    );
}

export { PrivateRoute };