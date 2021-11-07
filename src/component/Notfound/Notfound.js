import React , {useState} from 'react';
import './Notfound.css';
import {useSelector , useDispatch} from 'react-redux';
import url from '../../variables';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const Notfound =() => {

  return (
    <>
    <div className="main_body1">
    <div className="container1">
        <div className="title1">Sorry,I cant find this page:(</div>

    </div>
    </div>
      
    </>
  );
}


export default Notfound;