import { useContext } from "react";

import { TileListContext } from "../../context/TileListContext";

const Cell = ({ color, col, row }) => {
	const {tileList, removeTile} = useContext(TileListContext);

	return (
		<div
			className={
				tileList.length > 0 && tileList[0][0] == col && tileList[0][1] == row
					? "active"
					: "ass"
			}
			style={{ backgroundColor: color, color: color }}
			onClick={() => {console.log(tileList.length > 0  && tileList[0][0] == col && tileList[0][1] == row
                ? removeTile()
                : "This is cell ", col, " ", row)}}
		>
			<span className="text">
				Cell {col} {row}{" "}
			</span>
		</div>
	);
};

export default Cell;
