import React from "react";

import { useState, useEffect, useContext } from "react";
import { TileListContext } from "../context/TileListContext";

import Board from "../components/simon/Board";

import "../styles/Simon.css";

const Simon = () => {
	const difficulty = 3;
	const { tileList, newTileList, removeTile } = useContext(TileListContext);

	useEffect(() => {
		console.log("tryna get list");
		if (tileList.length > 0) {
			console.log("alredy a tilelist");
			console.log(tileList);
			return;
		}
		newTileList(difficulty);
		console.log("tis the tilelist");
		console.log(tileList);
	}, [tileList]);

	return (
		<>
			<div onClick={() => console.log(getTileList())}>Simon</div>
			<p>Weee, this is the SImon game!</p>
			<Board size={difficulty} />
		</>
	);
};

export default Simon;
