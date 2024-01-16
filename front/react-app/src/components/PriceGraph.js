// PriceGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
const PriceGraph = ({info, title, option}) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
  );
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title + ' Price',
      },
    },
  };
  if (!info) {
    return <div><h2>Loading</h2></div>
  }
  const dates = Object.keys(info);
  const prices = Object.values(info).map(item => item[option]).map(item => parseFloat(item));
  const datas = {
    datasets: [
      { 
        data: dates.map((val, i) => ({x: val, y: prices[i]})),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',}
    ],
  }
  return <Line options={options} data={datas} />
}

export default PriceGraph;
