import RemoveFromCart from "../Buttons/RemoveFromCart";
import CartItemModel from "../../interfaces/CartItemModel";
import DecrementItem from "../Buttons/DecrementItem";
import IncrementItem from "../Buttons/IncrementItem";

const CartItem = ({ id, image, title, price, count }: CartItemModel) => {
  return (
    <div className="d-flex justify-content-between align-items-center m-1 p-1">
      <div style={{ height: "3rem", width: "3rem" }}>
        <img src={image} style={{ maxHeight: "100%", maxWidth: "100%" }} />
      </div>
      <div className="w-100 mx-2">
        <h5>{title.length > 15 ? title.substring(0, 15) + "..." : title}</h5>
        <h6 className="text-success">$ {(price*count).toFixed(2)}</h6>
      </div>
      <div className="d-flex p-1 align-items-center">
        <DecrementItem id={id} />
        <h5 className="m-1">{count}</h5>
        <IncrementItem id={id} />
      </div>
      <RemoveFromCart id={id} />
    </div>
  );
};

export default CartItem;
