import { useState, lazy, Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

const Simon = lazy(() => import("./games/Simon"));
const TileContext = lazy(() => import("./context/TileListContextProvider"));

function App() {
	return (
		<Router>
			<div>Hi</div>
			<Routes>
				<Route
					path="/"
					element={
						<SimonContext>
							<SimonPage />
						</SimonContext>
					}
				/>
				<Route path="/task/:id" element={<div>This is a test</div>} />
			</Routes>
		</Router>
	);
}

const Loading = (props) => (
	<div>
		Page is Loading...
		{props.children}
	</div>
);

const SimonContext = (params) => (
	<Suspense fallback={<div>Page is Loading...</div>}>
		<TileContext>{params.children}</TileContext>
	</Suspense>
);

const SimonPage = () => (
	<Suspense fallback={<div>Page is Loading...</div>}>
		<Simon />
	</Suspense>
);

export default App;
