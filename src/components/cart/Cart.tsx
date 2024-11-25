import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.store.list);
  let totalCost = 0;
  return cart.length > 0 ? (
    <div>
      {cart.map((item) => {
        totalCost += item.price*item.count;
        return <CartItem key={item.id} {...item} />;
      })}
      <h5>
        Total Cost: <span className="text-success">$ {totalCost.toFixed(2)}</span>
      </h5>
      <div className="d-flex justify-content-center m-1">
        <button className="btn btn-primary">Checkout</button>
      </div>
    </div>
  ) : (
    <div className="m-1">Cart is Empty. Add items :)</div>
  );
};

export default Cart;
