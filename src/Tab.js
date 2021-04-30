import react from 'react';

function Tab(props) {
    
    return  (
      
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="plants-box">
               <figure><img src={props.src} alt="img"/></figure>
               <h3> {props.heading}</h3>
               <p>{props.subheading}</p>
            </div>
         </div>
        

        
    
    );
}

export default Tab;