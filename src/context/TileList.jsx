import { useState, createContext } from "react";

const [tileList, setTileList] = useState([])
const TileListContext = createContext(tileList)

export {TileListContext, setTileList}