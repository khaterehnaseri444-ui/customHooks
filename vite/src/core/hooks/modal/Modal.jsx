import React from "react";

function Modal({ openModal, setOpenModal, children }) {
  return (
    openModal && (
      <div
        onClick={() => setOpenModal(false)}
        className="w-full h-200  backdrop-blur-md bg-[#0000007A] inset-0 fixed z-50 flex items-center justify-center"
      >
        {children}
      </div>
    )
  );
}

export default Modal;
