import Box from '@mui/material/Box';
import url from "../../../variables";
import {toast} from "react-toastify";
import './PostSumery.css'
import {useLocation, useParams} from "react-router-dom";
import React , {useState} from 'react';
import SpeceficPost from "../SpecificPost/SpecificPost";
const PostToShow=(id)=>{
    const [content,Setcontent]=useState();


}
class PostSumery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            titl: props.title ,
            id:props.id,
            estimat:props.estimatedMinutes,
            dateOfSubmit:props.createdAt,
            Toshow:false
        } // You can also pass a Quill Delta here
    }
    //seeSpecific=({history})=>{

    seeSpecific=()=>{
        return(
            <SpeceficPost id={this.state.id}></SpeceficPost>
            )//console.log("hi");
    }

    render() {
        return (
            <a onClick={this.seeSpecific} className="Post_main_Body_link">
                <div className="Post_main_Body">
                    <p><h3>{this.state.titl}</h3></p>
                    <p>Estimate : {this.state.estimat}</p>
                    <p>date of submit : {this.state.dateOfSubmit}</p>
                </div>
            </a>

            )
    }
}
export default PostSumery;