import {React,useState} from "react";
import "./login.css";


import Logo from '../assets/images/app.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [showPassword,setshowPassword]= useState(false);
  return (
    <div className="loginContainer-parent-login">
    <div className="loginContainer-login">

      <div className="logo-login"><img src={Logo} alt="" style={{ width: '50px', height: 'auto' ,     borderRadius: '10px' }}></img></div>
      <div className="inputFields-login">
        <input className="inputField-login" placeholder="Email or Phone Number"></input>
       <div className="passwordVisibilityToggle">
        <input  type={showPassword ? 'text':'password'} className="inputField-login" placeholder="Password"></input>
       
       {showPassword ?(
        <VisibilityOffIcon onClick={() => setshowPassword(false)} className="login-visibilityoffIcon" />
       ):(
        <VisibilityIcon onClick={() => setshowPassword(true)} className="login-visibilityIcon" />
       )} 
       
       
        </div>

      </div>
      <div className="keptcha-login">keptcha</div>
      <div className="loginButton-login">login</div>
      <div className="forgotSignUp-login">
        <p className="forgotPassword-login">Forgot Password?</p>
        <p className="signUp-login">Sign Up</p>
      </div>
      <div className="googleLogin-login">Google</div>
    </div>

    </div>
  );
};

export default Login;
