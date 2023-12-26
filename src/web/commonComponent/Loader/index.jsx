import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = ({load}) => {
    return (
        <>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={load}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>

        </>
    );
};

export default Loader;
