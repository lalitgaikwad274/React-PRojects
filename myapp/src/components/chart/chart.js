import React from "react";
import "./chart.css";
import Bar from "./bar";

const Chart = ({ expenseData, chartdata }) => {
   for (const expense of expenseData) {
      const month = expense.date.getMonth();
      // console.log(month);
      chartdata[month].value++;
   }
   // console.log("in chart data", chartdata);

   const dataValue = chartdata.map((data) => data.value);
   const maxValue = Math.max(...dataValue);
   // console.log(maxValue);

   return (
      <div className="chart">
         {chartdata.map((data) => (
            <Bar month={data.month} value={data.value} maxValue={maxValue} />
         ))}
      </div>
   );
};

export default Chart;
