import React, {useEffect} from 'react';
import {BrowserRouter as Routers, Navigate, Route, Routes, useLocation} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Layout from "../components/Layout";
import {OpenRoutes, VerifyRoutes} from "../utilis/Constants/AllRoutes"
import Loader from "../commonComponent/Loader";
import Error from "../components/404/index"
import {useAppContext} from "../utilis/ContextState/AppContext";
import {verifyUser} from "../utilis/ContextState/AppActions";
import LocalStorageManager from "../utilis/LocalStorage/LocatStorage";
import {authStatus} from "../utilis/API/Call/apiCall";


const history = createBrowserHistory();

const Router = () => {
    const {state, dispatch} = useAppContext();
    const checkToken = LocalStorageManager.getLocalStorage('estrade_authorized') === true;


    useEffect(() => {
        const fetchData = async () => {
            const response = await authStatus();
            if (response.msg.statusText === 'Unauthorized' || !checkToken) {
                dispatch({type: 'SET_LOADING', payload: true});
                await verifyUser(state, dispatch)
            }
            // if (!state.userVerify && checkToken) {
            //     dispatch({type: 'SET_LOADING', payload: true});
            //     await verifyUser(state, dispatch)
            // }
        };

        if (!checkToken) {
            fetchData();
        }
        return () => {
        };
    }, []);


    const WithToken = ({children}) => {
        return checkToken ? children : <Navigate to="/login"/>
    };

    const WithoutToken = ({children}) => {
        return !checkToken ? children : <Navigate to="/dashboard"/>
    };

    const NoPage = ({children}) => {
        const location = useLocation();
        const check = VerifyRoutes.map(({path}) => path).concat(OpenRoutes.map(({path}) => path)).includes(location.pathname);
        return !check && children
    };

    return (<>
        <Routers history={history}>

            {/*Start - main loader*/}
            <Loader load={state.loading}/>
            {/*End - main loader*/}

            <Layout checkToken={checkToken}>

                {/*Start - Define routes accessible without user verification*/}
                {OpenRoutes.map((({path, Compo, check}, index) => {
                    return (<Routes key={index}>
                        <Route path={path} element={<WithoutToken><Compo/></WithoutToken>}/>
                    </Routes>)
                }))}
                {/*End - Define routes accessible without user verification*/}


                {/*Start - Define routes accessible with user verification*/}
                {VerifyRoutes?.map((({path, Compo, check}, index) => {
                    return (<Routes key={index}>
                        <Route path={path} element={<WithToken><Compo/></WithToken>}/>
                    </Routes>)
                }))}
                {/*End - Define routes accessible with user verification*/}


                {/*Start - Render Error Page if the current path is not found */}
                <Routes>
                    <Route path="/*" exect element={<NoPage><Error/></NoPage>}/>
                </Routes>
                {/*End - Render Error Page if the current path is not found */}

            </Layout>

        </Routers>
    </>);
};

export default Router;
