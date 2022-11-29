export const incCounterAsync = () => {
   return {
      type: "increment",
   };
};

export const incCounter = () => {
   return (dispatch) => {
      setTimeout(() => {
         dispatch(incCounterAsync());
      }, 4000);
   };
};

export const decCounter = () => {
   return {
      type: "decrement",
   };
};
