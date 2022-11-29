import React from "react";
import { connect } from "react-redux";

const Counter = (props) => {
   return (
      <>
         <h1>count: {props.count}</h1>

         <button className="btn btn-primary" onClick={props.decCounter}>
            -
         </button>
         <button className="btn btn-primary" onClick={props.incCounter}>
            +
         </button>
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
      incCounter: () => dispatch({ type: "increment", count: 1 }),
      decCounter: () => dispatch({ type: "decrement", count: 1 }),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
