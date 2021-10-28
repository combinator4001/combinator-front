import Login from './component/Login/Login';
import './App.css';
import React  from 'react';
import {useSelector } from 'react-redux';
import {login, selectuser} from './features/userSlice';
import FormSignup from "./component/Sign Up/FormSignup";

//import {signUp} from './actions/index';
import Logout from './component/Logout/Logout';
import ForgetPass from './component/ForgetPass/ForgetPass'
import FormSignupCompany from './component/SignUpCompany/FormSignupCompany';

const App =()=> {
  const user = useSelector(selectuser);
  /*return (<div>
    {user ? <Logout /> :<Login />}
  </div> )*/

  //return (<FormSignup /> )
  return (<FormSignup/> )
}

/*class App extends React.Component{
  
  render() {
     return <Login /> 
    //return <FormSignup />
  }
}*/

export default App;
