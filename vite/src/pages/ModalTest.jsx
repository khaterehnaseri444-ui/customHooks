import { useState } from "react";
import Modal from "../core/hooks/modal/Modal";

function ModalTest() {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);
  return (
    <div>
      <h1>Modal Test</h1>
      <button onClick={() => setOpenModal(!openModal)}>*</button>
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}
    </div>
  );
}

export default ModalTest;
