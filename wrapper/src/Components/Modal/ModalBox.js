import React from "react";
import { Modal, Button } from "react-bootstrap";
import ReactDOM from "react-dom";

function ModalBox({ isOpen, error, onClose }) {
   // return (
   //    <>
   //       <Modal show={isOpen} className="modalbox" style={{ marginTop: 100 }}>
   //          <Modal.Header closeButton onClick={onClose}>
   //             <Modal.Title>{error.error}</Modal.Title>
   //          </Modal.Header>
   //          <Modal.Body>
   //             <label>{error.msg}</label>
   //          </Modal.Body>
   //          <Modal.Footer>
   //             <Button variant="danger" onClick={onClose}>
   //                Close
   //             </Button>
   //          </Modal.Footer>
   //       </Modal>
   //    </>
   // );

   //With Portal

   return ReactDOM.createPortal(
      <>
         <Modal show={isOpen} className="modalbox" style={{ marginTop: 100 }}>
            <Modal.Header closeButton onClick={onClose}>
               <Modal.Title>{error.error}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <label>{error.msg}</label>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="danger" onClick={onClose}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
      </>,
      document.getElementById("myroot")
   );
}
export default ModalBox;
