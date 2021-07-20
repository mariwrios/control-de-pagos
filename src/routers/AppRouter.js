import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
  
import { Login } from '../components/auth/Login';
import Dashboard from './Dashboard';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivatesRoutes';
import { useSelector } from 'react-redux';

export const AppRouter = () => {
    const {login} = useSelector(state => state.auth)

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoutes 
                        exact 
                        path="/login" 
                        component={Login}
                        isAuthenticated={true}
                    />

                    <PrivateRoutes 
                        exact 
                        path="/" 
                        component={ Dashboard } 
                        isAuthenticated={true}
                    />

                    <Redirect to="/" />   
                </Switch>
            </div>
        </Router>
    )
}