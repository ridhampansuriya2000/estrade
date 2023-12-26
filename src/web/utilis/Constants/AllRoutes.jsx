import React, {lazy} from 'react';
import Login from "../../components/Login";
import Dashboard from "../../components/Dashboard";
import Account from "../../components/Account";
import Home from "../../components/Home"

// Start - Define routes accessible with user verification
export const VerifyRoutes = [
    {
        path: '/dashboard',
        Compo: Dashboard,
        check: true,
    },
    {
        path: '/account',
        Compo: Account,
        check: true,
    }
];
// End - Define routes accessible with user verification

// Start - Define routes accessible without user verification
export const OpenRoutes = [
    {
        path: '/',
        Compo: Home,
        check: false,
    },
    {
        path: '/login',
        Compo: Login,
        check: false,
    },
];
// End - Define routes accessible without user verification
