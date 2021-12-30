import React , {useState} from 'react';

class oneTag extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name ,
            id:props.id
        } // You can also pass a Quill Delta here
    }
    //seeSpecific=({history})=>{
    seeSpecific=()=>{        //console.log("hi");

    }

    render() {
        return (
            <button>
                <div className="Post_main_Body">
                    <p>{this.state.name}</p>
                </div>
            </button>
        )
    }
}
export default oneTag;