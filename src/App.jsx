import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

//This is wrong, but it's this way for testing purposes
import Home from "./games/Simon";

function App() {

	return (
		<Router>
			<div>Hi</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/task/:id" element={<div>This is a test</div>} />
			</Routes>
		</Router>
	);
}

export default App;
