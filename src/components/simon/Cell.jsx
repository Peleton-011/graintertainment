import { useContext } from "react";

import { TileListContext } from "../../context/TileListContext";

const Cell = ({ color, col, row, roundLost, activeCell }) => {
	const { tileList, removeTile } = useContext(TileListContext);

	const sizeInRem = 5;

	return (
		<div
			className={
				activeCell[0] === col && activeCell[1] === row ? "active" : ""
				/* tileList.length > 0 &&
				// tileList[0][0] == col &&
				// tileList[0][1] == row
				// 	? "active"
				// 	: "ass"
                */
			}
			style={{
				backgroundColor: color,
				color: color,
				placeSelf: "center",
				width: sizeInRem + "rem",
				height: sizeInRem + "rem",
			}}
			onClick={() => {
				tileList.length > 0 &&
				tileList[0][0] == col &&
				tileList[0][1] == row
					? removeTile()
					: roundLost();
			}}
		>
			<span className="text">
				Cell {col} {row}{" "}
			</span>
		</div>
	);
};

export default Cell;
1;
