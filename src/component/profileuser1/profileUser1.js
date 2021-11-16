import Typography from '@material-ui/core/Typography';
import { AppBar, Avatar, Button, Chip, Container, IconButton, Link, makeStyles, MenuItem, Popover, Snackbar, Toolbar, } from '@material-ui/core';
//  import Img from './ProfileImg'
import './profile1.css'
import Grid from '@material-ui/core/Grid';
import CreateIcon from '@material-ui/icons/Create';
import TextField from '@material-ui/core/TextField';
import { shadows } from '@mui/system';
import Box from '@mui/material/Box';
import React , {useState} from 'react';
import validateInfo from './validpro';
import validbool from './validbool';



const ProfileUser = props => {
    //initial name most be given from database
    //fname
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fnameinput, setfnameinput] = useState('fati');
    const [fname , Setfname]=useState('fati');
    //lname
    const [lnameinput, setlnameinput] = useState('askari');
    const [lname , Setlname]=useState('askari');
    //username
    const [usernameinput, setusernameinput] = useState('fati1234');
    const [username , Setusername]=useState('fati1234');
    //email
    const [emailinput, setemailinput] = useState('fati@yahoo.com');
    const [email , Setemail]=useState('initial email');

    const [bioinput, setbioinput] = useState('hii');
    const [bio , Setbio]=useState('hi');

    let errors = "";
    if(isSubmitting===true)
    {
        errors=validateInfo({fnameinput,lnameinput,usernameinput,emailinput});
    }
     const check= validbool({fnameinput,lnameinput,usernameinput,emailinput})

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
        if(check)
        {
        Setfname(fnameinput);
        Setlname(lnameinput);
        Setusername(usernameinput);
        Setemail(emailinput);
        Setbio(bioinput);
        }
        setIsSubmitting(true);
    }
    const handleSubmit = async event=> {
        setIsSubmitting(true);        
        event.preventDefault();       
    };

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


            <Grid container>
                <Box
                    sx={{
                        boxShadow: 3,
                        bgcolor: 'background.paper',
                        width :'40%',
                        p:1
                    }}
                >
                    <div className="update7">
                        <form className="form7" onSubmit={handleSubmit}>
                            <TextField
                                id="outlined-helperText"
                                label="Firstname"
                                variant="outlined"
                                style={{marginTop:"3%" , width:"70%"}}
                                onChange={handlefnameChange}
                                value={fnameinput}
                            />
                            <div className="check6">
                                {errors.fnameinput && <p>{errors.fnameinput}!</p>}
                            </div>
                            <TextField
                                id="outlined-helperText"
                                label="Lastname"
                                variant="outlined"
                                style={{marginTop:"3%" , width:"70%"}}
                                onChange={handlelnameChange}
                                value={lnameinput}
                            />
                            <div className="check6">
                                {errors.lnameinput && <p>{errors.lnameinput}!</p>}
                            </div>

                            <TextField
                                id="outlined-helperText"
                                label="Username"
                                variant="outlined"
                                style={{marginTop:"3%" , width:"70%"}}
                                onChange={handleusernameChange}
                                value={usernameinput}
                            />
                            <div className="check6">
                                {errors.usernameinput && <p>{errors.usernameinput}!</p>}
                            </div>

                            <TextField
                                id="outlined-helperText"
                                label="Email"
                                variant="outlined"
                                style={{marginTop:"3%" , width:"70%" }}
                                onChange={handleemailChange}
                                value={emailinput}
                            />
                            <div className="check6">
                                {errors.emailinput && <p>{errors.emailinput}!</p>}
                            </div>

                            <TextField
                                id="outlined-helperText"
                                label="Bio"
                                variant="outlined"
                                style={{marginTop:"3%" , width:"70%" }}
                                onChange={handlebioChange}
                                value={bioinput}
                            />
                            <div className="profileUser1_btnContainer">
                                <Button variant="contained" color="primary" disableElevation
                                        style={{marginTop:"3%" , width:"auto", borderRadius:"15px",  }} onClick={handleClick}>
                                    UpdateProfile
                                </Button>
                            </div>

                        </form>
                    </div>
                </Box>
            </Grid>
        </div>





        </>

     );
}
 
export default ProfileUser;
