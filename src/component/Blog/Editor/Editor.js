import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';
import React , {useState} from 'react';
import {Button} from "@mui/material";
import url from "../../../variables";
import {toast} from "react-toastify";


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
const Editor =()=> {
    /*constructor(props) {
        super(props)
        this.state = { text: '' } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
        this.Post = this.Post.bind(this)
    }*/
    const [value , SetValue]=useState('');

    const handleChange = (event) => {
        SetValue(event.target.value);
        console.log(value);
    }

    const Post =async () =>
    {
            let item = {
                value
            };
            fetch(url + "/auth/login",{
                method:'POST',
                mode: 'cors',
                headers: {'Content-Type' : 'application/json'},
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
                        toast.error("Failed to Post, try again later", {
                            position: "top-right",
                            closeOnClick: true
                        });
                        throw new Error('Failed to Post, try again later.\n' + response.statusText);
                    }
                })
                .catch( err => console.log(err));
    }
    return (
        <>
            <ReactQuill value={this.state.text}
                        theme="snow"
                        placeholder="Type here"
                        modules={modules}
                        onChange={this.handleChange} />
            <Button variant="contained" color="primary" disableElevation
                    style={{marginTop:"20px",marginBottom:"20px" , width:"auto", borderRadius:"15px"  }} onClick={Post} >
                Post
            </Button>
        </>
    );

}
export default Editor;