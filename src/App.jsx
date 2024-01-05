import React, {lazy} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import './App.css'
import {AppProvider} from "./web/utilis/ContextState/AppContext";
import {THEME} from "./web/utilis/Constants/Theme"
import Router from "./web/Router/Router"


function App() {

    return (
        <>
            <ThemeProvider theme={THEME}>
                <CssBaseline>
                    <AppProvider>
                        <Router/>
                    </AppProvider>
                </CssBaseline>
            </ThemeProvider>
        </>
    )
}

export default App
