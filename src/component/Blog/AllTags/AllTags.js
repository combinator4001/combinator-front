import 'react-quill/dist/quill.snow.css';
import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";
import url from "../../../variables";
import {toast} from "react-toastify";

const AllTags=()=>{
    let [list,Setlist]=useState([]);
    useEffect(
        async ()=>{
            let item ={
                page:1,
                limit:100
            }
            let response = await fetch(url + "/tag",{
                method:'GET',
                //mode: 'cors',
                headers: {'Content-Type' : 'application/json' },
                query:{'page':1,'limit':100}
                //body:JSON.stringify(item)
            })
            if(response.status === 200){
                response=await response.json();
                //console.log(response);
                Setlist(response);

            }
            else{
                toast.error("Failed to load tags", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        },[])

    const listItems=list.map((item)=>(
        <oneTag id={item.id} name={item.name} />
    ));
    return(

        <div>
            {
                //console.log(list[1].id.toString())
                listItems
                //console.log(Object.values(list))
                // list.map((value,i) => console.log(value,i))
                // list.forEach(value => {
                //     console.log("v",value)
                // })
            }
        </div>
    )

}
export default AllTags;