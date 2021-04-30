import React, { Component } from 'react';
import image1 from './img/1.jpg'
import image2 from './img/2.jpg';
import image3 from './img/3.jpg'
import image4 from './img/4.jpg';
import image5 from './img/5.jpg'
import image6 from './img/6.jpg'

class Gallery extends Component{
 
    render(){
      console.log(this.props.name,'yes');
        return <div className="gallery" id="gallery">
            <div className="container">
                <div className="row">
                   <div class="titlepage">
                <h2>{this.props.name}</h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid margin-r-l">
               <div className="row">
                   <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 thumb">
                       <div className="Gallery-box">
                       <figure>
                     <a href={image1} class="fancybox" rel="ligthbox" >
                     <img src={image1} class="zoom img-fluid" alt=""/>
                     </a>
                     <span class="hoverle">
                     <a href={image1} class="fancybox" rel="ligthbox">View</a>
                     </span>  
                  </figure>
                       </div>
                   </div>
                   <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 thumb">
               <div class="Gallery-box">
                  <figure>
                     <a href={image2} class="fancybox" rel="ligthbox">
                     <img src={image2} class="zoom img-fluid" alt="" />
                     </a>
                     <span class="hoverle">
                     <a href={image2} class="fancybox" rel="ligthbox">View</a>
                     </span>
                  </figure>
               </div>
             
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 thumb">
            <div className="Gallery-box">
                  <figure>
                     <a href={image3} className="fancybox" rel="ligthbox">
                     <img src={image3} className="zoom img-fluid" alt=""/>
                     </a>
                     <span className="hoverle">
                     <a href={image3} className="fancybox" rel="ligthbox">View</a>
                     </span>
                  </figure>
               </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 thumb">
               <div className="Gallery-box">
                  <figure>
                     <a href={image4} class="fancybox" rel="ligthbox">
                     <img src={image4} class="zoom img-fluid transition" alt=""/>
                     </a>
                     <span className="hoverle">
                     <a href={image4} class="fancybox" rel="ligthbox">View</a>
                     </span> 
                  </figure>
               </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 thumb">
               <div className="Gallery-box">
                  <figure>
                     <a href={image5} className="fancybox" rel="ligthbox">
                     <img src={image5} className="zoom img-fluid" alt=""/>
                     </a>
                     <span className="hoverle">
                     <a href={image5} className="fancybox" rel="ligthbox">View</a>
                     </span> 
                  </figure>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
               <div className="Gallery-box">
                  <figure>
                     <a href={image6} className="fancybox" rel="ligthbox">
                     <img src={image6} className="zoom img-fluid" alt=""/>
                     </a>
                     <span className="hoverle">
                     <a href={image6} className="fancybox" rel="ligthbox">View</a>
                     </span>
                  </figure>
               </div>
            </div>
               </div>

            </div>
        </div>
    }
}

export default Gallery;