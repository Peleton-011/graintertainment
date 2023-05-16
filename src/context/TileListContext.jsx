import { useState, createContext, useEffect } from "react";

const TileListContext = createContext([]);

const TileListContextProvider = (props) => {
	const [tileList, setTileList] = useState([]);


	const newTileList = (difficulty, level) => {
		if (tileList.length > 0) {
			console.warn("TileList is not empty");
		}

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
		// console.log(list);
		setTileList(list.slice(0, level));
	};

	const removeTile = () => {
		if (tileList.length < 1) {
			console.error("TileList is empty.");
			return;
		}
		setTileList(tileList.slice(1));
	};

	return (
		<TileListContext.Provider value={{ tileList, newTileList, removeTile }}>
			{props.children}
		</TileListContext.Provider>
	);
};

export {TileListContext, TileListContextProvider}