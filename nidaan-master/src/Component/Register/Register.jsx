// <<<<<<< HEAD
// import React from 'react'
// import { Link } from 'react-router-dom'
// import registerVector from '../../Assets/registerVector.png'
// import googleIcon from '../../Assets/iconGoogle.svg'
// import mail from '../../Assets/mailGrey.svg'
// import key from '../../Assets/key.svg'
// import eye from '../../Assets/eye.svg'

// import './Register.css'

// const Register = () => {
//     return (
//         <div className='registerContainer' id='registerTop'>
//             <div className="registerFormContainer">

//                 <div className="registerHeader">
//                     <h1>Register Now!</h1>
//                     <p>Welcome to Nidaan, Please enter your details</p>
//                 </div>

//                 <div className="registerForm">

//                     <button><img src={googleIcon} alt="" />Continue with google</button>

//                     <div className="or">
//                         <hr />
//                         <p>Or</p>
//                         <hr />
//                     </div>

//                     <form className='register' action="">

//                         <div className="registerInputContainer" id='registerInputEmail'>
//                             <img src={mail} alt="" className='lIcon' />
//                             <input type="text" placeholder='Enter Your Email' />
//                         </div>

//                         <div className="registerInputContainer">
//                             <img src={key} alt="" className='lIcon' />
//                             <input type="password" placeholder='Enter Password' />
//                             <img src={eye} alt="" className='key' />
//                         </div>

//                         <div className="registerInputContainer">
//                             <img src={key} alt="" className='lIcon' />
//                             <input type="password" placeholder='Confirm Password' />
//                             <img src={eye} alt="" className='key' />
//                         </div>

//                         <button>Register Now</button>
//                     </form>

//                     <p className="switch">Alread have account? <Link to='/signin'>Sign in</Link></p>
//                 </div>

//             </div>

//             <div className="registerImg">
//                 <div className="imgText">
//                     <h4>Nidaan</h4>
//                     <p>One and only Advance AI healthcare Solution</p>
//                 </div>
//                 <img src={registerVector} alt="" />
//             </div>
//         </div>
//     )
// }

// export default Register
// =======
import React, { useEffect, useState } from "react";
import { Link, resolvePath } from "react-router-dom";
import axios from "axios";
import registerVector from "../../Assets/registerVector.png";
import googleIcon from "../../Assets/iconGoogle.svg";
import mail from "../../Assets/mailGrey.svg";
import key from "../../Assets/key.svg";
import eye from "../../Assets/eye.svg";
import { useDispatch } from "react-redux";
import { saveuser } from "../../features/User";
import { useSelector } from "react-redux";
import {
  GoogleOAuthProvider,
  googleLogout,
  useGoogleLogin,
  GoogleLogin,
} from "@react-oauth/google";
import "./Register.css";
import jwt_decode from "jwt-decode";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [errormessage, seterrormessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  let user = useSelector((state) => state.user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    if (userData.email && userData.password) {
      if (confirmpassword == password) {
        try {
          const response = await axios.post(
            "https://nidaanbackend.onrender.com/register",
            userData
          );
          const user = {
            email: response.data.email,
            token: response.data.token,
            type: response.data.type,
          };
          localStorage.setItem("user", JSON.stringify(user));
          dispatch(
            saveuser({
              email: response.data.email,
              token: response.data.token,
              type: response.data.type,
            })
          );
          window.location.href = "/";
        } catch (error) {
          console.error("Error sending data:", error.message);
          seterrormessage(error.response.data);
        }
      } else {
        seterrormessage("Passwords doesn't match");
      }
    } else {
      seterrormessage("Please enter email and password");
    }
  };

  return (
    <div className="registerContainer">
      <div className="registerFormContainer">
        <div className="registerHeader">
          <h1>Register Now!</h1>
          <p>Welcome to Nidaan, Please enter your details</p>
        </div>

        <div className="registerForm">
          <GoogleOAuthProvider clientId="656254641480-6jadrne2lpkdf4u4ldgq1vg9304lbpgo.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwt_decode(credentialResponse.credential);
                const decodeduser = {
                  email: decoded.email,
                  token: credentialResponse,
                };

                const register = async () => {
                  try {
                    const response = await axios.post(
                      "https://nidaanbackend.onrender.com/gauth",
                      decodeduser
                    );

                    const user = {
                      email: response.data.email,
                      token: response.data.token,
                      type: response.data.type,
                    };

                    const userJSON = JSON.stringify(user);
                    localStorage.setItem("user", userJSON);

                    dispatch(
                      saveuser({
                        email: user.email,
                        token: user.token,
                        type: user.type,
                      })
                    );

                    window.location.href = "/";
                  } catch (error) {
                    console.error("Error sending data:", error.message);
                    seterrormessage(error.response.data);
                  }
                };
                register();
              }}
              onError={() => {
                seterrormessage("signup failed");
              }}
            />
          </GoogleOAuthProvider>

          <div className="or">
            <hr />
            <p>Or</p>
            <hr />
          </div>
          <form className="register" action="">
            <div className="registerInputContainer" id="registerInputEmail">
              <img src={mail} alt="" className="lIcon" />
              <input
                type="text"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="registerInputContainer">
              <img src={key} alt="" className="lIcon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={eye}
                className={`key ${showPassword ? "show" : ""}`}
                onClick={togglePasswordVisibility}
                alt=""
              />
            </div>

            <div className="registerInputContainer">
              <img src={key} alt="" className="lIcon" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmpassword}
                onChange={(e) => setconfirmpassword(e.target.value)}
              />
              <img
                src={eye}
                alt=""
                className={`key ${showPassword ? "show" : ""}`}
                onClick={togglePasswordVisibility}
              />
            </div>
            <p className="register-error-message">{errormessage}</p>

            <button onClick={handleSubmit}>Register Now</button>
          </form>
          <p className="switch">
            Already have account? <Link to="/signin">Sign in</Link>
          </p>
        </div>
      </div>

      <div className="registerImg">
        <div className="imgText">
          <h4>Nidaan</h4>
          <p>One and only Advance AI healthcare Solution</p>
        </div>
        <img src={registerVector} alt="" />
      </div>
    </div>
  );
};

export default Register;
// >>>>>>> 0914021175b667caf2bffeb3c66fb886b8a68867
