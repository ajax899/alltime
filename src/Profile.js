import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles=makeStyles((theme)=>({
root:{flexglow:1,
},
}));

export default function Profile(){
    const classes=useStyles();
    //const [anchorEl,setAnchorEl]=React.useState(null);
    //const open=Boolean(anchorEl);

    const user=(localStorage.getItem('user'));
/*
    const handleMenu=(e)=>{
        setAnchorEl(e.currentTarget);
    };
    const handleClose=()=>{
        setAnchorEl(null);
    };

    const handleLogout=()=>{
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        window.location.href="/";
        
    };
*/
    return(
        <div className={classes.root}>
       <p>{user}</p>
        </div>
    )

}
