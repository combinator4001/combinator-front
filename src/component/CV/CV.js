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
    const [fname , Setfname]=useState('');
    //lname
    const [lname , Setlname]=useState('');
    //username
    const [username , Setusername]=useState('');
    //email
    const [email , Setemail]=useState('');

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
    //whatsApp
    const [WTSAPinput,SetWTSAPinput]=useState('');
    const [WTSAP,SetWTSAP]=useState('');
    //mobile
    const [mobileinput,Setmobileinput]=useState('');
    const [mobile,Setmobile]=useState('');
    //homenumber
    const [homenumberinput,Sethomenumberinput]=useState('');
    const [homenumber,Sethomenumber]=useState('');
    //Postal Cod
    const [Postalinput,SetPosatlinput]=useState('');
    const [Postal,SetPostal]=useState('');

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
                    Setfname(response.firstName);
                    Setlname(response.lastName);
                    Setemail(response.email);
                    SetopeningPage(false);
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
    const handeleWTSAPinput = (event)=>{
        SetWTSAPinput(event.target.value);
    }
    const handelemobileinput = (event)=>{
        Setmobileinput(event.target.value);
    }
    const handelehomenumberinput = (event)=>{
        Sethomenumberinput(event.target.value);
    }
    const handelePostalinput = (event)=>{
        SetPosatlinput(event.target.value);
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
        SetWTSAP(WTSAPinput);
        Setmobile(mobileinput);
        Sethomenumber(homenumberinput);
        SetPostal(Postalinput);
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
                            style={{marginTop:"3%" , width:"70%",height:"10%"}}
                            onChange={handlefatherinput}
                            value={Fatherinput}
                        />
                        <TextField
                            id="outlined-helperText"
                            label="National ID"
                            variant="outlined"
                            style={{marginTop:"3%" , width:"70%",height:"10%"}}
                            onChange={handleNIDinput}
                            value={NIDinput}
                        />

                        <TextField
                            label="Age"
                            variant="outlined"
                            style={{marginTop:"3%" , width:"70%",height:"10%"}}
                            onChange={handleageinput}
                            value={ageinput}
                        />
                        <Select
                            label="Gender"
                            style={{marginTop:"3%", width:"70%",color:"black",height:"10%"}}
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
                            style={{marginTop:"3%" , width:"70%",height:"10%"}}
                            onChange={handleTIDinput}
                            value={TIDinput}
                        />
                        <TextField
                            id="outlined-helperText"
                            label="WhatsApp"
                            variant="outlined"
                            style={{marginTop:"3%" , width:"70%",height:"10%"}}
                            onChange={handeleWTSAPinput}
                            value={WTSAPinput}
                        />

                        <TextField
                            id="outlined-helperText"
                            label="Mobile Phone"
                            variant="outlined"
                            style={{marginTop:"3%" , width:"70%",height:"10%"}}
                            onChange={handelemobileinput}
                            value={mobileinput}
                        />

                        <TextField
                            id="outlined-helperText"
                            label="Home number"
                            variant="outlined"
                            style={{marginTop:"3%" , width:"70%",height:"10%" }}
                            onChange={handelehomenumberinput}
                            value={homenumberinput}
                        />
                        <TextField
                            id="outlined-helperText"
                            label="Postal Code"
                            variant="outlined"
                            style={{marginTop:"3%" , width:"70%",height:"10%" }}
                            onChange={handelePostalinput}
                            value={Postalinput}
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
    const logout =()=>{

    }

    return(
        <div className="pro7">
            <Grid container>
                <Box
                    sx={{
                        boxShadow: 3,
                        bgcolor: 'background.paper',
                        width :'30%',
                        alignSelf:"start",
                        paddingBottom:0,
                        p:0
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#0099ff" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,138.7C640,149,800,203,960,218.7C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>
                </Box>

                <Box
                    sx={{
                        boxShadow: 3,
                        bgcolor: 'background.paper',
                        width :'60%',
                        alignSelf:"start",
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
                                <Typography className="" >{WTSAP}</Typography>
                                <Typography className="info name7" style={{color:"red", marginBottom:"0.3%", marginTop:"0.25%" , fontSize:"14px" }} >{"Mobile Phone Number:"}</Typography>
                                <Typography className="" >{mobile}</Typography>
                                <Typography className="info name7" style={{color:"red", marginBottom:"0.3%", marginTop:"0.25%" , fontSize:"14px" }} >{"Home Phone Number:"}</Typography>
                                <Typography className="" >{homenumber}</Typography>
                                <Typography className="info name7" style={{color:"red", marginBottom:"0.3%", marginTop:"0.25%" , fontSize:"14px" }} >{"email:"}</Typography>
                                <Typography className="" >{email}</Typography>
                                <Typography className="info name7" style={{color:"red", marginBottom:"0.3%", marginTop:"0.25%" , fontSize:"14px" }} >{"Postal code:"}</Typography>
                                <Typography className="" >{Postal}</Typography>
                            </div>
                            
                        </div>
                    </div>
                </Box>

            </Grid>
        </div>
    );

}

export default CV;