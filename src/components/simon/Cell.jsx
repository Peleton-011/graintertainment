import { useContext } from "react";

import { TileListContext } from "../../context/TileListContext";

const Cell = ({ color, col, row }) => {
	const tileList = useContext(TileListContext);

	return (
		<div
			className={
				tileList[0] && tileList[0][0] == col && tileList[0][1] == row
					? "active"
					: "ass"
			}
			style={{ backgroundColor: color, color: color }}
		>
            <span className="text">
			Cell {col} {row}{" "}
            </span>
		</div>
	);
};

export default Cell;
