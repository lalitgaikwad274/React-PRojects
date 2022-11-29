import React, { useState } from "react";
import "./AddTask.css";

const AddTask = (props) => {
   const [Text, setText] = useState("");
   const [flag, setFlag] = useState(true);

   const addTask = () => {
      let data = {
         id: Math.round(Math.random() * 1000),
         text: Text,
         day: new Date(),
         reminder: false,
      };

      if (Text.length > 0) {
         setFlag(true);
         setText(Text);
         props.sendData(data);
      } else {
         alert("enter task detail");
         setFlag(false);
      }

      setText("");
   };

   return (
      <div className="addTask">
         <input
            type="text"
            className={`form-control ${flag ? "" : "invalid"}`}
            placeholder="Enter Task"
            onChange={(e) => {
               if (e.target.value.length > 0) {
                  setText(e.target.value);
                  setFlag(true);
               }
            }}
            value={Text}
            required
         />
         <button className="btn btn-primary m-2" onClick={addTask}>
            ADD
         </button>
      </div>
   );
};

export default AddTask;
