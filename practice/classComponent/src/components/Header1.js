import { Component } from "react";
class Header1 extends Component {
   constructor(props) {
      super(props);
      this.state = { favoritecolor: "red", color: "yellow" };
   }
   componentDidMount() {
      setTimeout(() => {
         this.setState({ favoritecolor: `${this.state.color}` });
      }, 1000);
   }

   // If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.

   getSnapshotBeforeUpdate(prevProps, prevState) {
      document.getElementById("div1").innerHTML =
         "Before the update, the favorite was " + prevState.favoritecolor;
   }

   //The componentDidUpdate method is called after the update has been rendered in the DOM:

   componentDidUpdate() {
      document.getElementById("div3").innerHTML =
         "The updated favorite is " + this.state.color;
      document.getElementById("div2").innerHTML =
         "The updated favorite is " + this.state.favoritecolor;
   }
   render() {
      return (
         <div
            style={{
               display: "flex",
               justifyContent: "center",
               flexDirection: "column",
               alignItems: "center",
            }}
         >
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            <div id="div1"></div>
            <div id="div2"></div>
            <div id="div3"></div>

            <div>
               <input
                  type="text"
                  onChange={(e) =>
                     this.setState({
                        ...this.state,
                        color: `${e.target.value}`,
                     })
                  }
               ></input>
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
                  onClick={() => {
                     this.setState({
                        ...this.state,
                        favoritecolor: `${this.state.color}`,
                     });
                  }}
               >
                  change color
               </button>
            </div>
         </div>
      );
   }
}

export default Header1;
