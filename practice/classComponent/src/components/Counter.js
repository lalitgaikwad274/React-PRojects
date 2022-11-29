import React, { Component } from "react";

class Counter extends Component {
   state = {
      count: 0,
   };
   a = "lalit";
   render() {
      // const a = "lalit";

      return (
         <div
            style={{
               marginTop: "200px",
               display: "flex",
               justifyContent: "center",
               flexDirection: "column",
               alignItems: "center",
            }}
         >
            <h3>{this.a}</h3>
            <h3>{this.state.count}</h3>
            <button
               style={{
                  margin: "20px",
                  padding: "10px 20px",
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                  fontSize: "20px",
                  borderRadius: "10px",
               }}
               onClick={() => this.setState({ count: this.state.count + 1 })}
            >
               Update
            </button>
         </div>
      );
   }
}

export default Counter;
