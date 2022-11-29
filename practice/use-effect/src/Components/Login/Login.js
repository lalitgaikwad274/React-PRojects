import React, { useState, useEffect } from "react";
import "./Login.css";

const Login = (props) => {
   const [email, setEmail] = useState("");
   const [Password, setPassword] = useState("");
   const [isInvalid, setIsInvalid] = useState(false);

   const onLoginData = () => {
      if (email === "" && Password.length < 6) {
         alert("please filled the data");
         setIsInvalid(false);
         return;
      } else if (!email.includes("@") && !email.includes(".com")) {
         alert("please enter valid email");
         return;
      } else if (Password.length < 6) {
         alert("password length must be greater than 5");
      }
      //   setIsInvalid(false);
      else {
         setEmail("");
         setPassword("");
         props.onLogin(email, Password);
      }
   };

   useEffect(() => {
      const flag = setTimeout(() => {
         setIsInvalid(email.includes("@") && Password.trim().lenght >= 6);
      }, 5000);

      return () => {
         clearTimeout(flag);
      };
   }, [email, Password]);

   return (
      <div className="container">
         <form className={`formData ${isInvalid ? "Invalid" : ""}`}>
            <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
               </label>
               <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                     borderColor: !email ? "red" : "#006d41",
                     borderWidth: "2px",
                  }}
               />
            </div>
            <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
               </label>
               <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                     borderColor: Password.length < 6 ? "red" : "#006d41",
                     borderWidth: "2px",
                  }}
               />
            </div>
            <div className="text-center">
               <button
                  type="submit"
                  className="btn btn-primary mx-auto"
                  onClick={onLoginData}
               >
                  Login
               </button>
            </div>
         </form>
      </div>
   );
};

export default Login;
