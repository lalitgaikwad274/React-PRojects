import React from "react";
import { incCounter, decCounter } from "../Action/Action";
import { connect } from "react-redux";

const Modal = ({ open, onClose, CartData, incCounter, decCounter }) => {
   if (!open) return null;

   const MODAL_styles = {
      position: "fixed",
      top: "30%",
      left: "30%",
      width: "50%",
      tranform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      padding: "30px",
      zIndex: 1000,
      borderRadius: "10px",
      textAlign: "center",
   };

   const overlay_styles = {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      backgroundColor: "rgba(0, 0, 0, .7)",
      zIndex: 1000,
   };
   console.log("this cart Data", CartData);

   return (
      <div style={overlay_styles}>
         <div style={MODAL_styles}>
            {CartData.length > 0 ? (
               CartData.map((item) => (
                  <div className="container d-flex flex-row">
                     <div className="container text-start">
                        <div className="d-flex flex-column">
                           <strong>{item.name}</strong>
                           <i>{item.desc}</i>
                           <div className="price d-flex justify-content-between">
                              <span>${item.price}</span>
                              <span className="text-white bg-secondary ps-2 pe-2 rounded-2">
                                 {item.count}
                              </span>
                           </div>
                        </div>
                     </div>
                     <div className="container d-block">
                        <div>${item.price * item.count}</div>
                        <button className="btn me-2" onClick={decCounter}>
                           -
                        </button>
                        <button className="btn" onClick={incCounter}>
                           +
                        </button>
                     </div>
                     <hr />
                  </div>
               ))
            ) : (
               <h1>NO Items added in Cart</h1>
            )}
            <button className="btn bg-primary mt-5 mb-2 " onClick={onClose}>
               Checkout
            </button>
         </div>
      </div>
   );
};

// export default Modal;

const mapStateToProps = (state) => {
   return { state };
};

const mapDispatchToProps = (dispatch) => {
   return {
      incCounter: () => dispatch(incCounter()),
      decCounter: () => dispatch(decCounter()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
