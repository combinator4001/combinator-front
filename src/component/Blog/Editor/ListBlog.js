import 'react-quill/dist/quill.snow.css';
import React , {useState} from 'react';
import url from "../../../variables";
import {useLocation } from "react-router-dom";
import {toast} from "react-toastify";


const ListBlog=()=>{
    const location=useLocation();
    const [username , Setusername]=useState('');
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
                if(response.role==="PERSON")
                {
                    Setusername(response.username);
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

    const handleClick = async() => {

        fetch(url +"/"+ username+"/blogs",{
            crossDomain:true,
            method:'GET',
            mode: 'cors',
            headers: {'Content-Type' : 'application/json' }
        })
            .then( async (response) => {
                if(response.status === 200){
                    response = await response.json();
                    console.log(response);
                }else if(response.status === 404) {
                    response = await response.json();
                    toast.error(response.message[0], {
                        position: "top-right",
                        closeOnClick: true
                    });
                }
            })
            .catch( err => console.log(err));



    }
    return(
        {username}
    );
}
export default ListBlog;