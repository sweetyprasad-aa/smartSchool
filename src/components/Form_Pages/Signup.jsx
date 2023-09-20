import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ()=>{
   const navigate = useNavigate()
    const [newUser, setNewUser] = useState({
        username:"",
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        confirm_password:""
    })

    const userSignup = (e)=>{
        setNewUser({...newUser, [e.target.name]:e.target.value});
    }

    // const [responseMessage, setNewResponseMessage] = useState("");
    // if(responseMessage === "User Register successfully, please login again"){
    //     navigate("/adminlogin");
    // }

    const SignUp = (e)=>{
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/signup/', newUser)
        .then((response)=>{
            console.log(response.data.message);
            
            // Set the response message in the state variable
            // setNewResponseMessage(response.data.message);

            //clear the field after form submit
            setNewUser({
                username:"",
                first_name:"",
                last_name:"",
                email:"",
                password:"",
                confirm_password:""
            })
        })
        .catch((err) =>{
            console.error(err);
        })
        // console.log(newUser);
    }
    return(
        <>
            <form className="mt-5" onSubmit={SignUp}>
                <div className="row form-div">
                    <div className="col-sm-6 form-div-column">
                        <div>
                            <h2 className="mt-2 text-center">Signup</h2>
                            <hr className="hr-line"/>
                        </div>
                        <div className="mb-3 mt-4">
                            <label htmlFor="uname">UserName</label>
                            <input type="text" value={newUser.username} name="username" onChange={userSignup} className="form-control"/>
                            {/* {responseMessage && <p>{responseMessage}</p>} */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" value={newUser.first_name} name="first_name" onChange={userSignup} className="form-control"/>
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" value={newUser.last_name} name="last_name" onChange={userSignup} className="form-control"/>
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="email">email</label>
                            <input type="text" value={newUser.email} name="email" onChange={userSignup} className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pswd">Password</label>
                            <input type="password" value={newUser.password} name="password" onChange={userSignup} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cpswd">Confirm Password</label>
                            <input type="password" value={newUser.confirm_password} name="confirm_password" onChange={userSignup} className="form-control" />
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary mx-2" onClick={(e)=>navigate("/forgotpassword")}>Back</button>
                            <button type="submit" className="btn btn-primary mx-2">Submit</button>
                        </div>
                        
                    </div>
                </div>
            </form>

        </>
    )
}
export default Signup;