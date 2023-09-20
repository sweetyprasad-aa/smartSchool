import React from "react";
import './Banner.css';
import {Link} from 'react-scroll';
import bannerImg from '../../assets/images/banner.jpg';
import bannerImg2 from '../../assets/images/bg2.jpg';
import avatar1 from '../../assets/images/admin.png';
import avatar2 from '../../assets/images/student1.png';
import avatar3 from '../../assets/images/teacher.png';

const Banner = ()=>{
    return(
        <>
            {/* <!-- Carousel --> */}
            <div id="demo" className="carousel slide" data-bs-ride="carousel">

            {/* <!-- Indicators/dots --> */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                </div>
            
            {/* <!-- The slideshow/carousel --> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={bannerImg} alt="img" className="d-block" width={'100%'} />
                        <div className="carousel-caption banner-content">
                            <h3>Vision</h3>
                            <p>School vision statements outline a school’s values and objectives. They provide parents and the community a brief but clear overview of the overall ethos of the school. On the other hand, school mission statements explain what the school is currently doing to achieve its vision.</p>
                            <Link className="btn banner-btn">Take Addmission</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bannerImg2} alt="img" className="d-block" width={'100%'} />
                        <div className="carousel-caption banner-content">
                            <h3>Mission</h3>
                            <p>The Vision of BGSNPS is to provide opportunities to create Global Citizens and Leaders of tomorrow through traditional values of love,empathy, discipline and respect And to train the skills required for successful interaction with other individuals</p>
                            <Link className="btn banner-btn">Open Addmission</Link>
                        </div> 
                    </div>
                    
                </div>
            
            {/* <!-- Left and right controls/icons --> */}
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
            </div>
 
            {/*----------card-------- */}
            <div className="container mt-5">
                <h2 className="text-center text-uppercase">Profiles</h2>
                <div className="d-flex justify-content-evenly align-items-center mt-5">
                    <div className="card card-div" >
                    <img className="card-img-top" src={avatar1} alt="img" />
                    <div className="card-body text-center">
                        <h4 className="card-title">Admin</h4>
                        <a href="/" className="btn card-btn">View Profile</a>
                    </div>
                </div>
                <div className="card card-div" >
                    <img className="card-img-top" src={avatar2} alt="img" />
                    <div className="card-body text-center">
                        <h4 className="card-title">Faculty</h4>
                        <a href="/" className="btn card-btn">View Profile</a>
                    </div>
                </div>
                <div className="card card-div" >
                    <img className="card-img-top" src={avatar3} alt="img" />
                    <div className="card-body text-center">
                        <h4 className="card-title">Students</h4>
                        <a href="/" className="btn card-btn">View Profile</a>
                    </div>
                </div>  
                </div>
            </div>

        </>
    )
}
export default Banner;