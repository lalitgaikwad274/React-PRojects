import "./App.css";
// import AddTask from "./components/addTask/AddTask";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Taskcontainer from "./components/Tasks/Taskcontainer";
import React, { useState } from "react";
import ModalBox from "./components/modalbox/ModalBox";

function App() {
   const [taskData, setTaskData] = useState([
      {
         id: 1,
         text: "open terminal",
         day: "feb 03 2022 09:33:07",
         reminder: true,
      },
      {
         id: 2,
         text: "open window",
         day: "Oct 15 2021 22:33:07",
         reminder: false,
      },
      {
         id: 3,
         text: "open google",
         day: "Sep 30 2022 22:33:07",
         reminder: false,
      },
   ]);

   const deleteTask = (id) => {
      setTaskData(taskData.filter((task) => task.id !== id));
      console.log(id);
   };

   const toggleTask = (id) => {
      console.log(id);

      setTaskData(
         taskData.map((task) =>
            task.id === id ? { ...task, reminder: !task.reminder } : task
         )
      );
   };

   const addTaskData = (data) => {
      console.log("in app", data);
      let newData = {
         id: data.id,
         text: data.text,
         day: data.day.toString().slice(4, 24),
         reminder: false,
      };

      console.log(data.day);

      setTaskData((taskData) => [...taskData, newData]);
   };

   return (
      <div className="App">
         <ModalBox sendData={addTaskData} />
         {/* <AddTask sendData={addTaskData} /> */}
         {taskData.length > 0 ? (
            <Taskcontainer
               tasks={taskData}
               onDelete={deleteTask}
               onToggle={toggleTask}
            />
         ) : (
            <h1>NO TASKS FOUND</h1>
         )}
      </div>
   );
}

export default App;
