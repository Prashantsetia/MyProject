import React, {useState } from "react";
import {useNavigate} from 'react-router-dom';
// import {register} from "../api/auth"

const Register = () => {
  let navigate = useNavigate()

    const [credentials, setCredentials] = useState({firstname: "", lastname: "", phone:"", email: "", password: "", cpassword: ""})

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const {firstname, lastname, phone, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstname, lastname, phone, email, password})
        })
        const json = await response.json()
        console.log(json);
        if(json.success) {
            localStorage.setItem('token', json.authtoken)
            navigate('/login')
        }
        else{
            alert("Invalid credentials")
        }
    }

    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }


    const formstyle = {
    "background": "#ffd4d4",
    /* color: aliceblue; */
    "padding": "20px",
    "border-radius": "20px",
    "box-shadow": "10px 10px 10px grey"
  }
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit} style={formstyle}>
    <img src="https://www.like4like.org/img/login/register.png" alt="" style={{width:'30%',display:"block",margin:"auto"}}/>
            <h2 style={{textAlign:"center"}}>Register</h2>
            <div className="form-group">
              <input
                type="firstname"
                className="form-control"
                id="firstname"
                name="firstname"
                value={credentials.firstname}
                placeholder="Your first name"
                onChange={onChange}
                autoFocus
              />
            </div>

            <div className="form-group">
              <input
                type="lastname"
                className="form-control"
                id="lastname"
                name="lastname"
                value={credentials.lastname}
                placeholder="Your Last name"
                onChange={onChange}
                autoFocus
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={credentials.phone}
                placeholder="Your Mobile number"
                onChange={onChange}
                autoFocus
              />
            </div>

            
            Gender:
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Male 
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Female
              </label>
            </div>

            <div className="form-group">
              {/* <input
                type="text"
                name="email"
                className="form-control"
                value={email}
                onChange={onChange}
                placeholder="Your email"
                autoFocus
              /> */}
              <input type="email" className="form-control" id="email" name="email" value={credentials.email} aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange}/>
            </div>

            <div className="form-group">
              {/* <input
                type="password"
                name="password"
                className="form-control"
                // value={password}
                onChange={onChange}
                placeholder="Your password here"
              /> */}
              <input type="password" className="form-control" id="password" name="password" value={credentials.password} placeholder="Password" onChange={onChange} required/>
            </div>

            <div className="form-group">
            <input type="password" className="form-control" id="cpassword" name="cpassword" placeholder="Confirm Password" 
            onChange={onChange} required/>
            </div>

            <br />
            {/* <button
              onClick={handleSubmit}
              type="primary"
              className="mb-3 btn btn-primary"
            > */}
            <button type="submit" className="btn btn-primary my-1">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
