import * as React from 'react';
import {useState, useEffect} from 'react';
import Link from '@mui/material/Link';
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import url from '../../variables';
import queryString from 'query-string';
import CircularProgress from '@mui/material/CircularProgress';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';

const VerifyEmail = (props) => {
    /**
     * 0 : loading
     * 1 : verified
     * -1 : unauthorized
     */
    const [status, setStatus] = useState("")
    const [token, setToken] = useState("");

    useEffect(() => {
        setToken(queryString.parse(props.location.search).token);
    }, []);

    useEffect(() => {
        sendRequest(token, setStatus);
    }, [token]);

    if(status === 0){
        return (
            <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}>
                <CircularProgress/>
                <Typography sx={{mt:3}} component="h1" variant="h5">
                    Validating, please be patient.
                </Typography>
            </Box>
        );
    }
    else if(status === 1){
        return (
            <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}>
                <CheckCircleOutlineTwoToneIcon
                    sx={{ fontSize: 100 }}
                />
                <Typography sx={{mt:3, mb:3}} component="h1" variant="h5">
                    Verified!
                </Typography>
                <Link href="/" variant="body2">
                    {"Back to login"}
                </Link>
            </Box>
        );
    }
    else{
        return (
            <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}>
                <CancelTwoToneIcon
                    sx={{ fontSize: 100 }}
                />
                <Typography sx={{mt:3, mb:3}} component="h1" variant="h5">
                    Unauthorized!
                </Typography>
                <Link href="/" variant="body2">
                    {"Back to login"}
                </Link>
            </Box>
        );
    }
};

const sendRequest = async (token, setStatus) => {
    let response = await fetch(url + '/auth/verify', {
        method:'PUT',
        mode: 'cors',
        headers: {
            'Content-Type' : 'application/json' ,
            "Authorization" : `Bearer ${token}`
        }
    });
    if(response.status === 200){
        setStatus(1);
    }
    else{
        setStatus(-1);
    }
};


export default VerifyEmail;