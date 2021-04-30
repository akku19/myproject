import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from './img/1.jpg';
import image2 from './img/2.jpg';
import image3 from './img/4.jpg';

class Sliders extends Component{
    render(){
        return <Carousel>
        <div>
            <img src={image1} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={image2}/>
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={image3} />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
    }
}

export default Sliders;