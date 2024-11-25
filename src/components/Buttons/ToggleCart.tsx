import { useDispatch, useSelector } from "react-redux";
import { RootState, toggleCart } from "../../stores/store";
import { FaShoppingCart } from "react-icons/fa";

const ToggleCart = () => {
  const cart = useSelector((state: RootState) => state.store.list);
  let items = 0;
  for (const cartItem of cart) {
    items += cartItem.count;
  }
  const dispatch = useDispatch();

  return (
    <a href="#" className="text-decoration-none text-dark mx-1">
      <div
        className="border border-secondary rounded-2"
        onClick={(e) => {
          e.preventDefault();
          dispatch(toggleCart());
        }}
      >
        <FaShoppingCart className="m-2 fs-5" />
        <span className="me-2 fw-bold text-danger">{items}</span>
      </div>
    </a>
  );
};

export default ToggleCart;
