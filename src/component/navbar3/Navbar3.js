import React from "react";
import {  Link } from "react-router-dom";

import './navbar3.css'

function myFunction() {
    let x = document.getElementById("myTopnav")
    if (x.className === "topnav") {
        x.className += " responsive";
        console.log(1);
    } else {
        x.className = "topnav";
        console.log(2);
    }
}
function Navbar3()  {
    return (
        <>
            <div className="topnav" id="myTopnav">
                <div className="options">
                    <a href="#top" className="active">top</a>
                    <a ><Link to="/CV">CV Builder</Link></a>
                    <a ><Link to="/Blog">Blog</Link></a>
                </div>
            </div>
        </>
    );
}




export default Navbar3;
