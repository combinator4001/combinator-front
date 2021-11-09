import React, {Component} from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

var x = window.matchMedia("(min-width: 800px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
function myFunction (x) {
    if (x.matches)
    {    // If media query matches
        var header=document.getElementsByClassName("header_body");
        var dropdw=document.getElementsByClassName("dropdown-content");
        var logo=document.getElementsByClassName("navbar_logo_size_js");

        window.onscroll = function ()
        {
            "use strict";
            if (document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400  )
            {
                header[0].style.backgroundColor="rgb(17,17,17)";
                header[0].style.height="50px";
                dropdw[0].style.top="50px"
                logo[0].style.width="60%";
            }
            else {
                header[0].style.backgroundColor="#22252E";
                header[0].style.height="80px";
                dropdw[0].style.top="80px"
                logo[0].style.width="80%";
            }
        }
    }
}


function open_navbar_mobile() {
    let each_option=document.getElementsByClassName("navbar_js");
    //console.log(each_option[0]);
    if (each_option[1].classList.value.includes("each_link_div")) {
        for (let i = 1; i < 3; i++) {
            //console.log("1");
            each_option[i].classList.remove("each_link_div");
            each_option[i].classList.add("mobile_each_navbar_link");
        }
    }
    else {
        for (let i = 1; i < 3; i++) {
            //console.log("2");
            each_option[i].classList.remove("mobile_each_navbar_link");
            each_option[i].classList.add("each_link_div");
        }
    }
}

function Navbar () {
        return (
            <>
            <div>
                <div className="max_width_justify">
                    <div className="header_body">
                        <div className="header_inside">
                            <div className="header_right_side">
                                <div onClick="open_navbar_mobile()" className="mobile_header_menu"><i
                                    className="fa fa-bars"></i>
                                </div>
                                <div className="each_link_div navbar_js ">
                                    <img className="navbar_logo_size_js"
                                         src="logo.png"
                                         alt=""></img>
                                </div>

                                <div className="each_link_div navbar_js dropdown_div">
                                    <button className="drop_down_button">personal info
                                        <i className="fa fa-caret-down"></i>
                                    </button>
                                    <div className="dropdown-content">
                                        <a href="">edit</a>
                                        <a href="">delete account</a>
                                    </div>
                                </div>

                                <div className="each_link_div navbar_js">
                                    <a href="/coming"><p> CV Builder</p></a>
                                </div>
                            </div>

                            <div className="header_left_side">
                                <div id="signup" className="header_button each_left_side_div">
                                    <a href="">
                                        <button className="signup_button">logout</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
}



export default Navbar;