import "./App.css";
import Modal from "./components/Modal/Modal";
import Items from "./components/Items/Items";
import NavBar from "./components/Navbar/NavBar";
import React, { useState, useReducer } from "react";
import { Provider } from "react-redux";
import store from "./components/store";
import food from "./components/food";
import countReducer from "./components/Reducer/Reducer";

function App() {
   const [Count, setCount] = useState(0);
   const [open, setOpen] = useState(false);
   const [CartData, setCartData] = useState([]);
   const addToCart = (item) => {
      // console.log(`In Items ${item.count} and id is ${item.itemId}`);
      setCount((cnt) => Number(cnt) + Number(item.count));

      for (const ele of food) {
         if (item.itemId === ele.id) {
            setCartData([
               ...CartData,
               {
                  id: ele.id,
                  name: ele.name,
                  desc: ele.desc,
                  price: ele.price,
                  count: item.count,
               },
            ]);
            break;
         }
      }
   };

   const initialState = {
      item: CartData,
      Tamount: 0,
      Tcount: 0,
   };

   const [state, dispatch] = useReducer(countReducer, initialState);

   return (
      <Provider store={store}>
         <div className="App">
            <NavBar count={Count} onOpen={() => setOpen(true)} />
            <Items food={food} onSelect={addToCart} />
            <Modal
               open={open}
               onClose={() => setOpen(false)}
               CartData={CartData}
            />
         </div>
      </Provider>
   );
}

export default App;
