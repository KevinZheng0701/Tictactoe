import React from "react";
import "./WinnerMessage.css";

const WinnerMessage = ({ value, onReplay }) => { 
    return (
        <div className="message-box">
            <p id="message">{value}</p>
            <button className="replay-button" onClick={onReplay}>Play Again</button>
        </div>
    )
};

export default WinnerMessage;