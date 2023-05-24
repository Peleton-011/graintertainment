import { useState, createContext, useEffect } from "react";

const TileListContext = createContext([]);

//Never outputs the max
const getRandomInt = (max) => {
	return Math.floor(Math.random() * max);
};

const TileListContextProvider = (props) => {
    const [isGameActive, setIsGameActive] = useState(false)
	const [tileList, setTileList] = useState([]);
	const [oldTileList, setOldTileList] = useState([]);
	const [difficulty, setDifficulty] = useState(2);

	const newTileList = (difficultyParam, level) => {
		setDifficulty(difficultyParam);
		if (tileList.length > 0) {
			console.warn("TileList is not empty");
		}
		const list = [];

		for (let i = 0; i < level + 1; i++) {
			list.push([getRandomInt(difficulty), getRandomInt(difficulty)]);
		}
		console.log(list);
		setTileList(list);
		setOldTileList(list);
	};

	const nextRound = (currentLevel) => {
		const missing = currentLevel - oldTileList.length;
        // if (oldTileList.length === 0 ) {
        //     newTileList(difficulty, 1);
        //     return;
        // }
		const newTileList = Array.from(oldTileList);
		for (let i = 0; i < missing; i++) {
			const newTile = [
				getRandomInt(difficulty),
				getRandomInt(difficulty),
			];
			newTileList.push(newTile);
		}

		setTileList(newTileList);
		setOldTileList(newTileList);
	};

	const removeTile = (diff) => {
		if (tileList.length < 1) {
            newTileList(diff || difficulty, 1)
            return;
		}
		setTileList(tileList.slice(1));
	};

    const exports = isGameActive ? { 
        tileList: tileList || [], 
        newTileList, 
        removeTile, 
        nextRound 
    } : {
        tileList: [],
        newTileList: () => console.log("Can't generate new tileList, game is inactive"), 
        removeTile: () => console.log("Can't remove tile from tileList, game is inactive"), 
        nextRound: () => console.log("Can't change rounds, game is inactive")
    }


	return (
		<TileListContext.Provider
			value={exports}
		>
			{props.children}
		</TileListContext.Provider>
	);
};

export { TileListContext, TileListContextProvider };
