import React, { Component } from 'react';
import image from './img/map.jpg';
import image2 from './img/contactimg.jpg'
class Contact extends Component{
    render(){
        return(
        <>
         <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Conatct</a></li>
        </ul>
         <div className="contact" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Contact Us</h2>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 paddimg-right">
                  <div className="row">
                     <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <form>
                           <div className="row">
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                 <input className="form-control" placeholder="Name" type="text" name="Name"/>
                              </div>
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                 <input className="form-control" placeholder="Email" type="text" name="Email"/>
                              </div>
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                 <input className="form-control" placeholder="Phone" type="text" name="Phone"/>
                              </div>
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                 <textarea className="textarea>" placeholder="Message" type="text" name="Message"></textarea>
                              </div>
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                 <a href="#">Read More</a>
                              </div>
                           </div>
                        </form>
                     </div>
                     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="map_section">
                           <figure><img src={image} /></figure>
                        </div>
                     </div>
                 
                  </div>
               </div>
               <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 paddimg-left">
                  <div class="Nursery-img">
                     <figure>
                        <img src={image2} alt="img"/>
                        <div class="text-box">
                           <h3>Best Green Nursery</h3>
                        </div>
                     </figure>
                  </div>
               </div>
                    </div>
                </div>
               </div>
               </>
               )
    }
}

export default Contact;