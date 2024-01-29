import React from "react";
import Square from "../Square/Square";
import "./Board.css";

const Board = ({ squares, onClick }) => {
    // set up 3x3 board
    squares = squares || [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
    // render squares
    const renderSquare = (row, col) => {
        return (
            <Square
                key={row * 3 + col}
                value={squares[row][col]}
                onClick={() => onClick(row, col)}
            />
        );
    };
    return (
        <div className="board">
            {squares.map((row, rowIndex) => (
                <div key={rowIndex} className="board-row">
                    {row.map((col, colIndex) => renderSquare(rowIndex, colIndex))}
                </div>
            ))}
        </div>
    );    
};

export default Board;
