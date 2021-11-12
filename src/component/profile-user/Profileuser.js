import './profile.css'
import Img from './ProfileImg'
import React, { useEffect, useState,Fragment } from 'react';
import Navbar3 from '../navbar3/Navbar3'
import CV from "../CV/CV"
import Blog from "../Blog/Blog";
import {BrowserRouter as Router, Route} from "react-router-dom";
import validProfile from "./validProfile";
import validbool from "./validbool";
import {ToastContainer} from "react-toastify";
import Login from "../Login/Login";
import FormSignup from "../Sign Up/FormSignup";
import FormSignupCompany from "../SignUpCompany/FormSignupCompany";
import ForgetPass from "../ForgetPass/ForgetPass";
import Changepass from "../ForgetPass/Changepass";
import { toast } from 'react-toastify';
import url from '../../variables';


class profileuser extends React.Component {
    state={
        showupdate:false,
        showinfo:true,
        name:"Fatemeh",
        lastname:"Askari",
        username:"@fati1234",
        bio:null ,
        email:"Fatemeh@yahoo.com",
        condition:null,
        consave:true,
        showcv:false,
        showbloge:true
    };

    profilerequest =() =>{
        let check=validbool(this.state.name,this.state.lastname,
            this.state.username,this.state.email);
        if(check){
             let name =this.state.name;
             let lastname=this.state.lastname;
             let username=this.state.username;             
            let bio=this.state.bio;
            let email=this.state.email;
             let item={
                name,
                lastname,
                username,
                bio,
                email
             }
            console.warn(item);

            fetch(url + "/person",{
                method:'POST',
                headers: {'Content-Type' : 'application/json'},
                body:JSON.stringify(item)
            })
            .then( response => {
                if(response.status === 201){
                    toast.success("successfully update!", {
                        position: "top-left",
                        closeOnClick: true
                    });
                    this.setState({consave:true});
                    return response.json();
                }else if(response.status === 401){
                    toast.error("Username already exists!", {
                        position: "top-left",
                        closeOnClick: true
                    });
                    this.setState({consave:false});                    
                    throw new Error('Username already exists!\n' + response.statusText);
                }
                else {
                    toast.error("Failed ", {
                        position: "top-left",
                        closeOnClick: true                        
                    });
                    this.setState({consave:false});
                    console.log(this.state.consave);
                    throw new Error('Failed .\n' + response.statusText);
                }                

            })
            .then(response => alert(response))
            .catch( err => console.log(err));
                         

        }    

    }


    handleShowupdate = () => {
        let check=validbool(this.state.name,this.state.lastname,
            this.state.username,this.state.email);
        if(check)
        {            
        this.setState({ showupdate: !this.state.showupdate});
        }
    };
    handleShowinfo = () => {
        let check=validbool(this.state.name,this.state.lastname,
            this.state.username,this.state.email);
        if(check)
        {            
        this.setState({ showinfo: !this.state.showinfo});
        }
    };
    handleChangename =(event) =>{
        const name=event.target.value;
        this.setState({name});
    } 
    
    handleChangelastname =(event) =>{
        const lastname=event.target.value;
        this.setState({lastname});
    }

    handleChangeusername =(event) =>{
        const username=event.target.value;
        this.setState({username});
    }

    handleChangebio =(event) =>{
        const bio=event.target.value;
        this.setState({bio});
    }

    handleChangeEmail =(event) =>{
        const email=event.target.value;
        this.setState({email});
    }

    handleShowCV = ()=>{
        this.setState({showcv : true})
        this.setState({showbloge : false})
    }
    handleShowBlog = ()=>{
        this.setState({showcv : false})
        this.setState({showbloge : true})
    }

    
    render() {
        let update = null;
        let info= null;
        let name=this.state.name;
        let lastname=this.state.lastname;
        let username=this.state.username;
        let bio=this.state.bio;
        let email=this.state.email;
        let consave=this.state.consave;
        let t=true;
        let blogComponent = null;
        let cvvomponent=null;

        let errors = {};
        errors=validProfile(name,lastname,username,email);        
        
        const handleSubmit = async event=> {       
            event.preventDefault();       
        };

        if(this.state.showbloge){
            blogComponent=(
                <><Blog/></>
            );
        }
        if(this.state.showcv){
            cvvomponent=(
                <><CV/></>
            );
        }



        if(this.state.showinfo && consave)
        {
            info=(
                <>
                    <div className="info_content">
                        <div className="info name5">{name+" "+lastname}</div>
                        <div className="info usernam5">{username}</div>
                        <div className="info bio5">{bio}</div>
                    </div>

                    <div className="btn5_container">
                        <button type="submit" className="btn5" onClick={()=>{this.handleShowupdate(); this.handleShowinfo();}} >Edit profile</button>
                        {update}
                    </div>
                </>

            );
        }
        else{
            t=false
       }



        if(this.state.showupdate || t===false){
            update=(
            <>
            <div className="main_body6">
                <form className="form6"  onSubmit={handleSubmit}>
                    <input type="text" placeholder="Firstname" value={name} onChange={this.handleChangename} className="namepro6"/>
                    <div className="check6">
                    {errors.name && <p>{errors.name}!</p>}
                    </div>
                    <input type="text" placeholder="Lastname" value={lastname} onChange={this.handleChangelastname} className="lastpro6"/>
                    <div className="check6">
                    {errors.lastname && <p>{errors.lastname}!</p>}
                    </div>
                    <input type="text" placeholder="Username" value={username} onChange={this.handleChangeusername} className="userpro6"/>
                    <div className="check6">
                    {errors.username && <p>{errors.username}!</p>}
                    </div>
                    <input type="text" placeholder="Email" value={email} onChange={this.handleChangeEmail} className="email6"/>
                    <div className="check6">
                    {errors.email && <p>{errors.email}!</p>}
                    </div>
                    <textarea type="text" placeholder="Bio" value={bio} onChange={this.handleChangebio} className="biopro6"/>
                    
                </form>
                <div>
                    <button className="btn6" onClick={()=>{this.handleShowupdate(); this.handleShowinfo(); this.profilerequest() }}>save</button>
                </div>
                  
            </div>
            </>
            );
        }



        return(
            <div>
                <Navbar3/>
                <div className="main_part">
                    <div className="profile">

                        <div className="img5" >
                            <Img/>
                        </div>
                        {info}
                        {update}
                    </div>
                    <div className="comppnent_aprt">
                        <div className="comppnent_aprt_btn_div">
                            <button className="btn5" onClick={()=>this.handleShowCV()}>show cv</button>
                            <button className="btn5" onClick={()=>this.handleShowBlog()}>show blog</button>
                        </div>
                        <div className="comppnent_aprt_mainPart">
                            {cvvomponent}
                            {blogComponent}
                        </div>

                    </div>
                </div>

            </div>

        );
    }
} 
export default profileuser ;


