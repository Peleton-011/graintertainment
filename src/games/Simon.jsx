import React from "react";

import Board from "../components/simon/Board";

const Simon = () => {
	return (
		<>
			<div>Simon</div>
			<p>Weee, this is the SImon game!</p>
            <Board size={3}/>
		</>
	);
};

export default Simon;
