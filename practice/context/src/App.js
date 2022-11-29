import { createContext } from "react";
import "./App.css";
import ComA from "./Components/ComA";

const myContext = createContext();

function App() {
   let fname = "deku";
   let name = "hey";
   return (
      <>
         <myContext.Provider value={{ fname, name }}>
            <div className="App">
               <ComA />
            </div>
         </myContext.Provider>
      </>
   );
}

export default App;
export { myContext };
