import React, {useEffect, useState} from 'react';
import {BrowserRouter as Routers, Navigate, Route, Routes} from 'react-router-dom';
import Layout from "../components/Layout";
import {OpenRoutes, VerifyRoutes} from "../utilis/Constants/AllRoutes"
import Loader from "../commonComponent/Loader";
import Error from "../components/404/index"
import {useAppContext} from "../utilis/ContextState/AppContext";
import LocalStorageManager from "../utilis/LocalStorage/LocatStorage";
import {authStatus} from "../utilis/API/Call/apiCall";
import PrivateRoute from "./PrivateRoute"


const Router = () => {
    const [startProject, setStartProject] = useState(false);
    const [startLoader, setStartLoader] = useState(false);
    const {state, dispatch} = useAppContext();
    const checkToken = LocalStorageManager.getLocalStorage('estrade_authorized') === true;


    useEffect(() => {
        const checkToken = LocalStorageManager.getLocalStorage('estrade_authorized') === true;
        const fetchData = async () => {
            const response = await authStatus(dispatch);
            if (response) {
                setStartLoader(false)
                setStartProject(true)
                dispatch({type: 'SET_USER_VERIFY'})
            } else {
                setStartLoader(false)
            }
        };
        if (checkToken) {
            setStartLoader(true)
            fetchData();
        } else if (!startProject) {
            setStartProject(true)
        }
        return () => {
        };
    }, []);

    return (<>
        <Routers>

            {/*Start - main loader*/}
            <Loader load={startLoader}/>
            {/*End - main loader*/}

            <Layout checkToken={checkToken}>
                {startProject && <>
                    {/*Start - Render Error Page if the current path is not found */}
                    <Routes>
                        {OpenRoutes.concat(VerifyRoutes).map(({path, Compo, check}, index, arr) => {
                            return <Route path={path} exect element={<PrivateRoute check={check} arr={arr}><Compo/></PrivateRoute>}/>
                        })}
                        <Route path="/*" exect element={<Error/>}/>
                    </Routes>
                    {/*End - Render Error Page if the current path is not found */}
                </>}
            </Layout>

        </Routers>
    </>);
};

export default Router;
