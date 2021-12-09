import Typography from '@material-ui/core/Typography';
//import { AppBar, Avatar, Button, Chip, Container, IconButton, Link, makeStyles, MenuItem, Popover, Snackbar, Toolbar, } from '@material-ui/core';
import {Button} from "@mui/material";
import './profile1.css'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import React , {useState} from 'react';
import validateInfo from './validpro';
import validbool from './validbool';


import ProfileImg from '../profile-user/ProfileImg';


import {useLocation, useParams} from "react-router-dom";
import url from "../../variables";
import {toast} from "react-toastify";
import { withRouter } from "react-router-dom";




const ProfileUser =  ({history}) => {

    const location = useLocation();
    const [Showprofile,SetShowprofile]=useState(true);
    //initial name most be given from database
    //const [condition,Setcondition]=useState('Blog');
    const [isSubmitting, setIsSubmitting] = useState(false);
    //fname
    const [fnameinput, setfnameinput] = useState('');
    const [fname , Setfname]=useState('');
    //lname
    const [lnameinput, setlnameinput] = useState('');
    const [lname , Setlname]=useState('');
    //username
    const [usernameinput, setusernameinput] = useState('');
    const [username , Setusername]=useState('');
    //email
    const [emailinput, setemailinput] = useState('');
    const [email , Setemail]=useState('');

    const [bioinput, setbioinput] = useState('');
    const [bio , Setbio]=useState('');
    const [openingPage,SetopeningPage]=useState(true);
    //let item = {
        //token:location.access_token
    //};

    //console.warn(item);
    if(openingPage){
        fetch(url + "/me",{
            method:'GET',
            mode: 'cors',
            headers: {'Content-Type' : 'application/json' ,
                "Authorization" : `Bearer ${location.access_token}`},
            //body:JSON.stringify(item)
        })
            .then(async response => {
                if(response.status === 200){
                    response=await response.json();
                    //toast.success(response.message,{
                        //position:"top-right",
                        //closeOnClick:true
                    //});
                    if(response.role==="PERSON")
                    {
                        //setfirstname(response.firstName);
                        //console.log(response.access_token);
                        //console.log(response.email);
                        setfnameinput(response.firstName);
                        Setfname(response.firstName);
                        setlnameinput(response.lastName);
                        Setlname(response.lastName);
                        setusernameinput(response.username);
                        Setusername(response.username);
                        setemailinput(response.email);
                        Setemail(response.email);
                        setbioinput(response.bio);
                        Setbio(response.bio);
                        SetopeningPage(false);
                        Setimage(response.imageUrl);

                    }

                }
                else{
                    toast.error("Failed to load your personal info", {
                        position: "top-right",
                        closeOnClick: true
                    });
                    throw new Error('Failed to load your personal info.\n' + response.statusText);
                }
            })
            .then(response => {
                //console.log(response);
            })
            .catch( err => console.log(err));

    }




    const [value, setValue] = React.useState('one');

    const logout=()=>{
        history.replace('/');
    }
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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [accessT,SetaccessT]=useState(location.access_token);
    //const { ProfileToken } = useParams();
    const handleClick = async() => {

        if(check)
        {
            //console.log('profileToken:',accessT);
            let item = {
                firstName: fnameinput,
                lastName : lnameinput,
                email : emailinput,
                bio:bioinput
            };
            fetch(url + "/person",{
                crossDomain:true,
                method:'PATCH',
                mode: 'cors',
                headers: {'Content-Type' : 'application/json' ,
                    "Authorization" : `Bearer ${accessT}`},
                body:JSON.stringify(item)
            })
                .then( async (response) => {
                    if(response.status === 200){
                        response = await response.json();
                        console.log(response);
                        toast.success(response.message, {
                            position: "top-right",
                            closeOnClick: true
                        });
                    }else if(response.status === 400){
                        response = await response.json();
                        toast.error(response.message[0], {
                            position: "top-right",
                            closeOnClick: true
                        });
                    }else if(response.status === 401){
                        response = await response.json();
                        toast.error(response.message, {
                            position: "top-right",
                            closeOnClick: true
                        });
                    }
                    else{
                        toast.error("not done!!", {
                            position: "top-right",
                            closeOnClick: true
                        });
                    }

                })
                .catch( err => console.log(err));
            location.firstName=fnameinput;
            location.lastName=lnameinput;
            location.email=emailinput;
            location.bio=bioinput;
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
                                        <Typography className="info name7" style={{color:"red", marginBottom:"0.3%" , marginTop:"0.25%" , fontSize:"14px"}}>{"Name:"}</Typography>
                                        <Typography className="" >{fname} {lname}</Typography>
                                        <Typography className="info username7" style={{color:"red", marginBottom:"0.3%" , marginTop:"0.25%" , fontSize:"14px"}} >{"Username:"}</Typography>
                                        <Typography className="" >{username}</Typography>
                                        <Typography className="info bio7" style={{color:"red", marginBottom:"0.3%", marginTop:"0.25%" , fontSize:"14px" }} >{"Bio:"}</Typography>
                                        <Typography className="" >{bio}</Typography>
                                    </div>
                            </div>
                        </Box>
                        <Box
                            sx={{
                                boxShadow: 3,
                                bgcolor: 'background.paper',
                                width :'50%',
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

                                    {/*<TextField*/}
                                    {/*    id="outlined-helperText"*/}
                                    {/*    label="Username"*/}
                                    {/*    variant="outlined"*/}
                                    {/*    style={{marginTop:"3%" , width:"70%"}}*/}
                                    {/*    onChange={handleusernameChange}*/}
                                    {/*    value={usernameinput}*/}
                                    {/*/>*/}
                                    {/*<div className="check6">*/}
                                    {/*    {errors.usernameinput && <p>{errors.usernameinput}!</p>}*/}
                                    {/*</div>*/}

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
                                            Update
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </Box>
                    </Grid>
                </div>
            );
        }
    }

    return ( 
        <>
            {maincomponent()}
        </>

     );
}
 
export default withRouter(ProfileUser);
