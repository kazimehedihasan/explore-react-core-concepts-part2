import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);

    const handleTeamAdd = () => {
const newTeam = team + 1;
setTeam(newTeam);
    }

    const handleRemove = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }
const teamStyle ={
    border: '2px solid purple',
    margin: '15px',
    padding: '15px',
    borderRadius: '15px',
}

    return(
        <div style={teamStyle}>
            <h1>Players: {team}</h1>
            <button onClick={handleTeamAdd}>team add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}