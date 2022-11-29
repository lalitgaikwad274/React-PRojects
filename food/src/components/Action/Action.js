export const incCounter = (content) => ({
   type: "increment",
   payload: content,
});

export const decCounter = (content) => ({
   type: "decrement",
   payload: content,
});
