import React, { useState, useEffect } from "react";
import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function HCharts({ url, editFunc, keyArr, title }) {
	const [options, setOption] = useState();

	useEffect(() => {
		axios
			.get(url)
			.then(function (response) {
				const responseData = response.data[keyArr[0]][keyArr[1]];
				const editedData = responseData.map(editFunc);

				setOption({
					title: {
						text: title,
					},
					xAxis: {
						labels: {
							formatter: function () {
								return editedData[this.value].name;
							},
						},
					},
					yAxis: {
						title: {
							text: "Count",
						},
					},
					series: [
						{
							type: "column",
							colorByPoint: true,
							data: editedData,
							showInLegend: false,
						},
					],
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
}
