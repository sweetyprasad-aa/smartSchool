import React, { useState } from "react";
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Admin = ()=>{
    const navigate = useNavigate();
    const [admin, setAdmin] = useState({
        username:"",
        password:""
    });
    const adminData = (e)=>{
        setAdmin({...admin, [e.target.name]:e.target.value});
    }
    const [responseMessage, setNewResponseMessage] = useState("");
    const Response = "login successfully";

    const Login = (e)=>{
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/login/', admin)
        .then((response) =>{
            console.log(response.data.message);

            setNewResponseMessage(response.data.message);
            
            // Clear the form fields after successfully login
            setAdmin({
                username: "",
                password: ""
            });
            if(Response === 'login successfully'){
        navigate('/header')
    }
            // if(response.data.message === "Login successfully"){
            //     navigate("./header")
            // }
        }).catch((err) =>{
            console.error(err);
        });
    }


    return(
        <> 
            <form className="mt-5" onSubmit={Login}>
                <div className="row form-div">
                    <div className="col-sm-6 form-div-column">
                        <div>
                            <h2 className="mt-2 text-center">Admin Login</h2>
                            <hr className="hr-line"/>
                        </div>
                        <div className="mb-3 mt-5">
                            <label htmlFor="uname">username</label>
                            <input type="text" value={admin.username} name="username" onChange={adminData} className="form-control"/>
                            {responseMessage && <p>{responseMessage}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pswd">Password</label>
                            <input type="password" value={admin.password} name="password" onChange={adminData} className="form-control" />
                        </div>
                        <RouterLink to="/forgotpassword"><p>Forgot Password ?</p></RouterLink>
                        <button type="submit" className="btn btn-primary mx-2">Login</button>
                        <button type="button" className="btn btn-primary mx-2" onClick={(e)=>navigate("/button")}>Back</button>                       
                    </div>
                </div>
            </form>
        </>
    )
}
export default Admin;