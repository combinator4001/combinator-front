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
/*class Editor extends React.Component {
    constructor(props) {
        //const location = useLocation();
        super(props)
        this.state =
            { text: '',tags :['']/*,accessT:location.access_token } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
        //this.Post = this.Post.bind(this)
        //const tags =[];
    }

    handleChange(value) {
        this.setState({ text: value })
        console.log(value);
    }


    render() {
        return (
            <div>
                <ReactQuill value={this.state.text}
                            theme="snow"
                            placeholder="Type here"
                            modules={modules}
                            onChange={this.handleChange} ></ReactQuill>
                <button /*onClick={Post(this.state.text)}></button>
            </div>

            //<button onClick={}>sdfg</button>

        )
    }
}*/

/*const Editor=()=>{
    const location = useLocation();
    const [html,Sethtml]=useState(" ");
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
    const handleChange= (event)=>{
        //Sethtml(event.target.value);
        console.log(event.target.value);
    }
    const Sendpost= async() => {
        let item = {
            title:"new post",
            content:html,
            estimatedMinutes:5,
            tags:this.state.tags
        };
        fetch(url + "/blog",{
            crossDomain:true,
            method:'POST',
            mode: 'cors',
            headers: {'Content-Type' : 'application/json' ,
                "Authorization" : `Bearer ${location.location.access_token}`},
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
                    toast.error("Failed to submit your post, try again later", {
                        position: "top-right",
                        closeOnClick: true
                    });
                    throw new Error('Failed to submit your post, try again later\n' + response.statusText);
                }
            })
            .catch( err => console.log(err));
    }
return(
    <div>
        <ReactQuill value={html}
                    theme="snow"
                    placeholder="Type here"
                    modules={modules}
                    onChange={handleChange} ></ReactQuill>


        <button onClick={Sendpost}>send</button>
        <button onClick={handleChange}>check</button>
    </div>
);
}*/
class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: '' } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
        this.Post = this.Post.bind(this)
    }

    handleChange(value) {
        this.setState({ text: value })
        console.log(value);
    }
    Post(value){
        this.setState({ text: value })
        //request to back
    }

    render() {
        return (
            <ReactQuill value={this.state.text}
                        theme="snow"
                        placeholder="Type here"
                        modules={modules}
                        onChange={this.handleChange} />

        )
    }
}
export default Editor;