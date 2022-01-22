import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import url from '../variables';
import { toast } from 'react-toastify';
import { withRouter } from "react-router-dom";

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

function  SignInSide({history}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        /*console.log({
            email: data.get('usernam'),
            password: data.get('password'),
        });*/
        if(data.get('usernam')&&data.get('password')){
            let item = {
                username : data.get('usernam'),
                password : data.get('password')
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



    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="usernam"
                                label="Username"
                                name="usernam"
                                autoComplete="usernam"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link to='/auth/password' style={{marginLeft:5}} onClick={()=>{history.push({pathname: '/auth/password'})}} >Forgot password</Link>
                                </Grid>
                                <Grid item>
                                    <Link to='/auth/password' style={{marginLeft:5}} onClick={()=>{history.push({pathname: '/person'})}} >Don't have an account? Sign Up</Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
export default withRouter(SignInSide);