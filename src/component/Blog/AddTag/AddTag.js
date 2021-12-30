import 'react-quill/dist/quill.snow.css';
import React , {useState} from 'react';
import {Button} from "@mui/material";
import url from "../../../variables";
import {toast} from "react-toastify";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Editor from "../Editor/Editor";

const AddTag=()=>{
    const [tagname,Settagname]=useState('');

    const AddT=()=>{
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


    return(
        <>
            <p>Add new tags</p>
            <TextField
                value={tagname}
                type="text"
                id="outlined-basic"
                label="title"
                defaultValue="Post Title"
                onChange={(e)=> Settagname(e.target.value)}
            />
            <Button variant="contained" color="primary" disableElevation
                    style={{marginTop:"20px",marginBottom:"20px" , width:"auto", borderRadius:"15px"  }} onClick={AddT}>
                Add
            </Button>
        </>
    );
}
export default AddTag;