import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
  
import { useDispatch, useSelector } from 'react-redux';

import { Login } from '../components/auth/Login';
import Dashboard from './Dashboard';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivatesRoutes';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoutes 
                        exact 
                        path="/login" 
                        component={Login}
                        isAuthenticated={ true}
                    />

                    <PrivateRoutes 
                        exact 
                        path="/" 
                        component={ Dashboard } 
                        isAuthenticated={ true }
                    />

                    <Redirect to="/" />   
                </Switch>
            </div>
        </Router>
    )
}