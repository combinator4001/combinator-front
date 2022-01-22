import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import url from '../../variables';
import { toast } from 'react-toastify';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://combinator.com/">
          Combinator
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const SendVerifyEmailLink = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        let email = data.get('email');
        
        let response = await fetch(url + '/auth/verify', {
            method:'POST',
            mode: 'cors',
            headers: {'Content-Type' : 'application/json'},
            body:JSON.stringify({
                email
            })
        });
        
        if(response.status === 200){
            response = await response.json();
            toast.info(response.message, {
                position:"top-right",
                closeOnClick:true
            });
        }
        else{
            toast.error("An email must be given!", {
                position:"top-right",
                closeOnClick:true
            });
        }
      };
    

    return (
          <Container component="main" maxWidth="xs" style={{
                height:'100vh',
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <EmailIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Verify email
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%'}}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <Button
                  type="submit"
                  
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Send verify link
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/" variant="body2">
                      Login
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/person" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 3, mb: 3}} />
          </Container>
      );
};

export default SendVerifyEmailLink;
