import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    
    const handleAdd =() =>{
        const newCount = count + 1;
        setCount(newCount)
    }
    const Minuse =() =>{
        const oldCount = count -1;
        setCount(oldCount)
    }
    return(
        <div style={{border:'2px solid blue'}}>
            <h3>Counter:{count}</h3>
            <button onClick={handleAdd} className="button">Add</button>
            <button onClick={Minuse} className="btn">Minus</button>
        </div>
    )
}
