import React from 'react';
import { Route,Redirect } from 'react-router-dom';

 const ProtectedRoute = ({ component:Component, ...rest }) => {
    return (

        <Route {...rest} render={()=> localStorage.getItem('login2') ? (
            <Component />

        ):
        (<Redirect to="/login" />)
    
    } />
    )
}
export default ProtectedRoute;