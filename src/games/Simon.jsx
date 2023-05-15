import React from "react";

import { useState, useEffect } from "react";

import Board from "../components/simon/Board";

const Simon = () => {
    const difficulty = 3;
	const [tileList, setTileList] = useState([]);
	
    getTileList = () => {
        return;
    }

    useEffect(() => {
        if (tileList !== []) {
            return;
        }
        setTileList(getTileList());

    }, [tileList]);

	return (
		<>
			<div>Simon</div>
			<p>Weee, this is the SImon game!</p>
			<Board size={difficulty} />
		</>
	);
};

export default Simon;
