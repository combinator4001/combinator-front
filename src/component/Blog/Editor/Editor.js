import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';
import React , {useState} from 'react';
import {Button} from "@mui/material";
import url from "../../../variables";
import {useLocation, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import { Message } from 'semantic-ui-react';
import {  Comment, Form, Header } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';

const modules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" }
        ],
        ["link", "image", "video"],
        ["clean"]
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false
    }
};

class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: '' ,isSUBMITed:false} // You can also pass a Quill Delta here
        //this.handleChange = this.handleChange.bind(this)
        //this.Post = this.Post.bind(this)
        //const access_token = localStorage.getItem('token')
    }

    handleChange=(value)=> {
        this.setState({ text: value })
        //console.log(value);
    }
    Post=()=>{
        //this.setState({isSUBMITed:true});

        console.log("post func")
        this.handleClick();
    }
    handleClick = async() => {


        if(!this.state.isSUBMITed){
            this.state.isSUBMITed=true;
            let alltags=[,];
            let item = {
                title:'new post',
                content:this.state.text,
                estimatedMinutes:5,
                tags:alltags
            };
            fetch(url + "/blog",{
                crossDomain:true,
                method:'POST',
                mode: 'cors',
                headers: {'Content-Type' : 'application/json' ,
                    "Authorization" : `Bearer ${localStorage.getItem('token')}`},
                body:JSON.stringify(item)
            })
                .then( async (response) => {
                    if(response.status === 201){
                        response = await response.json();
                        console.log(response);
                        toast.success(response.message, {
                            position: "top-right",
                            closeOnClick: true
                        });
                    }else if(response.status === 400){
                        response = await response.json();
                        toast.error(response.message[0], {
                            position: "top-right",
                            closeOnClick: true
                        });
                    }else if(response.status === 401){
                        response = await response.json();
                        toast.error(response.message, {
                            position: "top-right",
                            closeOnClick: true
                        });
                    }
                    else{
                        toast.error("not done!!", {
                            position: "top-right",
                            closeOnClick: true
                        });
                    }

                })
                .catch( err => console.log(err));

        }

    }

    render() {
        return (
            <>
                <ReactQuill value={this.state.text}
                            theme="snow"
                            placeholder="Type here"
                            modules={modules}
                            onChange={this.handleChange} ></ReactQuill>
                <button onClick={this.Post}>post</button>
            </>

        )
    }
}
export default Editor;