import React from "react";

import { useState } from "react";

import Cell from "./Cell";

import shuffle from "../../logic/shuffle";

const Board = ({ size }) => {
	const [isActive, setIsActive] = useState(true);

	const colors = [
		["#55CB77", "#DA4642", "#E8E55A", "#0592E2"],
		["#911eb4", "#f032e6", "#469990", "#fabed4", "#000075"],
		[
			"#ffe119",
			"#a9a9a9",
			"#000000",
			"#f58231",
			"#808000",
			"#e6194B",
			"#800000",
		],
	];

	const shuffled = shuffle(getColorsBySize(size, colors));

	return (
		<section>
			{shuffled.map((color, index) => {
				return (
					<Cell
						key={index}
						color={color}
						col={index % size}
						row={Math.floor(index / size)}
					/>
				);
			})}
		</section>
	);
};

function getColorsBySize(rawSize, colors) {
	const size = rawSize - 2;
	if (size > colors.length) {
		console.error("Size is out of bounds for colors");
		return;
	}
	const totalColors = [];

	for (let i = 0; i < size + 1; i++) {
		totalColors.push(...colors[i]);
	}

	console.log(totalColors);
	return totalColors;
}

export default Board;
