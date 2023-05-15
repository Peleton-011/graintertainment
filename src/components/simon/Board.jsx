import React from "react";

import { useState } from "react";

import Cell from "./Cell";

const Board = ({ size }) => {
	const [isActive, setIsActive] = useState(true);

	const colors = ["#55CB77", "#DA4642", "#E8E55A", "#0592E2"];

	return (
		<section>
			{colors.map((color, index) => {
				return (
					<div key={index} style={{ backgroundColor: color }}>
						Cell nº {index}
					</div>
				);
			})}
		</section>
	);
};

export default Board;
