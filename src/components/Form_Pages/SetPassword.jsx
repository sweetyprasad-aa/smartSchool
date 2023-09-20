import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SetPassword = ()=>{
    const navigate = useNavigate();
    const [Password, setNewPassword] = useState({
        new_password:"",
        confirm_password:""
    })

    const setPasswords = (e)=>{
        setNewPassword({...Password,[e.target.name]:e.target.value})
    }
    const [responseMessage, setNewResponseMessage] = useState("");
    if(responseMessage === "Password set successfully, please login again"){
        navigate("/adminlogin")
    }

    const setPassword = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/setPassword/", Password)
        .then((response) =>{
            console.log(response.data.message);
            // Set the response message in the state variable
            setNewResponseMessage(response.data.message);
            // console.log(Password);
            // navigate("/success");

            // after submit fields will empty
            setNewPassword({
                new_password:"",
                confirm_password:""
            })
        }).catch((err) =>{
            console.error(err);
        })

    }
    return(
        <>
            <form className="mt-5" onSubmit={setPassword}>
                <div className="container">
                    <div className="row d-flex flex-column justify-content-center align-items-center p-4">
                        <div className="col-sm-5 form-div-column">
                            <div><h3>Set Password</h3></div>
                            <div className="mb-3 mt-4">
                                <label htmlFor="1">New Password</label>
                                <input type="password" name="new_password" value={Password.new_password} id="1" className="form-control" onChange={setPasswords} />
                                {responseMessage && <p>{responseMessage}</p>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cpswd">Confirm Password</label>
                                <input type="password" name="confirm_password" value={Password.confirm_password} className="form-control" onChange={setPasswords} />
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <button type="button" className="btn btn-primary mx-2" onClick={(e)=>navigate("/forgotpassword")}>Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default SetPassword;