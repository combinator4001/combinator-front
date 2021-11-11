import './profile.css'
import React, { useEffect, useState } from 'react';
import Navbar3 from '../navbar3/Navbar3'
import CV from "../CV/CV"
import Blog from "../Blog/Blog";
import {Route} from "react-router-dom";


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
        username:"@fati",
        bio:null ,
        condition:1
    };

    handleShowupdate = () => {
        this.setState({ showupdate: !this.state.showupdate});
    };
    handleShowinfo = () => {
        this.setState({ showinfo: !this.state.showinfo});
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




    render() {
        let update = null;
        let info= null;
        let name=this.state.name;
        let lastname=this.state.lastname;
        let username=this.state.username;
        let bio=this.state.bio;


        if(this.state.showinfo)
        {
            info=(
                <>

                    <div className="info name5">{name+" "+lastname}</div>
                    <div className="info usernam5">{username}</div>
                    <div className="info bio5">{bio}</div>
                    <button type="submit" className="btn5" onClick={()=>{this.handleShowupdate(); this.handleShowinfo();}} >Edit profile</button>
                    {update}
                        
                </>

            );
        }


        if(this.state.showupdate){
            update=(
            <>
            <div className="main_body6">
                <form className="form6">
                    <input type="text" placeholder="Firstname" value={name} onChange={this.handleChangename} className="namepro6"/>
                    <input type="text" placeholder="Lastname" value={lastname} onChange={this.handleChangelastname} className="lastpro6"/>
                    <input type="text" placeholder="Username" value={username} onChange={this.handleChangeusername} className="userpro6"/>
                    <input type="text" placeholder="Bio" value={bio} onChange={this.handleChangebio} className="biopro6"/>
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

                        <div className="img5" ></div>
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
