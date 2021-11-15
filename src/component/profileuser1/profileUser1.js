import React from 'react';
import Typography from '@material-ui/core/Typography';
import { AppBar, Avatar, Button, Chip, Container, IconButton, Link, makeStyles, MenuItem, Popover, Snackbar, Toolbar, } from '@material-ui/core';
//  import Img from './ProfileImg'
import './profile1.css'
import Grid from '@material-ui/core/Grid';
import CreateIcon from '@material-ui/icons/Create';
import TextField from '@material-ui/core/TextField';
import { shadows } from '@mui/system';
import Box from '@mui/material/Box';



const ProfileUser = props => {
    //initial name most be given from database
    //fname
    const [fnameinput, setfnameinput] = React.useState('');
    const [fname , Setfname]=React.useState('initial fname');
    //lname
    const [lnameinput, setlnameinput] = React.useState('');
    const [lname , Setlname]=React.useState('initial lname');
    //username
    const [usernameinput, setusernameinput] = React.useState('');
    const [username , Setusername]=React.useState('initial username');
    //email
    const [emailinput, setemailinput] = React.useState('');
    const [email , Setemail]=React.useState('initial email');

    const [bioinput, setbioinput] = React.useState('');
    const [bio , Setbio]=React.useState('initial bio');

    const handlefnameChange = (event) => {
        setfnameinput(event.target.value);
    }
    const handlelnameChange = (event) => {
        setlnameinput(event.target.value);
    }
    const handleusernameChange = (event) => {
        setusernameinput(event.target.value);
    }
    const handleemailChange = (event) => {
        setemailinput(event.target.value);
    }
    const handlebioChange = (event) => {
        setbioinput(event.target.value);
    }

    const handleClick = () => {
        Setfname(fnameinput);
        Setlname(lnameinput);
        Setusername(usernameinput);
        Setemail(emailinput);
        Setbio(bioinput);
    }

    return ( 
        <>
        <div className="pro7">
            <div className="info_part">
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
                    <div className="info7">
                        <Typography className="info name7" style={{color:"red", marginBottom:"0.3%" , marginTop:"0.25%" , fontSize:"14px"}}>{"Name:"}</Typography>
                        <Typography className="" >{fname} {lname}</Typography>
                        <Typography className="info username7" style={{color:"red", marginBottom:"0.3%" , marginTop:"0.25%" , fontSize:"14px"}} >{"Username:"}</Typography>
                        <Typography className="" >{username}</Typography>
                        <Typography className="info bio7" style={{color:"red", marginBottom:"0.3%", marginTop:"0.25%" , fontSize:"14px" }} >{"Bio:"}</Typography>
                        <Typography className="" >{bio}</Typography>
                    </div>
                </div>
            </div>

            <div className="update7">
                <form className="form7">
                    <TextField
                        id="outlined-helperText"
                        label="Firstname"
                        variant="outlined"
                        style={{marginTop:"3%" , width:"70%"}}
                        onChange={handlefnameChange}
                    />
                    <TextField
                        id="outlined-helperText"
                        label="Lastname"
                        variant="outlined"
                        style={{marginTop:"3%" , width:"70%"}}
                        onChange={handlelnameChange}
                    />

                    <TextField
                        id="outlined-helperText"
                        label="Username"
                        variant="outlined"
                        style={{marginTop:"3%" , width:"70%"}}
                        onChange={handleusernameChange}
                    />

                    <TextField
                        id="outlined-helperText"
                        label="Email"
                        variant="outlined"
                        style={{marginTop:"3%" , width:"70%" }}
                        onChange={handleemailChange}
                    />

                    <TextField
                        id="outlined-helperText"
                        label="Bio"
                        variant="outlined"
                        style={{marginTop:"3%" , width:"70%" }}
                        onChange={handlebioChange}
                    />
                    <div className="profileUser1_btnContainer">
                        <Button variant="contained" color="primary" disableElevation
                                style={{marginTop:"3%" , width:"auto", borderRadius:"15px",  }} onClick={handleClick}>
                            UpdateProfile
                        </Button>
                    </div>

                </form>
            </div>
            </div>
        <div/>



        </>

     );
}
 
export default ProfileUser;