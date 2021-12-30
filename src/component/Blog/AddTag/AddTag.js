import 'react-quill/dist/quill.snow.css';
import React , {useState} from 'react';
import {Button} from "@mui/material";
import url from "../../../variables";
import {toast} from "react-toastify";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const AddTag=()=>{
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const [tagname,Settagname]=useState('');

    const AddT=()=>{
        console.log(tagname);
        let item = {
            name : tagname
        };
        fetch(url + "/tag",{
            method:'POST',
            mode: 'cors',
            headers: {'Content-Type' : 'application/json',
                "Authorization" : `Bearer ${localStorage.getItem('token')}`},
            body:JSON.stringify(item)
        })
            .then(async response => {
                if(response.status === 201){
                    response=await response.json();
                    toast.success(response.message,{
                        position:"top-right",
                        closeOnClick:true
                    });
                }
                else{
                    toast.error("Failed to Add this tag, try again later", {
                        position: "top-right",
                        closeOnClick: true
                    });
                    throw new Error('Failed to Add this tag, try again later.\n' + response.statusText);
                }
            })
            .catch( err => console.log(err));
    }
    const handleTagChange=(event)=>{
        Settagname(event.target.value)
    }

    return(
        <>
            <br/><br/>
            <h1>Add new tags</h1>
            <Box sx={{ width: 1 }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <Box gridColumn="span 6">
                        <Item><TextField
                            style={{marginTop:"12px",marginBottom:"10px" , width:"70%"}}
                            value={tagname}
                            type="text"
                            id="outlined-basic"
                            label="Tag name"
                            onChange={(event)=>handleTagChange(event) }
                        /></Item>
                    </Box>
                    <Box gridColumn="span 6">
                        <Item>
                            <Button variant="contained" color="primary" disableElevation
                                      style={{marginTop:"20px",marginBottom:"20px" , width:"auto", borderRadius:"15px"  }} onClick={AddT}>
                            Add
                        </Button>
                        </Item>
                    </Box>
                </Box>
            </Box>



        </>
    );
}
export default AddTag;