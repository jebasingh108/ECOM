import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {

  let navigate =useNavigate()
  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleFooter=()=>{
    const footersection=document.getElementById("footer-section");
    if(footersection){
      footersection.scrollIntoView({behavior:"smooth"})
    }
    console.log(footersection)
  }
 const handleProducts=()=>{
  const productssection=document.getElementById("products-section");
  if(productssection){
    productssection.scrollIntoView({behavior:"smooth"})
    console.log(productssection)
  }
 }
  

  return (
    <div className='row m-0'>
      <nav className="navbar1 navbar navbar-expand-lg bg-body-tertiary col-lg-12 col-md-6 col-sm-6 col-6  ">
        <div className="container-fluid ">
          <a className="navbar-brand col-md-6 col-sm-6 col-6" href="#">KENANI NURSERY</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" onClick={handleAboutClick} aria-current="page" href="#">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleProducts}  href='#' >PRODUCTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleFooter} href="#">CONTACT US</a>
              </li>
              <li className="nav-item">
                <Link to='/Cart'><i className="fa-solid fa-cart-shopping cartlogo"></i></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav; 