import React from 'react';
import LoginController from "./LoginController"

const Login = () => {
    const {state, dispatch, navigate,loginUser} = LoginController();
    return (
        <div>
            <button onClick={() => {
                loginUser()
            }}>Login
            </button>
            Login
        </div>
    );
};

export default Login;
