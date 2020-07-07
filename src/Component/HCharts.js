import React, { useState, useEffect } from "react";
import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const apikey = "97cee60fe2193b383cd8377301901a80";

const options = {
	chart: {
		type: "spline",
	},
	title: {
		text: "My chart",
	},
	series: [
		{
			data: [1, 2, 1, 4, 3, 6],
		},
	],
};

export default function HCharts() {
	const [state, setstate] = useState();

	useEffect(() => {
		axios
			.get(
				`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=${apikey}&format=json&limit=10`
			)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});

		return () => {
			// will
		};
	}, []);
	return (
		<div>
			<p> Hello</p>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
}
