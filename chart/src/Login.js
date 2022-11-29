import React from "react";

const Login = () => {
   return (
      <form className="formContainer" action="" method="post">
         <div className="container">
            <label htmlFor="uname">
               <b>Username</b>
            </label>
            <input
               type="text"
               placeholder="Enter Username"
               name="uname"
               required=""
            />
            <label htmlFor="psw">
               <b>Password</b>
            </label>
            <input
               type="password"
               placeholder="Enter Password"
               name="psw"
               required=""
            />
            <button type="submit">Login</button>
            <label>
               <input
                  type="checkbox"
                  defaultChecked="checked"
                  name="remember"
               />{" "}
               Remember me
            </label>
         </div>
         <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
            <button type="button" className="cancelbtn">
               Cancel
            </button>
            <span className="psw">
               Forgot <a href="#">password?</a>
            </span>
         </div>
      </form>
   );
};

export default Login;
