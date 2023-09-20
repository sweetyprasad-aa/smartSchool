import React from "react";
import {Link as RouterLink} from 'react-router-dom';

const Button = ()=>{
    return(
        <>
            <div className="container mt-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-6 text-center form-div-column p-4">
                        <h2>Smart School</h2>
                        <div className="mt-3">
                            <RouterLink to="/adminlogin" exact="true">
                                <button className="btn btn-primary mx-2">Login</button>
                            </RouterLink>
                            <RouterLink to="/signup" exact="true">
                                <button className="btn btn-primary mx-2" >Sign up</button>
                            </RouterLink>   
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Button;