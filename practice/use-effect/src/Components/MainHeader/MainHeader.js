import React from "react";
import Navigation from "./Navigation";
import "./MainHeader.css";
const MainHeader = (props) => {
   const onsetLogout = () => {
      props.onLogout();
   };
   return (
      <header className="main-header">
         <h1>Navigation Bar</h1>
         <Navigation isLoggedIn={props.isLoggedIn} onLogout={onsetLogout} />
      </header>
   );
};

export default MainHeader;
