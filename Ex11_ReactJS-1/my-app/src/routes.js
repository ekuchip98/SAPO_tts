import React from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const routes = [
    {
        path : '/',
        exact : true,
        main : ({match}) => <Login match = {match} />
    },
    {
        path : '/dashboard',
        exact : false,
        main : ({match}) => <Dashboard match = {match} />
    },
];

export default routes;