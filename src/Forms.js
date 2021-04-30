import React, { useState } from 'react';

const Forms = ()=>{
    const[first,setname] = useState();
    const[last,setLast] = useState();
 

    const changeEvent = (event)=>{
        if(event.target.name=='Fname'){
            setname(event.target.value);
        } else{
            setLast(event.target.value);
        }
        return (   
            <> 
           

              
           </>    
        )
    }
 

    const formSubmit = ()=>{
        return(
           console.log(`first name ${first} and my last name ${last}`)
        )
    }
    return (
        <>
        <h1>Fill Form {first} {last}</h1>
        <input type="text" name="Fname" placeholder="enter your first name" onChange={changeEvent} />
        <input type="text" name="Lname" placeholder="enter your last name"  onChange={changeEvent}/>
        <button onClick={formSubmit}>Submit form</button>
        </>
    );
}

export default Forms;