import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
function ModalBox(props) {
   const [isShow, invokeModal] = useState(false);
   const initModal = () => {
      return invokeModal(!isShow);
   };

   const [Text, setText] = useState("");
   const [flag, setFlag] = useState(true);

   const addTask = () => {
      let data = {
         id: Math.round(Math.random() * 1000),
         text: Text,
         day: new Date(),
         reminder: false,
      };

      if (Text.length > 0) {
         setFlag(true);
         setText(Text);
         props.sendData(data);
         initModal();
      } else {
         alert("enter task detail");
         setFlag(false);
      }

      setText("");
   };

   return (
      <>
         <Button variant="success" onClick={initModal}>
            ADD TASK
         </Button>
         <Modal
            show={isShow}
            className="modalbox"
            style={{ marginTop: 100}}
         >
            <Modal.Header closeButton onClick={initModal}>
               <Modal.Title>Add Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <input
                  type="text"
                  className={`form-control ${flag ? "" : "invalid"}`}
                  placeholder="Enter Task"
                  onChange={(e) => {
                     if (e.target.value.length > 0) {
                        setText(e.target.value);
                        setFlag(true);
                     }
                  }}
                  value={Text}
                  required
               />
            </Modal.Body>
            <Modal.Footer>
               <Button variant="danger" onClick={initModal}>
                  Close
               </Button>
               <Button variant="primary" onClick={addTask}>
                  ADD
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}
export default ModalBox;


