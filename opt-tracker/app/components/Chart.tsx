import React, { FC } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { GraphData } from "../../app/page";

interface DataPoint {
  label: string;
  data: number[];
}

export interface ChartProps {
  data: {
    labels: string[];
    datasets: DataPoint[];
  };
}

Chart.register(CategoryScale);

const LineChart: FC<ChartProps> = ({ data }) => {
  return (
    <div className="chart-container">
      <Line
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "RDDT Performance Over Time",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
