import React from 'react';
// import {Link } from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/school_logo.png';

const Navbar = ()=>{
    return(
        <>
            <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
                <div className='container-fluid'>
                    <RouterLink className='navbar-brand' to='/' exact="true" >
                        <img src={logo} alt="logo" className='logoImg' width={'20%'}/>
                    </RouterLink>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#myNavbarCollapseToggle' >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='myNavbarCollapseToggle'>
                        <ul className='navbar-nav'>
                            <RouterLink className='nav-link' to="/" exact="true" activeclassname="active">Home </RouterLink>
                            <RouterLink className='nav-link' to="/button" exact="true" activeclassname="active">Admin </RouterLink>
                            <RouterLink className='nav-link'>Faculty</RouterLink>
                            <RouterLink className='nav-link'>Student</RouterLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;