import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';
import React , {useState} from 'react';


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