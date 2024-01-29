import React, { useState } from "react";
import "./Game.css"
import Board from '../Board/Board';
import WinnerMessage from '../WinnerMessage/WinnerMessage';

const Game = () => {
    // states to keep track of game
    const [squares, setSquares] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);
    const [first, setFirst] = useState(true);
    const [turn, setTurn] = useState(0);
    const [winner, setWinner] = useState(null);
    const [modal, setModal] = useState(false);
    // handle square clicks
    const handleClick = (row, col) => {
        if (squares[row][col] || winner != null) {
            return;
        }
        const newSquares = [...squares];
        newSquares[row][col] = first ? "X" : "O";
        setSquares(newSquares);
        setFirst(!first);
        const newTurn = turn + 1
        setTurn(newTurn);
        if (newTurn >= 5) {
            const player = checkWinner(newTurn, newSquares);
            if (player) {
                setWinner(player);
            }
        }
    };
    // find winner
    const findWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            const A = squares[Math.floor(a / 3)][a % 3]
            const B = squares[Math.floor(b / 3)][b % 3]
            const C = squares[Math.floor(c / 3)][c % 3]
            if (A === "X" && B === "X" && C === "X") {
                return 'X';
            }
            else if (A === "O" && B === "O" && C === "O") {
                return 'O';
            }
        }
    };
    // check winner
    const checkWinner = (turn, squares) => {
        const winner = findWinner(squares);
        if (winner != null){
            setModal(true);
            return winner;
        }
        else if (turn === 9) {
            setModal(true);
            return "Tie";
        }
    };
    // restart game
    const clearBoard = () => {
        const newBoard = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        setSquares(newBoard);
        setWinner(null);
        setFirst(true);
        setTurn(0);
        setModal(false);
    };
    return (
        <div className="game">
            <div className="game-content">
                <Board squares={squares} onClick={handleClick}/>
                {modal && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <WinnerMessage
                                value={winner === "Tie" ? "Tie Game" : winner === "X" ? "X wins" : "O wins"}
                                onReplay={clearBoard}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Game;
