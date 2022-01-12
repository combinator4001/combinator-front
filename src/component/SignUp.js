import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { TextField } from "@material-ui/core";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import validate from './Sign Up/validateInfo'
import valid1 from './Sign Up/valid'
import FormSignup from "./Sign Up/FormSignup";
import url from "../variables";
import {toast} from "react-toastify";
import { makeStyles } from "@material-ui/core/styles";
import {useState} from "react";



function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();


function SignUp({history }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [firstname,setfName]=useState("");
    const [lastname,setlname]=useState("");
    const [username,setusername]=useState("");
    const [email,setemail]=useState("");
    const [password,setlpass]=useState("");
    const [password2,setlpass2]=useState("");


    const handleSubmit = (event) => {
        setIsSubmitting(true);
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const check= valid1 ({firstname,lastname,username,email,password,password2})

        if(check){
            let item = {
                username : data.get('usernam'),
                password : data.get('password'),
                firstName: data.get('firstName'),
                lastName : data.get('lastName'),
                email : data.get('email')
            };
            fetch(url + "/auth/login",{
                method:'POST',
                mode: 'cors',
                headers: {'Content-Type' : 'application/json'},
                body:JSON.stringify(item)
            })
                .then(async response => {
                    if(response.status === 201){
                        response=await response.json();
                        toast.success(response.message,{
                            position:"top-right",
                            closeOnClick:true
                        });
                        if(response.role==="PERSON")
                        {
                            //setfirstname(response.firstName);
                            //console.log(response.access_token);
                            localStorage.setItem('token',response.access_token);
                            history.push({
                                pathname: '/Dashboard',
                                access_token:response.access_token,
                            });
                            //console.log(response.email);
                        }
                        if(response.role==="COMPANY"){
                            //console.log(response.owners[0]);
                            localStorage.setItem('token',response.access_token);
                            /*history.push({
                                access_token:response.access_token,
                                pathname: '/Dashboard',
                                name:response.name,
                                username:response.username,
                                email:response.email,
                                bio:response.bio,
                                owners:response.owners[0]
                            });*/
                        }
                    }
                    else{
                        toast.error("Failed to login, try again later", {
                            position: "top-right",
                            closeOnClick: true
                        });
                        throw new Error('Failed to login, try again later.\n' + response.statusText);
                    }
                })
                .then(response => {
                    //console.log(response);
                })
                .catch( err => console.log(err));
        }
        else{

            toast.error("please fill!", {
                position: "top-right",
                closeOnClick: true
            });
        }

    };
    let errors='';
    if (isSubmitting){
        errors=validate({firstname,lastname,username,email,password,password2});
    }

    //errors=validate({firstname,lastname,username,email,password,password2});
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    value={firstname}
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={ (e)=> setfName(e.target.value)}
                                />
                                {errors.firstname ?
                                    errors.firstname && <div className='error'><p>{errors.firstname}!</p></div> :
                                    <div className='error' style={{color:'white'}}><p>.</p></div>}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    value={lastname}
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    onChange={ (e)=> setlname(e.target.value)}
                                />
                                {errors.lastname ?
                                    errors.lastname && <div className='error'><p style={{marginLeft:14}} >{errors.lastname}!</p></div> :
                                    <div className='error' style={{color:'white'}}><p>.</p></div>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    value={email}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={ (e)=> setemail(e.target.value)}
                                />
                                {errors.email && <div className='error'><p>{errors.email}!</p></div>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    value={username}
                                    required
                                    fullWidth
                                    name="userName"
                                    label="Username"
                                    id="userName"
                                    autoComplete="your username"
                                    onChange={ (e)=> setusername(e.target.value)}
                                />
                                {errors.username && <div className='error'><p name="d">{errors.username}!</p></div>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    value={password}
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={ (e)=> setlpass(e.target.value)}
                                />
                                {errors.password ?
                                    errors.password &&  <div className='error'><p>{errors.password}!</p></div> :
                                    <div className='error' style={{color:'white'}}><p>.</p></div>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    value={password2}
                                    required
                                    fullWidth
                                    name="password"
                                    label="confirm password"
                                    type="password"
                                    id="password2"
                                    autoComplete="new-password"
                                    onChange={ (e)=> setlpass2(e.target.value)}

                                />
                                {errors.password2 ?
                                    errors.password2 && <div className='error'><p style={{marginLeft:14}} >{errors.password2}!</p></div> :
                                    <div className='error' style={{color:'white'}}><p>.</p></div>}
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to='/' style={{marginLeft:5}} onClick={()=>{history.push({pathname: '/'})}} >Already have an account? Sign in</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
export default SignUp