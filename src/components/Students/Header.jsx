import React from "react";
import { BsJustify, BsSearch, BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle } from 'react-icons/bs';

const Header = ()=>{
    return(
        <>
            <header className="header">
                <div className="menu-icon">
                    <BsJustify  className="header-icon" />
                </div>
                <div className="header-left">
                    <BsSearch className="header-icon" />
                </div>
                <div className="header-right">
                    <BsFillBellFill className='header-icon'/>
                    <BsFillEnvelopeFill className='header-icon'/>
                    <BsPersonCircle className='header-icon'/>

                </div>
            </header>
        </>
    )
}
export default Header;