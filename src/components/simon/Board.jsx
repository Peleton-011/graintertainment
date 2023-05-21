import React from "react";

import { useState } from "react";

import Cell from "./Cell";

const Board = ({ size, roundLost, colorOrder, sleep, activeCell }) => {
	// const [isActive, setIsActive] = useState(true);

	return (
		<section
			style={{
				"--sleep-time": sleep,
				display: "grid",
				gridTemplateColumns: `repeat(${size}, 1fr)`,
                width: "fit-content",
                height: "fit-content",
                gap: "1rem"
			}}
		>
			{colorOrder.map((color, index) => {
				return (
					<Cell
						key={index}
						color={color}
						col={index % size}
						row={Math.floor(index / size)}
						roundLost={roundLost}
						activeCell={activeCell}
					/>
				);
			})}
		</section>
	);
};

export default Board;
