import React from "react";

import { useState, useEffect } from "react";

import Board from "../components/simon/Board";

const Simon = () => {
	const difficulty = 3;
	const [tileList, setTileList] = useState([]);

	const getTileList = () => {
		const length = difficulty ** 2;
		const list = [];
		//generate list of tiles
		for (let i = 0; i < difficulty; i++) {
			for (let j = 0; j < difficulty; j++) {
				list.push([j, i]);
			}
		}
		//shuffle list of tiles
		let m = length;
		let t, i;

		while (m) {
			i = Math.floor(Math.random() * m);
            m -= 1;
			t = list[m];
			list[m] = list[i];
			list[i] = t;
		}
		return list;
	};

	useEffect(() => {
		if (tileList !== []) {
			return;
		}
		setTileList(getTileList());
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
