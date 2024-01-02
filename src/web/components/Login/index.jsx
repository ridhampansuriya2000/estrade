import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import LoginController from "./LoginController"

const Login = () => {
    const {state, dispatch, navigate, loginUser} = LoginController();
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            alignItems: 'center'
        }}>
            <Box sx={{textAlign: 'center'}}>
                <Typography variant="h3"> Please LogIn First</Typography>
                <Button  variant="contained" sx={{mt:2}} onClick={() => {
                    loginUser()
                }}>Login
                </Button>
            </Box>
        </div>
    );
};

export default Login;
