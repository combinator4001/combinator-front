import Box from '@mui/material/Box';
import url from "../../../variables";
import {toast} from "react-toastify";
//import './PostSumery.css'
import {useLocation, useParams} from "react-router-dom";
import React , {useState,useEffect} from 'react';



const AllPostSummery= ()=>{

    const [summeries,Setsummeries ]=useState();
    const [username,Setusername]=useState('');
    //const [list,Setlist]=useState();
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


        // console.log(response);
            /*.then( response => {
                response.json().then(value => {
                    //console.log(value);
                    for ( var i = 0; i < value.length; i++) {
                        list.push( value[i]);
                    }
                });
            })*/

    },[])





    return(

        <div>
            {
                console.log( list[0])


                //console.log(Object.values(list))
                // list.map((value,i) => console.log(value,i))
                // list.forEach(value => {
                //     console.log("v",value)
                // })
            }
        </div>
    )
}
export default AllPostSummery;