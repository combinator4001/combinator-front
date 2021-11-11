import './profile.css'
import Img from './ProfileImg'
import React, { useEffect, useState } from 'react';
import Navbar3 from '../navbar3/Navbar3'
import CV from "../CV/CV"
import Blog from "../Blog/Blog";
import {Route} from "react-router-dom";
import validProfile from "./validProfile";
import validbool from "./validbool";
import axios from 'axios';

const App = () => (
    <div>
        <div>
            <Route exact={true} path="/" component={Blog} />
            <Route exaxt path="/CV" component={CV} />
        </div>
    </div>
);
class profileuser extends React.Component {
    state={
        showupdate:false,
        showinfo:true,
        name:"Fatemeh",
        lastname:"Askari",
        username:"@fati1234",
        bio:null ,
        email:"Fatemeh@yahoo.com",
        condition:1,
    };


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

    
    render() {
        let update = null;
        let info= null;
        let name=this.state.name;
        let lastname=this.state.lastname;
        let username=this.state.username;
        let bio=this.state.bio;
        let email=this.state.email;
        let submit=this.state.submit;

        let errors = {};
        errors=validProfile(name,lastname,username,email);

        
        
        const handleSubmit = async event=> {       
            event.preventDefault();       
        };


        if(this.state.showinfo)
        {
            info=(
                <>

                    <div className="info name5">{name+" "+lastname}</div>
                    <div className="info usernam5">{username}</div>
                    <div className="info bio5">{bio}</div>
                    <div className="btn5_container">
                        <button type="submit" className="btn5" onClick={()=>{this.handleShowupdate(); this.handleShowinfo();}} >Edit profile</button>
                        {update}
                    </div>

                        
                </>

            );
        }


        if(this.state.showupdate){
            update=(
            <>
            <div className="main_body6">
                <form className="form6"  onSubmit={handleSubmit}>
                    <input type="text" placeholder="Firstname" value={name} onChange={this.handleChangename} className="namepro6"/>
                    {errors.name && <p>{errors.name}!</p>}
                    <input type="text" placeholder="Lastname" value={lastname} onChange={this.handleChangelastname} className="lastpro6"/>
                    {errors.lastname && <p>{errors.lastname}!</p>}
                    <input type="text" placeholder="Username" value={username} onChange={this.handleChangeusername} className="userpro6"/>
                    {errors.username && <p>{errors.username}!</p>}
                    <input type="text" placeholder="Email" value={email} onChange={this.handleChangeEmail} className="email6"/>
                    {errors.email && <p>{errors.email}!</p>}
                    <textarea type="text" placeholder="Bio" value={bio} onChange={this.handleChangebio} className="biopro6"/>
                    
                </form>
                <div>
                    <button className="btn6" onClick={()=>{this.handleShowupdate(); this.handleShowinfo();}}>save</button>
                </div>
                  
            </div>
            </>
            );
        }


        /*return (
            <div>
                <Navbar2 />
                <div>
                    <div className="main_body5">

                        <div className="img5" ></div>
                        {info}
                        {update}
                    </div>
                    <div>
                        <App></App>
                    </div>
                </div>

            </div>

        );*/

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
                        <CV/>
                    </div>
                </div>

            </div>

        );
    }
} 
export default profileuser ;


