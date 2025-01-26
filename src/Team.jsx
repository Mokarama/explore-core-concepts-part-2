import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);

    const handleAdd = () =>{
       const newTeam = team +1;
       setTeam(newTeam)
    }

   const handleRemove =() =>{
    const oldTeam = team -1;
    setTeam(oldTeam);
   }

    const teamStyle ={
       border:'2px solid black' ,
       margin:'15px',
       padding:'15px',
       borderRadius:'15px'
    }
   return(
    <div style={teamStyle}>
        <h3>Players:{team}</h3>
        <button onClick={handleAdd} className="button">Add</button>
        <button onClick={handleRemove} className="btn">Remove</button>
    </div>
   ) 
}