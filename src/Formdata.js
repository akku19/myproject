import react, { useState } from 'react'
import axios from 'axios';


const Formdata = ()=>{
    const [titles,titledata] =useState('');
    const [descriptions,descriptiondata] = useState('');

    const title = (e)=>{    
        titledata(e.target.value);
    } 

    const description = (e)=>{
        descriptiondata(e.target.value);      
    }

    const datasubmit = async ()=>{
        if(titles!='' && descriptions!=''){
           console.log(`${titles} and description is ${descriptions}`);
          
           const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('http://localhost:5000/contact', requestOptions)
            .then(response => response.json())
            .then(data => '');
   
     
        
     
        }
    }
  
    return (
    <>    
    <div className="container">
        <div className="row">
            <div className="col-md-12">
            <h2 className="heading">Push Notification From</h2>
            <div className="form-group">
                <label>Title:</label>
                <input type="text" className="form-control" onChange={title} />
            </div>
            <div className="form-group">
                <label >Description:</label>
                <input type="text" className="form-control" onChange={description} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={datasubmit}>Submit</button>
            </div>
        </div>
    </div>
    </>
    )
}

export default Formdata;