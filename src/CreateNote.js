import React, { useState } from 'react'
import Note from './Note'
const CreateNote = (props)=>{
    const [note,setNote] = useState({
        title:'',
        content:''
    });
    const inputEvent = (event)=>{
       const {name,value} = event.target;

       
       setNote((olddata)=>{
           return {
              ...olddata,
              [name]:value,
        }
       })
       console.log(note)
       
        
    }

    const Addevents = (e)=>{
        e.preventDefault();
        props.passnote(note);
        
        
    }
    return (
        <>
        <div className="main_note">
            <form>
                <input type="text" placeholder="Title"  value={note.title} name="title"  autoComplete="off" onChange={inputEvent} />
                <textarea rows="5" placeholder="write note" value={note.content} name="content"  autoComplete="off" onChange={inputEvent}></textarea>
                <button onClick={Addevents}>Click</button>
            </form>
        </div>
        </>
    )
}

export default CreateNote;