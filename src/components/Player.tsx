import { useState } from "react";

interface PlayerProps {
    initialName: string;
    symbol: string;
    isActive: boolean;
}

export default function Player({ initialName, symbol, isActive }: PlayerProps){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing)=> !editing);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setPlayerName(event.target.value);
    }

    let editablePlayerN = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editablePlayerN = <input type="text" required value={playerName} onChange={handleChange} />;
    }

    return <li className={isActive ? 'active': undefined}>
    <span className="player">
        {editablePlayerN}
        <span className="player-symbol">{symbol}</span>
    </span >
    <button onClick={handleEditClick}>{isEditing? 'Save' : 'Edit'}</button>
    
  </li>
}