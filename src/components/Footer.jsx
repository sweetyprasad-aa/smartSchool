import React from 'react';
import { Link } from 'react-scroll';
import { BsFacebook , BsInstagram, BsTwitter, BsWhatsapp} from "react-icons/bs";


const Footer = () => {
  return (
    <>
      <footer className='mt-5 bg-dark'>
            <div className='container'>
                <div className='row text-white'>
                    <div className='col-sm-4 p-4'>
                        <div className='footer-div'>
                            <h3>About us</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                    </div>
                    <div className='col-sm-4 p-4'>
                        <div>
                            <ul className="d-flex flex-column">
                                <h3>Categories</h3>
                                <Link className='footer-list'>Courses</Link>
                                <Link className='footer-list'>About</Link>
                                <Link className='footer-list'>Career</Link>
                                <Link className='footer-list'>Contact</Link>
                                <Link className='footer-list'>Privacy</Link>
                            </ul>
                        </div>
                    </div>
                    <div className='col-sm-4 p-4'>
                        <h3>Follow Us</h3>
                        <div className="d-flex flex-column footer-icon">  
                            <BsFacebook  className="footer-icons"/>
                            <BsInstagram className="footer-icons"/>
                            <BsTwitter className="footer-icons"/>
                            <BsWhatsapp className="footer-icons"/>
                        </div>
                    </div>
                </div>
            </div>
      </footer>
    </>
  )
}

export default Footer
