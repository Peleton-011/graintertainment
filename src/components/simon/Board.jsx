import React from "react";

import { useState } from "react";

import Cell from "./Cell";

const Board = ({ size, roundLost, colorOrder }) => {
	// const [isActive, setIsActive] = useState(true);



	return (
		<section>
			{colorOrder.map((color, index) => {
				return (
					<Cell
						key={index}
						color={color}
						col={index % size}
						row={Math.floor(index / size)}
                        roundLost={roundLost}
					/>
				);
			})}
		</section>
	);
};

export default Board;
