import React, {lazy, Suspense, useEffect, useState} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import {AppProvider} from "./web/utilis/ContextState/AppContext";

const Router = lazy(() => import("./web/Router/Router"));


function App() {

    return (
        <>
            <CssBaseline>
                <AppProvider>
                    <Router/>
                </AppProvider>
            </CssBaseline>
        </>
    )
}

export default App
