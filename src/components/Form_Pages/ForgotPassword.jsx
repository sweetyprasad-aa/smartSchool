import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = ()=>{
    const navigate = useNavigate();
    const [forgotPassword, setForgotPassword] = useState({
        email:""
    })
    // State variable for response message
    const [responseMessage, setResponseMessage] = useState(""); 


    const forgetPassword = (e)=>{
        setForgotPassword({...forgotPassword, [e.target.name]:e.target.value});
    }
    const changePassword = (e)=>{
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/forgetPassword/', forgotPassword)
        .then((response) =>{
            console.log(response.data.message);
            
            // Set the response message in the state variable
                setResponseMessage(response.data.message);

            //clear the field after form submit
            setForgotPassword({
                email:""
            })

        }).catch((err) =>{
            console.error(err);
        })
    }


    return(
        <>
            <form className="mt-5"  onClick={changePassword}>
                <div className="container">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                        <div className="col-sm-5 form-div-column p-4">
                            <div><h3>Forgot Password</h3></div>
                            <div className="mb-3 mt-4">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" value={forgotPassword.email}  className ="form-control" placeholder="enter your email"  onChange={forgetPassword}/>
                                {responseMessage && <p>{responseMessage}</p>}
                                <div className="mt-3">
                                    <button type="submit" className="btn btn-primary">Next</button>
                                <button type="button" className="btn btn-primary mx-2" onClick={(e)=>navigate("/adminlogin")}>Back</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}
export default ForgotPassword;