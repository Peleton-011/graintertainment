import React from "react";

import { useState, useEffect, useContext } from "react";
import { TileListContext } from "../context/TileListContext";
import shuffle from "../logic/shuffle";

import Board from "../components/simon/Board";

import useSound from "use-sound";
import btnPressSfx from "../assets/Simon/btn-press-sound.mp3";

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
	const difficulty = 2;
	const { tileList, newTileList, removeTile, nextRound } =
		useContext(TileListContext);

	const [isInteractionActive, setIsInteractionActive] = useState(false);
	const [currentLevel, setCurrentLevel] = useState(1);
	const [colorOrder, setColorOrder] = useState(
		shuffle(getColorsBySize(difficulty, colors))
	);
	const [activeCell, setActiveCell] = useState([-1, -1]);

	const [sleep, setSleep] = useState(1000);

	const [playPressSfx] = useSound(btnPressSfx, { interrupt: false });

	//Generate new tile list in the beggining
	// let isMounted = false;
	// useEffect(() => {
	// 	if (!isMounted) {
	//         setCurrentLevel(1);
	// 		newTileList(difficulty, 1);
	// 	}
	// 	return () => {
	//         isMounted = true;
	//     }
	// }, []);

	//GameLoop quote unquote
	useEffect(() => {
		console.log(tileList.length);
		console.log(currentLevel);

		if (tileList.length > 0) {
			if (tileList.length !== currentLevel) {
				return;
			}
			showNewTileList().then(() => {
				setActiveCell([]);
			});

			return;
		}

		console.log("You WIN!!! c: (round " + currentLevel + ")");
		setIsInteractionActive(false);
		levelUp();
		nextRound(currentLevel + 1);
	}, [tileList]);

	const showNewTileList = async () => {
		tileList.forEach((tile, index) => {
			console.log(tile);
			(function (ind) {
				setTimeout(() => {
					setActiveCell([tile[0], tile[1]]);
					playPressSfx();
				}, sleep * ind);
			})(index);
		});

		setIsInteractionActive(true);
	};

	const roundLost = () => {
		alert("Oh... You Lost...  :c");
		setCurrentLevel(1);
		newTileList(difficulty, 1);
	};

	const levelUp = () => {
		setCurrentLevel(currentLevel + 1);
	};

	const tileOnClick = (e, row, col) => {
		playPressSfx();
		tileList.length > 0 && tileList[0][0] == col && tileList[0][1] == row
			? removeTile()
			: roundLost();
	};

	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
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
				tileOnClick={tileOnClick}
				colorOrder={colorOrder}
				sleep={sleep}
				activeCell={activeCell}
			/>
		</main>
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
