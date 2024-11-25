import { useDispatch } from "react-redux";
import CartItem from "../../interfaces/CartItemModel";
import { addItem} from "../../stores/store";

const AddToCart = (cartItem: CartItem) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItem(cartItem));
  };

  return (
    <a
      href="#"
      className="btn btn-warning mx-1"
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      Add to cart
    </a>
  );
};

export default AddToCart;
