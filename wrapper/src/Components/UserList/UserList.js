import React from "react";
import User from "../AddUser/User";
import "./UserList.css";
const UserList = (props) => {
   return (
      <div className="container w-50 mt-5 mb-5">
         <ul>
            {props.data.map((data) => (
               <User key={data.id} name={data.name} age={data.age} />
            ))}
         </ul>
      </div>
   );
};

export default UserList;
