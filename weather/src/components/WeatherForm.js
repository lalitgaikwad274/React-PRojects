import React from "react";
import { useState } from "react";
import "./weather.css";

const WeatherForm = ({ onfetch }) => {
   const [City, setCity] = useState("");

   const onGet = () => {
      onfetch(City);
      setCity("");
   };

   return (
      <>
         <div className="container form">
            <div className="input">
               <input
                  type="text"
                  className="form-control"
                  placeholder="Enter City Name"
                  value={City}
                  onChange={(e) => setCity(e.target.value)}
               />
            </div>
            <div className="button">
               <button className="btn btn-primary" onClick={onGet}>
                  SEARCH
               </button>
            </div>
         </div>
      </>
   );
};

export default WeatherForm;
