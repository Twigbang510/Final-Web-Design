import axios from 'axios';
import React,{useRef, useState} from 'react'
import { Link,  useNavigate } from "react-router-dom";
import "./Register.css"

const Register = () => {
    const userName = useRef()
    const userEmail = useRef()
    const userPassword = useRef()
    const confirmPassword = useRef()
    const navigate = useNavigate()
    const handleRegister = async(e) => {
        e.preventDefault()
        if (userPassword.current.value === confirmPassword.current.value) {
            //   setUser();
            console.log({
              name: userName.current.value,
              email: userEmail.current.value.toString(),
              password: userPassword.current.value.toString(),
            });
            try {
              const res = await axios.post("http://dev.thanqminh.com:3000/auth", {
                name: userName.current.value,
                email: userEmail.current.value.toString(),
                password: userPassword.current.value.toString(),
              });
              console.log(res.data);
              navigate('/login');
            } catch (err) {
              console.log(err);
            }
          } else {
            console.log("please enter exactly confirm password");
          }
    }
  return (
      <div className='register__detail'>
        <div className="container">
        <div className="form">
          <div className="content">
              <h1>Register</h1>
              <div className="group">
                  <input
                      type="text"
                      id="fullname-reg"
                      className="inputText"
                      placeholder="&nbsp;"
                      ref={userName}
                      required
                  />
                  <label htmlFor="fullname-reg">Full Name</label>
              </div>
              <div className="group">
                  <input
                      type="text"
                      id="email-reg"
                      className="inputText"
                      placeholder="&nbsp;"
                      ref={userEmail}
                      required
                  />
                  <label htmlFor="email-reg">Email</label>
              </div>
              <div className="group">
                  <input
                      type="password"
                      id="pass-reg"
                      className="inputText"
                      placeholder="&nbsp;"
                      ref={userPassword}
                      required
                  />
                  <label htmlFor="pass-reg">Password</label>
              </div>
              <div className="group">
                  <input
                      type="password"
                      id="repass-reg"
                      className="inputText"
                      placeholder="&nbsp;"
                      ref={confirmPassword}
                      required
                  />
                  <label htmlFor="repass-reg">Confirm Password</label>
              </div>
              <div className="checkbox">
                  <label>
                      {" "}
                      <input type="checkbox" />I have read and agree
                  </label>
                  {/* <input type="checkbox">I have read and agree</input> */}
                  <Link href="">Privary Policy</Link> ,{" "}
                  <Link href="">Term of service</Link> and{" "}
                  <Link href="">User Agreement</Link> .
              </div>
              <Link href="" 
                className="btn btn__link"
                onClick={handleRegister}
              >
                  Register
              </Link>
          </div>
          </div>
        </div>
      </div>
  )
}

export default Register
