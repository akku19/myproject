import react from 'react'

import axios from 'axios';
import Moment from 'moment';

const Datedifferance = () =>{

    function timeDiffCalc(dateFuture, dateNow) {
        let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;
    
        // calculate days
        const days = Math.floor(diffInMilliSeconds / 86400);
        diffInMilliSeconds -= days * 86400;
        //console.log('calculated days', days);
    
        // calculate hours
        const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
        diffInMilliSeconds -= hours * 3600;
        //console.log('calculated hours', hours);
    
        // calculate minutes
        const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
        diffInMilliSeconds -= minutes * 60;
        //console.log('minutes', minutes);
    
        let difference = '';
        if (days > 0) {
          difference += (days === 1) ? `${days} day, ` : `${days} days, `;
        }
    
        difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `;
    
        difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`; 
    
        return difference; 
      }
    
     
    
 const myfunction = async () =>{
    const res = await  axios.get('http://localhost:3001/api/admin/Allusers');
    //console.log(res.data);
    var dateNow= new Date();
    //console.log(dateNow);

     var date1 = Moment(dateNow).format('YYYY/MM/DD hh:mm A');
     //console.log(current);
    res.data.map((data)=>{
        if(data.createdAt){       
         var date2 = Moment(data.createdAt).format('YYYY/MM/DD hh:mm A')       
         console.log(timeDiffCalc(new Date(date2), new Date(date1)));    

        }
  
      })
 }   
     

    myfunction();
    return (
        
        <>
   { console.log('yes date')}
    </>
    )
}

export default Datedifferance;