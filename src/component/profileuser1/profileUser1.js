import React from 'react';
import Typography from '@material-ui/core/Typography';
import { AppBar, Avatar, Button, Chip, Container, IconButton, Link, makeStyles, MenuItem, Popover, Snackbar, Toolbar, } from '@material-ui/core';
//  import Img from './ProfileImg'
import './profile1.css'
import Grid from '@material-ui/core/Grid';
import CreateIcon from '@material-ui/icons/Create';
import TextField from '@material-ui/core/TextField';



const ProfileUser = () => {
    return ( 
        <>
        <div className="pro7">

            <div className="img7"></div>
            <div className="btnedit">
                <Chip
                icon={<CreateIcon />}        
                clickable
                size="small"
                color="secondary"
                label="Edit"
                variant="default"
                />
            </div>
            <div className="info7">
                <Typography className="info name7" style={{color:"red", marginBottom:"0.3%" , marginTop:"0.25%" , fontSize:"14px"}}>{"Name:"}</Typography>
                <Typography className="" >Fatemeh Askari</Typography>
                <Typography className="info username7" style={{color:"red", marginBottom:"0.3%" , marginTop:"0.25%" , fontSize:"14px"}} >{"Username:"}</Typography>
                <Typography className="" >@fati1234</Typography>
                <Typography className="info bio7" style={{color:"red", marginBottom:"0.3%", marginTop:"0.25%" , fontSize:"14px" }} >{"Bio:"}</Typography>
                <Typography className="" >Stusent IUST</Typography>
            </div>
        <div className="update7">
            <form className="form7">
                <TextField
                id="outlined-helperText"
                label="Firstname"
                variant="outlined"
                style={{marginTop:"3%" , width:"70%"}}
                />
                <TextField
                id="outlined-helperText"
                label="Lastname"
                variant="outlined"
                style={{marginTop:"3%" , width:"70%"}}
                />

                <TextField
                id="outlined-helperText"
                label="Username"
                variant="outlined"
                style={{marginTop:"3%" , width:"70%"}}
                />

                <TextField
                id="outlined-helperText"
                label="Email"
                variant="outlined"
                style={{marginTop:"3%" , width:"70%" }}
                />
                
                <TextField
                id="outlined-helperText"
                label="Bio"
                variant="outlined"
                style={{marginTop:"3%" , width:"70%" }}
                />
             <Button variant="contained" color="primary" disableElevation
              style={{marginTop:"3%" , width:"20%", borderRadius:"15px", marginLeft:"23%" }}>
              UpdateProfile
             </Button>
            </form>
        </div>             
        </div> 

        </>

     );
}
 
export default ProfileUser;