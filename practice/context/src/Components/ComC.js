import React, { useContext } from "react";
import { myContext } from "../App";

const ComC = () => {
   const { fname, name } = useContext(myContext);

   return (
      // <>
      //    <myContext.Consumer>
      //       {(name) => {
      //          return <h1>Welcome {name} in Iprogrammer</h1>;
      //       }}
      //    </myContext.Consumer>
      // </>
      <>
         <h1>
            {name} Welcome {fname} in Iprogrammer{" "}
         </h1>
      </>
   );
};

export default ComC;
