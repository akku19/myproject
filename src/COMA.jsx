import react, { useEffect, useState } from 'react';
import axios from "axios";


const COMA = ()=>{
    const [num,setNum] =useState();
    const [name,setName] = useState();
    const[moves,setMoves]= useState();
    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data.moves.lenght);
           
            setName(res.data.name);
            setMoves(res.data.moves.lenght);
        }
        getData();
    });
    return (
        <>
        <h1>Selected {num} values</h1>
        <h2>My name is {name}</h2>
        <h2>Number of moves {moves}</h2>
        <select value={num} onChange= {(event)=>{
          setNum(event.target.value);
        }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="25">25</option>
        </select>
        </>
    )
}

export default COMA;