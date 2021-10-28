import Login from './component/Login/Login';
import './App.css';
import React  from 'react';
import {useSelector } from 'react-redux';
import {login, selectuser, signUp} from './features/userSlice';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormSignup from "./component/Sign Up/FormSignup";
import Logout from './component/Logout/Logout';
import ForgetPass from './component/ForgetPass/ForgetPass'
import Notfound from './component/Notfound/Notfound'
import FormSignupCompany from './component/SignUpCompany/FormSignupCompany';

const App =()=> {
  const user = useSelector(selectuser);

  
  return (
  
  <Router>
    <div>
      <switch>
        <Route exact path="/" component={Login} />
        <Route path="/FormSignup" component={FormSignup} />
        <Route path="/signupcompany" component={FormSignupCompany} />
        <Route path="/forgetpassword" component={ForgetPass} />
        <Route component={Notfound} />

      </switch>
    </div>
  </Router>
    )
}

export default App;
