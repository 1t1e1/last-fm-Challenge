import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

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
	return (
		<div>
			<p> Hello</p>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
}
