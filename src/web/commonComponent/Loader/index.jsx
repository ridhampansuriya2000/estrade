import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {useAppContext} from "../../utilis/ContextState/AppContext";

const Loader = ({load}) => {
    const {state, dispatch} = useAppContext();
    return (
        <>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={load || state.loading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>

        </>
    );
};

export default Loader;
