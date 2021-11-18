import Typography from '@material-ui/core/Typography';
//import { AppBar, Avatar, Button, Chip, Container, IconButton, Link, makeStyles, MenuItem, Popover, Snackbar, Toolbar, } from '@material-ui/core';
import '../profileuser1/profile1.css'
import './CV.css'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import React , {useState} from 'react';
import validateInfo from './validpro';
import validbool from './validbool';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useLocation } from "react-router-dom";
import url from "../../variables";
import {toast} from "react-toastify";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Select from '@mui/material/Select';
import DateTimePicker from '@mui/lab/DateTimePicker';





const CV = ()=> {
    const location = useLocation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [identityShow,SetidentityShow]=useState(false);
    const [contactShow,SetcontactShow]=useState(false);
    //fname
    const [fnameinput, setfnameinput] = useState(location.firstName);
    const [fname , Setfname]=useState(location.firstName);
    //lname
    const [lnameinput, setlnameinput] = useState(location.lastName);
    const [lname , Setlname]=useState(location.lastName);
    //username
    const [usernameinput, setusernameinput] = useState(location.username);
    const [username , Setusername]=useState(location.username);
    //email
    const [emailinput, setemailinput] = useState(location.email);
    const [email , Setemail]=useState(location.email);

    const [bioinput, setbioinput] = useState(location.bio);
    const [bio , Setbio]=useState(location.bio);

    const [value, setValue] = React.useState('one');
    //father name
    const [Fatherinput,SetFatherinput]=useState('');
    const [FatherName,SetFatherName]=useState('');
    //national id
    const [NIDinput,SetNIDinput]=useState('');
    const [NID,SetNID]=useState('');
    //age
    const [ageinput,Setageinput]=useState('');
    const [age,Setage]=useState('');
    //gender
    const [genderinput,Setgenderinput]=useState('');
    const [gender,Setgender]=useState('');
    //Telgram
    const [TIDinput,SetTIDinput]=useState('');
    const [TID,SetTID]=useState('');
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
    const handlefatherinput = (event)=>{
        SetFatherinput(event.target.value);
    }
    const handleNIDinput = (event)=>{
        SetNIDinput(event.target.value);
    }
    const handleageinput = (event)=>{
        Setageinput(event.target.value);
    }
    const handleGenderinput = (event)=>{
        Setgenderinput(event.target.value);
    }
    const handleTIDinput = (event)=>{
        SetTIDinput(event.target.value);
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSubmit = async event=> {
        setIsSubmitting(true);
        event.preventDefault();
    };

    const handelidentityClose = () => {
        SetidentityShow(false);
    }


    const identityOpen=()=>{
        SetidentityShow(true);
        SetcontactShow(false);
    }
    const contactClose=()=>{
        SetcontactShow(false);
    }
    const contactOpen=()=>{
        SetcontactShow(true);
        SetidentityShow(false);
    }
    const handelidentityAdd =()=>{
       SetFatherName(Fatherinput);
       SetNID(NIDinput);
       Setage(ageinput);
       Setgender(genderinput);
    }
    const Addcontact=()=>{
        SetTID(TIDinput);
    }


    const info=()=>{
        if(identityShow){
            return(
                <div className="update7">
                    <form className="form7" onSubmit={handleSubmit}>
                        <TextField
                            id="outlined-helperText"
                            label="Father name"
                            variant="outlined"
                            style={{marginTop:"3%" , width:"70%"}}
                            onChange={handlefatherinput}
                            value={Fatherinput}
                        />
                        <TextField
                            id="outlined-helperText"
                            label="National ID"
                            variant="outlined"
                            style={{marginTop:"3%" , width:"70%"}}
                            onChange={handleNIDinput}
                            value={NIDinput}
                        />

                        <TextField
                            label="Age"
                            variant="outlined"
                            style={{marginTop:"3%" , width:"70%"}}
                            onChange={handleageinput}
                            value={ageinput}
                        />
                        <Select
                            label="Gender"
                            style={{marginTop:"3%", width:"70%",color:"black"}}
                            onChange={handleGenderinput}
                            value={genderinput}
                        >
                            <MenuItem value={'male'}>male</MenuItem>
                            <MenuItem value={'female'}>female</MenuItem>
                        </Select>

                        <div className="profileUser1_btnContainer">
                            <Button variant="contained" color="primary" disableElevation
                                    style={{marginTop:"20px",marginBottom:"20px" , width:"auto", borderRadius:"15px"  }} onClick={handelidentityClose}>
                                close
                            </Button>
                            <Button variant="contained" color="primary" disableElevation
                                    style={{marginTop:"20px",marginBottom:"20px" , width:"auto", borderRadius:"15px"  }} onClick={handelidentityAdd}>
                                Add
                            </Button>
                        </div>
                    </form>
                </div>
            );
        }

        if(contactShow){
            return(
                <div className="update7">
                    <form className="form7" onSubmit={handleSubmit}>
                        <TextField
                            id="outlined-helperText"
                            label="telgram ID"
                            variant="outlined"
                            style={{marginTop:"3%" , width:"70%"}}
                            onChange={handleTIDinput}
                            value={TIDinput}
                        />
                        <TextField
                            id="outlined-helperText"
                            label="WhatsApp"
                            variant="outlined"
                            style={{marginTop:"3%" , width:"70%"}}
                            //onChange={handlelnameChange}
                            //value={lnameinput}
                        />

                        <TextField
                            id="outlined-helperText"
                            label="Mobile Phone"
                            variant="outlined"
                            style={{marginTop:"3%" , width:"70%"}}
                            //onChange={handleusernameChange}
                            //value={usernameinput}
                        />

                        <TextField
                            id="outlined-helperText"
                            label="Home Phone"
                            variant="outlined"
                            style={{marginTop:"3%" , width:"70%" }}
                            //onChange={handlebioChange}
                            //value={bioinput}
                        />
                        <TextField
                            id="outlined-helperText"
                            label="Postal Code"
                            variant="outlined"
                            style={{marginTop:"3%" , width:"70%" }}
                            //onChange={handlebioChange}
                            //value={bioinput}
                        />
                        <div className="profileUser1_btnContainer">
                            <Button variant="contained" color="primary" disableElevation
                                    style={{marginTop:"20px",marginBottom:"20px" , width:"auto", borderRadius:"15px"  }} onClick={contactClose}>
                                close
                            </Button>
                            <Button variant="contained" color="primary" disableElevation
                                    style={{marginTop:"20px",marginBottom:"20px" , width:"auto", borderRadius:"15px"  }} onClick={Addcontact}>
                                Add
                            </Button>
                        </div>
                    </form>
                </div>
            );
        }
    }

    return(
        <div className="pro7">
            <Grid container>
                <Box
                    sx={{
                        boxShadow: 3,
                        bgcolor: 'background.paper',
                        width :'30%',
                        p:1
                    }}
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value="one" label="identity"  onClick={identityOpen} />
                        <Tab value="two" label="contact" onClick={contactOpen}/>
                    </Tabs>
                    {info()}
                </Box>

                <Box
                    sx={{
                        boxShadow: 3,
                        bgcolor: 'background.paper',
                        width :'60%',
                        p:1,
                        margin:'0%'
                    }}
                >
                    <div className="info_part">
                        <div className="info7">
                            <div className="info7_part1">
                                <Typography className="info name7" style={{color:"red", marginBottom:"0.3%" , marginTop:"0.25%" , fontSize:"14px"}}>{"Name:"}</Typography>
                                <Typography className="" >{fname} {lname}</Typography>
                                <Typography className="info username7" style={{color:"red", marginBottom:"0.3%" , marginTop:"0.25%" , fontSize:"14px"}} >{"Combinator Username:"}</Typography>
                                <Typography className="" >{username}</Typography>
                                <Typography className="info name7" style={{color:"red", marginBottom:"0.3%", marginTop:"0.25%" , fontSize:"14px" }} >{"Father Name:"}</Typography>
                                <Typography className="" >{FatherName}</Typography>
                                <Typography className="info name7" style={{color:"red", marginBottom:"0.3%", marginTop:"0.25%" , fontSize:"14px" }} >{"National ID:"}</Typography>
                                <Typography className="" >{NID}</Typography>
                                <Typography className="info name7" style={{color:"red", marginBottom:"0.3%", marginTop:"0.25%" , fontSize:"14px" }} >{"Gender:"}</Typography>
                                <Typography className="" >{gender}</Typography>
                                <Typography className="info name7" style={{color:"red", marginBottom:"0.3%", marginTop:"0.25%" , fontSize:"14px" }} >{"Age:"}</Typography>
                                <Typography className="" >{age}</Typography>
                            </div>
                            <div className="info7_part1">
                                <Typography className="info name7" style={{color:"red", marginBottom:"0.3%" , marginTop:"0.25%" , fontSize:"14px"}}>{"Telegram ID:"}</Typography>
                                <Typography className="" >{TID}</Typography>
                                <Typography className="info username7" style={{color:"red", marginBottom:"0.3%" , marginTop:"0.25%" , fontSize:"14px"}} >{"Whatsapp Number:"}</Typography>
                                <Typography className="" >{username}</Typography>
                                <Typography className="info name7" style={{color:"red", marginBottom:"0.3%", marginTop:"0.25%" , fontSize:"14px" }} >{"Mobile Phone Number:"}</Typography>
                                <Typography className="" >{FatherName}</Typography>
                                <Typography className="info name7" style={{color:"red", marginBottom:"0.3%", marginTop:"0.25%" , fontSize:"14px" }} >{"Home Phone Number:"}</Typography>
                                <Typography className="" >{NID}</Typography>
                                <Typography className="info name7" style={{color:"red", marginBottom:"0.3%", marginTop:"0.25%" , fontSize:"14px" }} >{"email:"}</Typography>
                                <Typography className="" >{email}</Typography>
                                <Typography className="info name7" style={{color:"red", marginBottom:"0.3%", marginTop:"0.25%" , fontSize:"14px" }} >{"Postal code:"}</Typography>
                                <Typography className="" >{age}</Typography>
                            </div>

                        </div>
                    </div>
                </Box>

            </Grid>
        </div>
    );

}

export default CV;