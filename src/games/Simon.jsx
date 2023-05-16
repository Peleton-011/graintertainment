import React from "react";

import { useState, useEffect, useContext } from "react";
import { TileListContext } from "../context/TileListContext";
import shuffle from "../logic/shuffle";

import Board from "../components/simon/Board";

import "../styles/Simon.css";

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

const Simon = () => {
	const difficulty = 3;
	const { tileList, newTileList, removeTile } = useContext(TileListContext);

	const [currentLevel, setCurrentLevel] = useState(1);
	const [colorOrder, setColorOrder] = useState(
		shuffle(getColorsBySize(difficulty, colors))
	);

	useEffect(() => {
		if (tileList.length > 0) {
			return;
		}
		console.log("You WIN!!! c: (round " + currentLevel + ")");
        levelUp()
		newTileList(difficulty, currentLevel);
	}, [tileList]);

	const roundLost = () => {
		console.log("Oh... You Lost...  :c");
		setCurrentLevel(1);
		newTileList(difficulty, currentLevel);
	};

	const levelUp = () => {
		setCurrentLevel(currentLevel + 1);
	};

	return (
		<>
			<div
				onClick={() =>
					console.log(newTileList(difficulty, currentLevel))
				}
			>
				Simon
			</div>
			<p>Weee, this is the SImon game!</p>
			<Board
				size={difficulty}
				roundLost={roundLost}
				colorOrder={colorOrder}
				levelUp={levelUp}
			/>
		</>
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

	return totalColors;
}

export default Simon;
