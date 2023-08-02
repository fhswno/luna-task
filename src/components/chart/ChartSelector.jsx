import React from "react";

const ChartSelector = ({ onChartTypeChange }) => {
  return (
    <div>
      <label htmlFor="chartType">Select chart type:</label>
      <select
        id="chartType"
        onChange={(e) => onChartTypeChange(e.target.value)}
      >
        <option value="BarChart">Bar Chart</option>
        <option value="PieChart">Pie Chart</option>
        <option value="LineChart">Line Chart</option>
      </select>
    </div>
  );
};

export default ChartSelector;
