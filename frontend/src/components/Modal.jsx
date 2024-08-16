import { IoClose } from "react-icons/io5";

const Modal = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-10 backdrop-blur-sm">
      <div>
        <IoClose />
      </div>
    </div>
  );
};
export default Modal;
