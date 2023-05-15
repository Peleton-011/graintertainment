import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {

	return (
		<Router>
			<div>Hi</div>
			<Routes>
				<Route path="/" element={<div>Home</div>} />
				<Route path="/task/:id" element={<div>This is a test</div>} />
			</Routes>
		</Router>
	);
}

export default App;
