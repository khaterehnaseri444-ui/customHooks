import { useState } from "react";
import Modal from "../core/hooks/modal/Modal";

function ModalTest() {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);
  return (
    <div className="w-full h-200 bg-pink-200 flex items-center justify-center flex-col gap-20">
      <h1 className="text-[30px] font-bold">Modal Test</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-[15px] cursor-grab"
      >
        Click
      </button>
      {openModal && (
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          <div className="w-200 h-100 bg-white opacity-100 flex items-center justify-center gap-20 p-5 flex-col">
            <div className="w-full h-10 flex items-center justify-end">
              <button
                onClick={() => setOpenModal(false)}
                className="w-8 h-8 bg-red-600 flex items-center justify-center cursor-pointer"
              >
                X
              </button>
            </div>
            <p className="w-full h-80">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestias eum fugit ab non quia error! Consequuntur, quam? Dolor, quod voluptas! Ipsa, nesciunt commodi. Recusandae modi suscipit dolorum, iure blanditiis odit enim perferendis unde alias, possimus corrupti! Sequi modi culpa explicabo totam minus labore, reiciendis iste quaerat incidunt atque? Ut aliquam quos labore molestiae? Ducimus illum enim vero sunt ab iure voluptas, ad quia similique officia laudantium voluptatem odio? Non, blanditiis? In similique inventore eum. Odio sapiente quaerat, ut perferendis officiis illum dignissimos praesentium quam et eaque molestiae sit, deserunt numquam minima delectus beatae veniam quibusdam dolorum voluptatibus facere! Ducimus?
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ModalTest;
