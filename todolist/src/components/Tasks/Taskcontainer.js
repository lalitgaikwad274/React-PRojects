import "./Taskcontainer.css";
import Task from "./Task";
import React from "react";

const Taskcontainer = ({ tasks, onDelete, onToggle }) => {
   return (
      <div className="taskcontainer">
         {tasks.map((task) => (
            <Task
               key={task.id}
               task={task}
               onDelete={onDelete}
               onToggle={onToggle}
            />
         ))}
      </div>
   );
};

export default Taskcontainer;
