import React from 'react';
import { Route,Redirect } from 'react-router-dom';

 const ProtectedRoute = ({ component:Component, ...rest }) => {
    return (

        <Route {...rest} render={()=> localStorage.getItem('login') ? (
            <Component />

        ):
        (<Redirect to="/" />)
    
    } />
    )
}
export default ProtectedRoute;