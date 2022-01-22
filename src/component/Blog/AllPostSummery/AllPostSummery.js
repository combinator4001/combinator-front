import url from "../../../variables";
import {toast} from "react-toastify";
import React , {useState,useEffect} from 'react';
import PostSumery from "../PostSumery/PostSumery";
import './AllPostSummery.css'
import FeaturedPost from "../PostSumery/FeaturedPost";
import Grid from '@mui/material/Grid';


const AllPostSummery= ()=>{


    let [list,Setlist]=useState([]);

    const [isConecting,SetisConecting]=useState(false);
    //get username
    useEffect(async ()=>{
        let response = await fetch(url + "/me",{
            method:'GET',
            mode: 'cors',
            headers: {'Content-Type' : 'application/json' ,
                "Authorization" : `Bearer ${localStorage.getItem('token')}`},
            //body:JSON.stringify(item)
        })
        if(response.status === 200){
            response=await response.json();
            if(response.role==="PERSON")
            {
                //SetisConecting(true);

                response = await fetch(url + "/"+response.username+"/blogs",{
                    method:'GET',
                    //mode: 'cors',
                    headers: {
                        "Authorization" : `Bearer ${localStorage.getItem('token')}`},
                })
                response=await response.json();
                //console.log(response);
                Setlist(response);

                //console.log(response[0]);
                //console.log(typeof response);
                //for ( var i = 0; i < response.length; i++) {
                    //console.log(response[i]);
                    //list.push( response[i]);
                //}
                //console.log(url + "/"+username+"/blogs");
            }
        }
        else{
            toast.error("Failed to load your personal info", {
                position: "top-right",
                closeOnClick: true
            });
        }

    },[])






    return(
        <>

        <div className="main_part_AllPostSumery">
            <Grid container spacing={4}>
                {list.map((post) => (
                    <FeaturedPost key={post.title} post={post} />
                ))}
            </Grid>
        </div>
            </>
    )
}
export default AllPostSummery;