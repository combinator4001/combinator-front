import React, {Component} from 'react';
import './navbar.css';
import PropTypes from 'prop-types';

function Navbar () {
        return (
            <>
            <div>
                <ul className="ul1" id="#top">
                    <li className="li1">
                        <a href="#top" className="topnave_a">top</a>
                    </li>
                    <li className="dropdown li1">
                        <a href="javascript:void(0)" className="topnave_a">cv builder</a>
                    </li>

                    <li className="dropdown li1"><a href="javascript:void(0)" className="dropbtn">personal info</a>
                        <div className="dropdown-content">
                            <a href="#">edit</a>
                            <a href="#">delete account</a>
                        </div>
                    </li>

                </ul>
            </div>
            </>
        );
}



export default Navbar;