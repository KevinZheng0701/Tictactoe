import React from "react";
import "./PlayerBox.css";

const PlayerBox = ({ value }) => { 
    return (
        <div className="player-box"> 
            <div id="name">
                <p> {value} </p>
            </div>
        </div>
    )
};

export default PlayerBox;