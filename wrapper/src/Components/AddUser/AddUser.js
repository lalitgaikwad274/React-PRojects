import React from "react";
import "./AddUser.css";
import { useState } from "react";
import ModalBox from "../Modal/ModalBox";

const AddUser = (props) => {
   const [Age, setAge] = useState("");
   const [Name, setName] = useState("");
   const [isOpen, setisOpen] = useState(false);
   const [Error, setError] = useState({
      error: "",
      msg: "",
   });

   const sendData = () => {
      //   event.preventDefault();
      props.UserAdd(Age, Name);
      setAge("");
      setName("");
      setisOpen(false);
   };

   const ClickBtn = (event) => {
      event.preventDefault();
      //   console.log("name", Name, "age:", Age);

      if (Age === "" && Name === "") {
         setError({
            error: "Input INVALID",
            msg: "please enter IN the Input filled",
         });
         setAge("");
         setName("");
         setisOpen(true);
      } else if (Name === "") {
         console.log("name is null");
         setError({
            error: "Input Email INVALID",
            msg: "please enter the email filled",
         });
         setAge("");
         setName("");
         setisOpen(true);
      } else if (Age === "") {
         console.log("age is null");

         setError({
            error: "Input Age INVALID",
            msg: "please enter the age filled",
         });
         setAge("");
         setName("");
         setisOpen(true);
      } else {
         sendData();
         setisOpen(false);
      }
      //   console.log(isOpen);
   };

   return (
      <>
         <div className="container w-50 mt-5 mb-5 ">
            <form>
               <div className="form-group">
                  <label htmlFor="inputEmail1">Email address</label>
                  <input
                     type="email"
                     className="form-control mt-2"
                     id="inputEmail1"
                     aria-describedby="emailHelp"
                     placeholder="Enter email"
                     onChange={(e) => setName(e.target.value)}
                     value={Name}
                  />
               </div>
               <div className="form-group mt-3">
                  <label htmlFor="inputAge">Age</label>
                  <input
                     type="text"
                     className="form-control mt-2"
                     id="inputAge"
                     placeholder="Enter Age"
                     onChange={(e) => setAge(e.target.value)}
                     value={Age}
                  />
               </div>
               <div className="form-group form-check mt-3">
                  <input
                     type="checkbox"
                     className="form-check-input"
                     id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                     Check me out
                  </label>
               </div>
               <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={ClickBtn}
               >
                  Submit
               </button>
            </form>
         </div>
         <ModalBox
            isOpen={isOpen}
            error={Error}
            onClose={() => setisOpen(false)}
         />
      </>
   );
};

export default AddUser;
