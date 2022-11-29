import React from "react";
import "./bar.css";
const Bar = (props) => {
   let part = Math.round(150 / props.maxValue);
   if (part === Infinity) part = 150;
   // console.log("in bar", part);
   let barHeight = part * props.value;
   return (
      <div className="container">
         <div className="bar">
            <div className="middlebar" style={{ height: barHeight }}></div>
         </div>
         <label>{props.month}</label>
      </div>
   );
};

export default Bar;
