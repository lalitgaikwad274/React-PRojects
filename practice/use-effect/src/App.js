import MainHeader from "./Components/MainHeader/MainHeader";
import React, { useEffect, useState } from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

function App() {
   const [isLogged, setIsLogged] = useState(false);

   const loginHandler = () => {
      setIsLogged(true);
      localStorage.setItem("isLogged", 1);
   };

   const logoutHandler = () => {
      localStorage.removeItem("isLogged");
      setIsLogged(false);
   };

   useEffect(() => {
      const store_data = localStorage.getItem("isLogged");

      if (store_data === "1") {
         setIsLogged(true);
      }
   }, []);

   return (
      <>
         <MainHeader isLoggedIn={isLogged} onLogout={logoutHandler} />
         <main>
            {!isLogged && <Login onLogin={loginHandler} />}
            {isLogged && <Home onLogout={logoutHandler} />}
         </main>
      </>
   );
}

export default App;
