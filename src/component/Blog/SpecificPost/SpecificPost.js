
import url from "../../../variables";
import {toast} from "react-toastify";

import React , {useState} from 'react';


const SpeceficPost=({prop})=>{
    const [id,Setid]=useState(prop.id);
    const [title,SetTitle]=useState('');
    const [estimat,Setestimat]=useState(0);
    const [dateOfSubmit,SetdateOfSubmit]=useState(' ');
    const [authorUsername,SetauthorUsername]=useState(' ');
    const [lastModify,SetlastModify]=useState(' ');
    const [contentUrl,SetcontentUrl]=useState(' ');
    var tags=[,];
    let item = {
        id : id
    };
    fetch(url + "/blog/"+id,{
        method:'GET',
        mode: 'cors',
        headers: {'Content-Type' : 'application/json',
            "Authorization" : `Bearer ${localStorage.getItem('token')}`},
        body:JSON.stringify(item)
    })
        .then(async response => {
            if(response.status === 200){
                response=await response.json();
                toast.success(response.message,{
                    position:"top-right",
                    closeOnClick:true
                });
                if(response.role==="PERSON")
                {
                    SetTitle(response.title);
                    Setestimat(response.estimatedMinutes);
                    SetauthorUsername(response.authorUsername);
                    SetlastModify(response.lastModify);
                    SetcontentUrl(response.contentUrl);

                    response.tags.forEach(()=>{
                        tags +=item;
                    });
                }
                if(response.role==="COMPANY"){
                    SetTitle(response.title);
                    Setestimat(response.estimatedMinutes);
                    SetauthorUsername(response.authorUsername);
                    SetlastModify(response.lastModify);
                    SetcontentUrl(response.contentUrl);

                    response.tags.forEach(()=>{
                        tags +=item;
                    });
                }
            }
            else{
                toast.error("Failed to load this post, try again later", {
                    position: "top-right",
                    closeOnClick: true
                });
                throw new Error('Failed to load this post, try again later.\n' + response.statusText);
            }
        })
        .catch( err => console.log(err));






    return (
        <div>
            {title}
            <br/>
            {id}
        </div>


    )

}
export default SpeceficPost;