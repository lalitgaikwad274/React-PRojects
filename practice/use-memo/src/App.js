import "./App.css";
import React, { useState, useMemo } from "react";

function App() {
   const [Show, setShow] = useState(false);
   const [count, setCounter] = useState(0);

   const getValue = () => {
      return setCounter(count + 1);
   };

   const counter = (num) => {
      for (let i = 0; i < 1000000000; i++) {}
      console.log("this count is", num);

      return num;
   };
   //useMemo is use to increase the performance 
   //it apply to specific component which is effect on other components
   let checkData = useMemo(() => counter(count), [count]);

   // code Without useMemo
   // if not apply useMemo it render all components which dont any state update on that component
   // let checkData = counter(count);
   
   return (
      <div className="App m-5 d-grid justify-content-center">
         <button className="btn btn-primary m-5 " onClick={getValue}>
            increment
         </button>
         <h1>{checkData}</h1>
         <button
            className="btn btn-primary m-5 "
            onClick={() => setShow(!Show)}
         >
            {Show ? "clickMe" : "tryMe"}
         </button>
      </div>
   );
}

export default App;
