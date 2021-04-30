import React, { useState } from 'react';


const Counter = ()=>{
const State = useState();
const [Count,setCount] = useState(50);
console.log(State);

const IncNum = ()=>{
    setCount(Count-1)
    
}
return (
    <>
   <h1>{Count}</h1>
   <button onClick={IncNum}>Click me</button>
    </>
    )

}

export default Counter;
