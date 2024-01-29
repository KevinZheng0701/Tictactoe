import React from "react";
import "./Square.css";

const Square = ({ value, onClick }) => {
    return (
        <button
            className="square"
            onClick={onClick}
            style={{ color: value === "X" ? "blue" : "red" }}
        >
            {value}
        </button>
    )
};

export default Square;