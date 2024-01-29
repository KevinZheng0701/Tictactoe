import React from "react";
import "./Header.css";
import PlayerBox from '../PlayerBox/PlayerBox';

const Header = () => { 
    return (
        <div className="heading">
            <div id="player-1">
                <PlayerBox value="Player 1"/>
            </div>
            <div id="game-name">
                <h2>Tic-Tac-Toe</h2>
            </div>
            <div id="player-2">
                <PlayerBox value="Player 2"/>
            </div>
        </div>
    )
};

export default Header;