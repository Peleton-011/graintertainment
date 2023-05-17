import { useState, createContext, useEffect } from "react";

const TileListContext = createContext([]);

//Never outputs the max
const getRandomInt = (max) => {
	return Math.floor(Math.random() * max);
};

const TileListContextProvider = (props) => {
	const [tileList, setTileList] = useState([]);
	const [oldTileList, setOldTileList] = useState([]);
	const [difficulty, setDifficulty] = useState(2);

	const newTileList = (difficultyParam, level) => {
		if (tileList.length > 0) {
			console.warn("TileList is not empty");
		}
		setDifficulty(difficultyParam);
		const list = [];

		for (let i = 0; i < level; i++) {
			list.push([getRandomInt(difficulty), getRandomInt(difficulty)]);
		}
		// console.log(list);
		setTileList(list.slice(0, level));
		setOldTileList(tileList);
	};

	const nextRound = () => {
		const newTile = [getRandomInt(difficulty), getRandomInt(difficulty)];
		setOldTileList([...oldTileList, newTile]);
		setTileList(oldTileList);
	};

	const removeTile = () => {
		if (tileList.length < 1) {
			console.error("TileList is empty.");
			return;
		}
		setTileList(tileList.slice(1));
	};

	return (
		<TileListContext.Provider value={{ tileList, newTileList, removeTile, nextRound }}>
			{props.children}
		</TileListContext.Provider>
	);
};

export { TileListContext, TileListContextProvider };
