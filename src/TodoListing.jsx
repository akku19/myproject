import React from 'react';

const TodoListing = (props)=>{
 
    return( 
     <>
     <div className="style_div" key={props.id}>
         <span onClick={props.onSelect} key={props.id}>-</span>
    <li >{props.title}</li>
    </div>
    </>
    ) 
}

export default TodoListing;