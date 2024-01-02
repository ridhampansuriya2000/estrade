import React from "react";
import { Box} from "@mui/material";
import {makeStyles} from "@mui/styles";


const Badges = ({icon, ...rest}) => {


    return (
        <>
                <Box  {...rest} component="span" sx={{...newStyle.notificationInfo}}>
                    {icon}
                </Box>
        </>
    );
}
export default Badges;
const newStyle = {
    notificationInfo: {
        backgroundColor: "#eff4fb",
        display: 'flex',
        alignItems: 'center',
        borderColor: '#e5e5e5',
        width: 40, height: 40,
        borderRadius: '50%',
        justifyContent: 'center',
    },
};
