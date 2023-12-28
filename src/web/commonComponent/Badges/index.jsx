import React from "react";
import {Badge, Box} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    customBadge: {
        backgroundColor: "#d70e00",
        color: "black",
    },
}));

const Badges = ({icon ,...rest}) => {
    const classes = useStyles();

    return (
        <>
            <Badge {...rest} overlap="circular" variant="dot"
                   classes={{badge: classes.customBadge}}
                   className={classes.margin}
                   badgeContent='. '
            >
                <Box component="span" sx={{...newStyle.notificationInfo}}>
                    {icon}
                </Box>
            </Badge>
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
