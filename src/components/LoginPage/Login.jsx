import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const userEmail = useRef();
  const userPassword = useRef();

  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://dev.thanqminh.com:3000/auth/sign_in",
        {
          email: userEmail.current.value.toString(),
          password: userPassword.current.value.toString(),
        }
      );
      console.log(res);
      localStorage.setItem(
        "task-user",
        JSON.stringify({
          dataUser: res.data,
          uid: res.headers["uid"],
          access_token: res.headers["access-token"],
          client: res.headers["client"],
        })
      );
      console.log(JSON.parse(localStorage.getItem("task-user")));
      navigate('/listPage');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login_details">
      <div>
        <h1 className="tittle">Welcome! <br/> Let's Started!!</h1>
      </div>
      <div className="container">
        <div className="form login" id="form">
          <div className="content">
            <h1 className="tittle ">Login</h1>
            <div className="group">
              <input
                type="text"
                id="email-login"
                className="inputText"
                placeholder="&nbsp;"
                ref={userEmail}
                required
              />
              <label htmlFor="email-login">Email</label>
            </div>
            <div className="group">
              <input
                type="password"
                id="pass-login"
                className="inputText"
                placeholder="&nbsp;"
                ref={userPassword}
                required
              />
              <label htmlFor="pass-login">Password</label>
            </div>
            <div className="group_regisLink">
              <Link to="/register">
                <div className="regis__link">
                  Sign up?
                </div>
              </Link>
              <Link className="diglog_btn" href="#my_dialog">
                Forgot the password ?
              </Link>
            </div>

            <Link 
              href="" 
              className="btn btn__link"
              onClick={handleSignin}
            >
              Login
            </Link>
            
          </div>
        </div>
        <div className="dialog overlay" id="my_dialog">
          <div className="dialog_body">
            <Link className="dialog_close_btn" href="#">
              &times;
            </Link>
            <div>
              <i className="fa-solid fa-key"></i>
              <h4>FORGOT THE PASSWORD?</h4>
              <h4>Don't worry! We will send you intructions</h4>
              <label>Email</label>
              <input type="text" className="" />
              <button>Reset password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
