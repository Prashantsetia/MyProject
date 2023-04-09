// import { useState } from "react";
// // import {login} from "../api/auth";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate()

    const [credentials, setCredentials] = useState({email: "", password: ""})

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        })
        const json = await response.json()
        console.log(json);
        if(json.success) {
            localStorage.setItem('token', json.authtoken)
            navigate('/')
        }
        else{
            alert("Invalid credentialss")
        }
    }

    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div className="container p-5">
      <div className="row">
        <div style={{height:'80vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" style={{width:'30%'}} alt="" />
        {/* </div> */}
        {/* <div className="col"> */}
          {/* <div className="row"> */}
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <h2>Login over here with</h2>
                <div className="form-group">
                <input type="email" className="form-control" id="email" name="email" value={credentials.email} aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange}/>
                </div>

                <div className="form-group">
                  <input type="password" className="form-control" id="password" name="password" value={credentials.password} placeholder="Password" onChange={onChange}/>
                </div>

                <br />
                <button
                  type="submit"
                  className="mb-3 btn btn-primary"
                >
                  Login with Email/Password
                </button>
              </form>
            </div>
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
    </div>
  );
};

export default Login;
