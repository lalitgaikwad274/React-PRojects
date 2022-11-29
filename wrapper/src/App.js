import "./App.css";
import AddUser from "./Components/AddUser/AddUser";
import UserList from "./Components/UserList/UserList";
import { Fragment, useState } from "react";

function App() {
   const [Data, setData] = useState([]);

   const onAddUser = (Age, Name) => {
      console.log(Age, Name);
      setData([
         ...Data,
         {
            id: Math.round(Math.random() * 100),
            age: Age,
            name: Name,
         },
      ]);
      // console.log(Data);
   };

   return (
      // <div className="App">
      //    <AddUser UserAdd={onAddUser} />
      //    <UserList data={Data} />
      // </div>
      <Fragment>
         <AddUser UserAdd={onAddUser} />
         <UserList data={Data} />
      </Fragment>
   );
}

export default App;
