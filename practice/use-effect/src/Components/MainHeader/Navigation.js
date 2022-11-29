import React from "react";

const Navigation = (props) => {
   return (
      <nav className="nav-bar">
         <ul className="nav justify-content-end">
            {props.isLoggedIn && (
               <li className="nav-item">
                  <a href="/">users</a>
               </li>
            )}
            {props.isLoggedIn && (
               <li className="nav-item">
                  <a href="/">Admin</a>
               </li>
            )}
            {props.isLoggedIn && (
               <li className="nav-item">
                  <button className="btn" onClick={props.onLogout}>
                     Logout
                  </button>
               </li>
            )}
         </ul>
      </nav>
   );
};

export default Navigation;
