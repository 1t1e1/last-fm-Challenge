import React from "react";
import HCharts from "./Component/HCharts";
import { topTracks, topArtists } from "./apiConst";
import "./App.css";

function App() {
	function handleDataForTopTracks(el) {
		return {
			name: el.name,
			y: Number(el.listeners),
		};
	}
	return (
		<div className="App">
			<HCharts
				url={topArtists}
				editFunc={handleDataForTopTracks}
				keyArr={["topartists", "artist"]}
				title="Top Artists"
			></HCharts>
			<HCharts
				url={topTracks}
				editFunc={handleDataForTopTracks}
				keyArr={["tracks", "track"]}
				title="Top Tracks"
			></HCharts>
		</div>
	);
}

export default App;
