// REACT
import React, { useState } from "react";

// RECHARTS
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

// HELPER FUNCTIONS
import { getSalaryRange, getExperienceRange } from "../../lib/helper";

// MOMENT - DATE HANDLING
import moment from "moment";

// LODASH - DATA HANDLING
import _ from "lodash";

// MOCK DATA
import mock_data from "../../MOCK_DATA.json";

// CSS
import "./DataCharts.css";

// CONSTANTS
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const DataCharts = () => {
  const [chartType, setChartType] = useState("BarChart");
  const [dataProperty, setDataProperty] = useState("date_of_birth");

  const transformedData = mock_data
    .filter(
      (item) =>
        item.salary !== null &&
        item.years_of_experience !== null &&
        !isNaN(moment(item.date_of_birth).year())
    )
    .map((item) => ({
      ...item,
      birthYear: moment(item.date_of_birth).year(),
      salaryRange: getSalaryRange(item.salary),
      experienceRange: getExperienceRange(item.years_of_experience),
    }));

  const dataGroupedByProperty = _.groupBy(
    transformedData,
    dataProperty === "salary"
      ? "salaryRange"
      : dataProperty === "date_of_birth"
      ? "birthYear"
      : dataProperty === "years_of_experience"
      ? "experienceRange"
      : dataProperty
  );

  const chartData = Object.keys(dataGroupedByProperty).map((key) => ({
    name: key,
    value: dataGroupedByProperty[key].length,
  }));

  if (dataProperty === "salary") {
    chartData.sort((a, b) => {
      const rangeStartA = Number(a.name.split(" ")[0]);
      const rangeStartB = Number(b.name.split(" ")[0]);
      return rangeStartA - rangeStartB;
    });
  }

  let chart;

  switch (chartType) {
    case "BarChart":
      chart = (
        <BarChart width={600} height={300} data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      );
      break;
    case "PieChart":
      chart = (
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      );
      break;
    case "LineChart":
      chart = (
        <LineChart width={600} height={300} data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      );
      break;
    default:
      chart = null;
  }

  return (
    <div className="container">
      <div className="controls">
        <label htmlFor="chartType">Chart Type:</label>
        <select
          id="chartType"
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
          className="select"
        >
          <option value="BarChart">Bar Chart</option>
          <option value="PieChart">Pie Chart</option>
          <option value="LineChart">Line Chart</option>
        </select>

        <label htmlFor="dataProperty">Data Property:</label>
        <select
          id="dataProperty"
          value={dataProperty}
          onChange={(e) => setDataProperty(e.target.value)}
          className="select"
        >
          <option value="birthYear">Birth Year</option>
          <option value="years_of_experience">Years of Experience</option>
          <option value="salary">Salary</option>
        </select>
      </div>

      <div className="chart-container">{chart}</div>
    </div>
  );
};
