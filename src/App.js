import Login from './component/Login/Login';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import FormSignup from "./component/Sign Up/FormSignup";
import ForgetPass from './component/ForgetPass/ForgetPass'
import FormSignupCompany from './component/SignUpCompany/FormSignupCompany';
import profileuser from './component/profile-user/Profileuser';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Changepass from './component/ForgetPass/Changepass';
import ProfileUser from './component/profileuser1/profileUser1';
import ProfileCompany from "./component/profileCompany/ProfileCompany";
import Dashboard from './component/Dashboard/Dashboard';
import DashboardCo from './component/DashboardCompany/Dashboard';
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import SendVerifyEmailLink from './component/email-verify/send-verify-email-link';
import VerifyEmail from './component/email-verify/verify-email';

const App =()=> {

  
  return (
      
  <Router>
    <div>
    <ToastContainer/>
      <switch>
        <Route exact path="/" component={SignIn}    />
        <Route path="/person" component={SignUp} />
        <Route path="/company" component={FormSignupCompany} />
        <Route path="/auth/password" component={ForgetPass} />
        <Route path="/profileuser" component={profileuser} />
        <Route path="/profileuser1"  component={ProfileUser}  />
        <Route path="/reset/:forgetPassToken" component={Changepass} />
        <Route path="/ProfileCompany" component={ProfileCompany} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/DashboardCompany" component={DashboardCo} />
        <Route path="/verify/send_email/" component={SendVerifyEmailLink} />
        <Route path="/verify/" component={VerifyEmail} />
      </switch>
    </div>
  </Router>
  
  
    )
}

export default App;
