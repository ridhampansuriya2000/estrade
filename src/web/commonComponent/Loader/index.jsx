import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {useAppContext} from "../../utilis/ContextState/AppContext";
import styles from "./loader.module.css"

const Loader = ({load}) => {
    const {state, dispatch} = useAppContext();
    return (
        <>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#000000b0'}}
                open={load || state.loading}
                className={load || state.loading ? styles.openArrow : styles.closeArrow}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>

        </>
    );
};

export default Loader;
