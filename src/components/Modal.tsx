import React from "react";
import Cart from "./cart/Cart";
import { toggleCart } from "../stores/store";
import { useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className="modal-overlay min-vw-100"
        onClick={() => dispatch(toggleCart())}
        style={modalOverlayStyle}
      >
        <div
          className="modal-content overflow-y-scroll"
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={modalContentStyle}
        >
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-secondary"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(toggleCart());
              }}
            >
              Close
            </button>
          </div>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Modal;

const modalOverlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "30rem",
};
const modalContentStyle: React.CSSProperties = {
  background: "white",
  padding: "20px",
  borderRadius: "8px",
  maxWidth: "500px",
  width: "100%",
  maxHeight: '60%',
  position: "relative",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};
