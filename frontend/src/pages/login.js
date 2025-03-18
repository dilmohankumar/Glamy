import { React, useState, useEffect } from "react";
import "./login.css";

import Logo from "../assets/images/app.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SyncRoundedIcon from "@mui/icons-material/SyncRounded";

const Login = ({ onVerify }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("black");

  const [showPassword, setshowPassword] = useState(false);

  const generateCaptcha = () => {
    const ops = ["+", "-", "*"];
    const op = ops[Math.floor(Math.random() * ops.length)];
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;

    setNum1(n1);
    setNum2(n2);
    setOperator(op);
    setUserInput("");
    setMessage("");
  };

  const validateCaptcha = () => {
    let correctAnswer = 0;
    switch (operator) {
      case "+":
        correctAnswer = num1 + num2;
        break;
      case "-":
        correctAnswer = num1 - num2;
        break;
      case "*":
        correctAnswer = num1 * num2;
        break;
      default:
        break;
    }

    if (parseInt(userInput) === correctAnswer) {
      setMessage("Verified Successfully!");
      setMessageColor("green");
      if (typeof onVerify === "function") {
        onVerify(true);
      }
    } else {
      setMessage("Incorrect, Try Again!");
      setMessageColor("red");
      if (typeof onVerify === "function") {
        onVerify(false);
      }
    }
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="loginContainer-parent-login">
      <div className="loginContainer-login">
        <div className="logo-login">
          <img
            src={Logo}
            alt=""
            style={{ width: "50px", height: "auto", borderRadius: "10px" }}
          ></img>
        </div>
        <div className="inputFields-login">
          <div className="inputFieldContainer">
            <input
              className="inputField-login"
              placeholder="Email or Phone Number"
            ></input>
          </div>
          <div className="passwordVisibilityToggle">
            <input
              type={showPassword ? "text" : "password"}
              className="inputField-login"
              placeholder="Password"
            ></input>

            {showPassword ? (
              <VisibilityOffIcon
                onClick={() => setshowPassword(false)}
                className="login-visibilityoffIcon"
              />
            ) : (
              <VisibilityIcon
                onClick={() => setshowPassword(true)}
                className="login-visibilityIcon"
              />
            )}
          </div>
        </div>

        <div className="captchaContainer">
          <h5 className="captchaQuestion">
            {num1} {operator} {num2} =
          </h5>
          <input
            type=""
            placeholder="?"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="captchaInput"
          />
          <button onClick={generateCaptcha} className="captchaRefreshButton">
            <SyncRoundedIcon className="captchaRefreshIcon" />
          </button>
          <button onClick={validateCaptcha} className="captchaSubmitButton">
            Verify
          </button>
        </div>
        <div className="captchaMessageContainer">
          <p className="captchaMessage" style={{ color: messageColor }}>
            {message}
          </p>
        </div>

        <div className="loginButton-login" onClick={alert}>Sign in</div>
        <div className="forgotSignUp-login">
          <p className="forgotPassword-login">Forgot Password?</p>
          <p className="signUp-login">Sign Up</p>
        </div>
        <div className="signInWithContainer"><p className="signInWithText">or you can sign in with</p>
        <div className="googleLogin-login">G</div></div>
      </div>
    </div>
  );
};

export default Login;
