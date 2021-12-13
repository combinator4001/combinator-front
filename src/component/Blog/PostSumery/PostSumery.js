import * as React from 'react';
import Box from '@mui/material/Box';
import url from "../../../variables";
import {toast} from "react-toastify";
import './PostSumery.css'

class PostSumery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            titl: props.title ,
            id:props.id,
            estimat:props.estimatedMinutes,
            dateOfSubmit:props.createdAt
        } // You can also pass a Quill Delta here
    }
    seeSpecific=({history})=>{
        //console.log("hi");
        let item = {
            id : this.state.id
        };
        fetch(url + "/blog/"+this.state.id,{
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
                        history.push({
                            //pathname: '/Dashboard'
                        });
                    }
                    if(response.role==="COMPANY"){
                        //console.log(response.owners[0]);
                        history.push({
                            //pathname: '/Dashboard'
                        });
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

    render() {
        return (
            <a onClick={this.seeSpecific} className="Post_main_Body_link">
                <div className="Post_main_Body">
                    <p>{this.state.titl}</p>
                    <p>Estimate : {this.state.estimat}</p>
                    <p>date of submit : {this.state.dateOfSubmit}</p>
                </div>
            </a>


        )
    }
}
export default PostSumery;