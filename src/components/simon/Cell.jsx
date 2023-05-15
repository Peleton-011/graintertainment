import React from "react";

const Cell = ({ color, col, row }) => {
	return <div style={{ backgroundColor: color }}>Cell {col} {row} </div>;
};

export default Cell;
