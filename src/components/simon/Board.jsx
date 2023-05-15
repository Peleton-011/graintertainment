import React from "react";

import { useState } from "react";

import Cell from "./Cell";

import shuffle from "../../logic/shuffle";

const Board = ({ size }) => {
	const [isActive, setIsActive] = useState(true);

	const colors = ["#55CB77", "#DA4642", "#E8E55A", "#0592E2"];

    const shuffled = shuffle(colors);

	return (
		<section>
			{shuffled.map((color, index) => {
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
