import React, { Component } from 'react';
import "./Style.css";
import logo from './logo.png';
import bg from './banner.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';



class Menu extends Component{
 render(){
     return <div> 
        <div className="row">
           <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div className="full">
                 <div className="center-desk">
                    <div className="logo"><a href="index.html"><img src={logo}  alt="logo" /></a></div>
                 </div>
              </div>
           </div>
           <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <div className="menu-area">
                 <div className="limit-box">
                    <nav className="main-menu">
                       <ul className="menu-area-main">
                          <li className="active"> <a href="#">Home</a> </li>
                          <li> <a href="#about">About</a> </li>
                          <li><a href="#plant">Plant</a></li>
                          <li><a href="#gallery">Gallery</a></li>
                          <li><a href="#contact">Contact Us</a></li>
                          <li className="last"><a href="#"><FontAwesomeIcon icon={ faSearch } /></a></li>
                       </ul>
                    </nav>
                 </div>
              </div>
           </div>
       
  </div>  
  </div>
  
 }

}
export default Menu;