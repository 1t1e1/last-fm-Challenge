import React, { useState, useEffect } from "react";
import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const apikey = "97cee60fe2193b383cd8377301901a80";

export default function HCharts() {
	const [options, setOption] = useState();

	useEffect(() => {
		axios
			.get(
				`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=${apikey}&format=json&limit=10`
			)
			.then(function (response) {
				const data = response.data.tracks.track;
				const my_data = data.map((el) => {
					return {
						name: el.name,
						y: Number(el.listeners),
					};
				});

				setOption({
					chart: {
						type: "column",
					},
					title: {
						text: "My chart",
					},
					series: [
						{
							data: my_data,
						},
					],
				});
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
