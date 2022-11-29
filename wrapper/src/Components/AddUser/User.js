import React from "react";

const User = (props) => {
   return (
      <li>
         {props.name} (Your age is {props.age})
      </li>
   );
};

export default User;
