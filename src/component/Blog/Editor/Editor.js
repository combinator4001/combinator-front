import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';
import React , {useState} from 'react';
import {Button} from "@mui/material";
import url from "../../../variables";
import {toast} from "react-toastify";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddTag from "../AddTag/AddTag";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AllTags from "../AllTags/AllTags";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
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
        this.state = { text: '' ,isSUBMITed:false,username:props.username,title:"",estimat:0} // You can also pass a Quill Delta here
        //this.handleChange = this.handleChange.bind(this)
        //this.Post = this.Post.bind(this)
        //const access_token = localStorage.getItem('token')
    }

    handleChange=(value)=> {
        this.setState({ text: value })
        //console.log(value);
    }
    handleTitleChange=( event)=>{
        this.setState({title:event.target.value})
        //console.log( this.state.title);
    }
    handleMinoutChange=(event)=>{
        this.setState({estimat:event.target.value})
        //console.log(this.state.estimat);
    }

    Post=()=>{
        //this.setState({isSUBMITed:true});
        //console.log("post func")
        //console.log(localStorage.getItem('token'));
        //console.log(typeof parseInt(this.state.estimat) );
        //console.log(typeof this.state.title);
        //console.log(typeof this.state.text);
        this.handleClick();
    }
    handleClick = async() => {


        if(!this.state.isSUBMITed){
            this.state.isSUBMITed=true;
            let alltags=[];
            let item = {
                title:this.state.title,
                content:this.state.text,
                estimatedMinutes:parseInt(this.state.estimat)+1,
                tagIds:alltags
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
                <Box sx={{ width: 1 }}>
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                        <Box gridColumn="span 6">
                            <Item>
                                <TextField
                                style={{width: "50%"}}
                                type="text"
                                id="outlined-basic"
                                label="title"
                                defaultValue="Post Title"
                                onChange={this.handleTitleChange.bind(this)}
                            />
                            </Item>
                        </Box>
                        <Box gridColumn="span 6">
                            <Item>
                                <TextField
                                id="standard-number"
                                label="Estimated time"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={this.handleMinoutChange.bind(this)}
                            />
                            </Item>
                        </Box>
                        <Box gridColumn="span 12">
                            <Item>
                                <ReactQuill value={this.state.text}
                                              theme="snow"
                                              placeholder="Type here"
                                              modules={modules}
                                              onChange={this.handleChange} >
                                </ReactQuill>
                            </Item>
                        </Box>
                        <Box gridColumn="span 12">
                            <div >
                                <Button variant="contained" color="primary" disableElevation
                                        style={{marginTop:"20px",marginBottom:"20px" , width:"auto", borderRadius:"15px"  }} onClick={this.Post}>
                                    Post
                                </Button>
                            </div>
                        </Box>
                        <Box gridColumn="span 12">
                            <Item>
                                <AddTag/>
                            </Item>
                        </Box>
                    </Box>
                </Box>
                <AllTags/>
            </>

        )
    }
}
export default Editor;