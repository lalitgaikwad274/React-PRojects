import { Component } from "react";
class Header extends Component {
   constructor(props) {
      super(props);
      this.state = { favoritecolor: "red" };
   }

   // getDerivedStateFromProps is the first method that is called when a component gets updated

   // static getDerivedStateFromProps(props, state) {
   //    return { favoritecolor: props.favcol };
   // }

   //if shouldComponentUpdate() return false it will not update the component and if it is true then it will upadte th component
   // In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.

   // shouldComponentUpdate() {
   //    return true;
   // }

   changeColor = () => {
      this.setState(
         this.state.favoritecolor === "blue"
            ? { favoritecolor: "red" }
            : { favoritecolor: "blue" }
      );
   };
   render() {
      return (
         <div>
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            <button type="button" onClick={this.changeColor}>
               Change color
            </button>
         </div>
      );
   }
}
export default Header;

