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
	const { tileList, newTileList, removeTile, nextRound } =
		useContext(TileListContext);

        const [isInteractionActive, setIsInteractionActive] = useState(false);
        const [currentLevel, setCurrentLevel] = useState(1);
        const [colorOrder, setColorOrder] = useState(
            shuffle(getColorsBySize(difficulty, colors))
	);
	const [activeCell, setActiveCell] = useState([-1, -1]);
    
    newTileList(difficulty, currentLevel);
            const cum = 6;
	useEffect(() => {
        console.log(tileList)
		if (tileList.length > 0) {
            console.log("has length")
			return;
		}
        console.log("has no length")

		console.log("You WIN!!! c: (round " + currentLevel + ")");
		setIsInteractionActive(false);
		levelUp();
		nextRound();
		showNewTileList();
		console.log("After showing");
		console.log(tileList);
	}, [cum]);

	const showNewTileList = async () => {
		const sleep = 1000;
		console.log("Pre show");
		console.log(tileList);

		tileList.forEach((tile, index) => {
			console.log(tile);
			console.log("Cume");
			(function (ind) {
				setTimeout(() => {
					setActiveCell([tile[0], tile[1]]);
					console.log(cumin);
				}, sleep * ind);
			})(index);
		});

		console.log("After show");
		setIsInteractionActive(true);
		console.log("Cum");
	};

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
				onClick={() => {
					setCurrentLevel(1);
					newTileList(difficulty, currentLevel);
					console.log(tileList);
				}}
			>
				Reset
			</div>
			<p>Weee, this is the SImon game!</p>
			<Board
				size={difficulty}
				roundLost={roundLost}
				colorOrder={colorOrder}
				levelUp={levelUp}
				activeCell={activeCell}
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
