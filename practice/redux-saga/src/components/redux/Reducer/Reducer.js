// import { combineReducers } from "redux";

const initialState = {
   count: 10,
};

const countReducer = (state = initialState, action) => {
   switch (action.type) {
      case "count-up":
         return { ...state, count: state.count + 1 };
      case "decrement":
         return { ...state, count: state.count - 1 };
      default:
         return state;
   }
};

// const rootReducer = combineReducers(countReducer);

export default countReducer;
