import Login from './component/Login/Login';
import './App.css';
import React  from 'react';
import {useSelector } from 'react-redux';
import {login, selectuser, signUp} from './features/userSlice';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormSignup from "./component/Sign Up/FormSignup";
import ForgetPass from './component/ForgetPass/ForgetPass'
import FormSignupCompany from './component/SignUpCompany/FormSignupCompany';
import profileuser from './component/profile-user/Profileuser';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Changepass from './component/ForgetPass/Changepass';


const App =()=> {
  const user = useSelector(selectuser);

  
  return (
      
  <Router>
    <div>
    <ToastContainer/>
      <switch>
        <Route exact path="/" component={Login} />
        <Route path="/person" component={FormSignup} />
        <Route path="/company" component={FormSignupCompany} />
        <Route path="/forgetpassword" component={ForgetPass} />
        <Route path="/profileuser" component={profileuser} />
        <Route path="/reset/token" component={Changepass} />
      </switch>
    </div>
  </Router>
  
  
    )
}

export default App;
