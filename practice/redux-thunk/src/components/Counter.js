import React from "react";
// import { useReducer } from "react";
import { connect } from "react-redux";
import { incCounter, decCounter } from "./redux/Action/Action";

const Counter = (props) => {
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
