import Typography from '@material-ui/core/Typography';
//import { AppBar, Avatar, Button, Chip, Container, IconButton, Link, makeStyles, MenuItem, Popover, Snackbar, Toolbar, } from '@material-ui/core';
import {Button} from "@mui/material";
import '../profileuser1/profile1.css'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import React , {useState} from 'react';
import validateInfo from './validpro';
import validbool from './validbool';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProfileImg from '../profile-user/ProfileImg';
import Blog from "../Blog/Blog";
import CV from "../CV/CV";
//import Avatar from '@mui/material/Avatar';
//import TabContext from '@mui/lab/TabContext';
//import TabList from '@mui/lab/TabList';
//import TabPanel from '@mui/lab/TabPanel';
//import Stack from '@mui/material/Stack';
//import { shadows } from '@mui/system';
//import CreateIcon from '@material-ui/icons/Create';
//import Img from './ProfileImg'



const ProfileCompany = props => {
    const [ShowCV,SetShowCV]=useState(false);
    const [Showprofile,SetShowprofile]=useState(true);
    const [ShowBlog,SetShowBlog]=useState(false);
    //initial name most be given from database
    //const [condition,Setcondition]=useState('Blog');
    const [isSubmitting, setIsSubmitting] = useState(false);
    //fname
    const [Cnameinput, setCnameinput] = useState('fati');
    const [Cname , SetCname]=useState('fati');
    //lname
    //username
    const [usernameinput, setusernameinput] = useState('fati1234');
    const [username , Setusername]=useState('fati1234');
    //email
    const [emailinput, setemailinput] = useState('fati@yahoo.com');
    const [email , Setemail]=useState('initial email');

    const [bioinput, setbioinput] = useState('hii');
    const [bio , Setbio]=useState('hi');

    const [value, setValue] = React.useState('one');

    let errors = "";
    if(isSubmitting===true)
    {
        errors=validateInfo({Cnameinput,usernameinput,emailinput});
    }
     const check= validbool({Cnameinput,usernameinput,emailinput})

    const handleCnameChange = (event) => {
        setCnameinput(event.target.value);
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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const ChangtoCV =()=>{
        SetShowCV(true);
        SetShowBlog(false);
        SetShowprofile(false);
    }
    const Changtoprofile =()=>{
        SetShowCV(false);
        SetShowBlog(false);
        SetShowprofile(true);
    }
    const ChangtoBlog =()=>{
        SetShowCV(false);
        SetShowBlog(true);
        SetShowprofile(false);
    }

    const handleClick = () => {
        if(check)
        {
        SetCname(Cnameinput);
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


    const maincomponent =()=>{
        if (Showprofile){
            return(
                <div className="pro7">

                    <Grid container>
                        <Box
                            sx={{
                                boxShadow: 3,
                                bgcolor: 'background.paper',
                                width :'40%',
                                p:1,
                                margin:'0%'
                            }}
                        >
                            <div className="info_part">
                                <div className="img7Container">
                                    {/*<Avatar
                                        alt="Remy Sharp"
                                        src=""
                                        sx={{width: 200, height: 200}}
                                    />
                                    <Chip
                                        icon={<CreateIcon />}
                                        clickable
                                        size="small"
                                        color="secondary"
                                        label="Edit"
                                        variant="default"
                                    />*/}
                                    <ProfileImg></ProfileImg>
                                </div>
                                    <div className="info7">
                                        <Typography className="info name7" style={{color:"red", marginBottom:"0.3%" , marginTop:"0.25%" , fontSize:"14px"}}>{"Company Name:"}</Typography>
                                        <Typography className="" >{Cname}</Typography>
                                        <Typography className="info username7" style={{color:"red", marginBottom:"0.3%" , marginTop:"0.25%" , fontSize:"14px"}} >{"Username:"}</Typography>
                                        <Typography className="" >{username}</Typography>
                                        <Typography className="info bio7" style={{color:"red", marginBottom:"0.3%", marginTop:"0.25%" , fontSize:"14px" }} >{"Bio:"}</Typography>
                                        <Typography className="" >{bio}</Typography>
                                    </div>
                            </div>
                        </Box>
                    </Grid>

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
                                        label="Company"
                                        variant="outlined"
                                        style={{marginTop:"3%" , width:"70%"}}
                                        onChange={handleCnameChange}
                                        value={Cnameinput}
                                    />
                                    <div className="check6">
                                        {errors.Cnameinput && <p>{errors.Cnameinput}!</p>}
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
                                                style={{marginTop:"20px",marginBottom:"20px" , width:"auto", borderRadius:"15px"  }} onClick={handleClick}>
                                            UpdateProfile
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </Box>
                    </Grid>

                </div>
            );
        }
        if (ShowBlog){
            return <Blog></Blog>

        }
        if(ShowCV){
            return <CV></CV>
        }

    }

    return ( 
        <>
            <Box
                sx={{
                    width: '100%',
                    backgroundColor:'#EAEEF3',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    gap:'20px'
                }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="one" label="profile"  onClick={Changtoprofile} />
                    <Tab value="two" label="CV" onClick={ChangtoCV}/>
                    <Tab value="three" label="Blog" onClick={ChangtoBlog}/>
                </Tabs>
            </Box>

            {maincomponent()}

        </>

     );
}
 
export default ProfileCompany;
