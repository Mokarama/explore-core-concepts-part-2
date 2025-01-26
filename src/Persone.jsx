import { useState } from "react";

export default function EvenHandle(){

    const[add, remove] = useState(0);

    const addEven =() =>{
        const addNew = add +1;
        remove(addNew);
    }

    const removeEven =() =>{
        const removeNew = add -1;
        remove(removeNew);
    }

    return(
        <div>
            <h3>Person:{add}</h3>
            <button onClick={addEven} className="button">Add even</button>
            <button onClick={removeEven} className="btn">Remove</button>
        </div>
    )
}

