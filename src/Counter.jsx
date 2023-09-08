import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
   
    const handleCount = () =>{
const newCount = count + 1;
setCount(newCount)
    }

    const handleRedus = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    return(
        <div style={{border: '2px solid yellow'}}>
            <h1>Counter:{count}</h1>
            <button onClick={handleCount}>Count button</button>
            <button onClick={handleRedus}>Redus</button>
        </div>
    )
}