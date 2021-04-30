import React, { useState } from 'react'
import TodoListing from './TodoListing';
const TodoList = ()=>{
    const[inputlist,setstates] = useState();
    const[items,allitesms] = useState([]);
     
   const deleteites = ()=>{
       return <>
       {console.log('yes')}
       </>
   }

    const iteEvent= (event)=>{
        setstates(event.target.value);
    }
    const listofites = ()=>{
      
      allitesms((oldites) => {
      return ([...items,inputlist]
        
        );
        setstates('');
      })
      
    }
    const deleteitems = (e)=>{
        var index = items.indexOf(e.target.value);
        console.log(index);
        console.log(e);
        items.splice(index, 1);
    }
    
    return (
        <>
        {console.log(items)}
        <div className="maindiv">
           <div className="center_div ">
               <h1>Todo List</h1>
               <input type="text" name="todo" value={inputlist}  onChange={iteEvent} />
               <span onClick={listofites}>+</span>
               <ul>
                   {items.map((itemval,index)=>{
                       return (
                           <> 
                           <TodoListing title={itemval} key={index} id={index} onSelect={deleteitems}/>     
                       
                       </>
                        )
                   })}
               </ul>
               </div>
          </div>
        
        </>
    );
}

export default TodoList;