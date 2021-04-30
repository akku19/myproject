import react, { useState } from 'react';
import './menus.css';


const Newmenu = ()=>{

    const[toggle,state] = useState('');
    const[menus,setMenu] = useState('menu');
   const closeFunction = ()=>{
    state('');
    setMenu('Menu');
   }

    const myfunction = ()=>{
        state('drawer-wrapper-show');
        setMenu('dummy');
    }
    return (
        <>
        <button onClick={myfunction} >{menus}</button>
        <button onClick = {closeFunction}>Close</button>
        <div className={`drawer-wrapper ${toggle}`}></div>
        </>
    )
}

export default Newmenu;