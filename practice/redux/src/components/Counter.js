import React from "react";
// import { useReducer } from "react";
import { connect } from "react-redux";
import { incCounter, decCounter } from "./redux/Action/Action";

const Counter = (props) => {
   // const initialState = {
   //    numOfCakes: 20,
   //    numOfIcecream: 10,
   // };

   // function reducer(state, action) {
   //    switch (action.type) {
   //       case "BUY_CAKE":
   //          return { ...state, numOfCakes: state.numOfCakes - 1 };
   //       case "BUY_ICECREAM":
   //          return { ...state, numOfIcecream: state.numOfIcecream - 1 };
   //       default:
   //          throw new Error();
   //    }
   // }
   // const [state, dispatch] = useReducer(reducer, initialState);
   return (
      <>
         <h1>count: {props.count}</h1>
         {/* <h1>Icecream_Count: {state.numOfIcecream}</h1> */}

         <button onClick={props.decCounter}>-</button>
         <button onClick={props.incCounter}>+</button>
         {/* <button onClick={() => dispatch({ type: "BUY_ICECREAM" })}>
            BUY_ICECREAM
         </button> */}
      </>
   );
};

//

const mapStateToProps = (state) => {
   return {
      count: state.count,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      incCounter: () => dispatch(incCounter()),
      decCounter: () => dispatch(decCounter()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
