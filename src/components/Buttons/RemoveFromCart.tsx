import { useDispatch } from "react-redux";
import { removeItem } from "../../stores/store";
interface Props {
  id: number;
}
const RemoveFromCart = ({ id }: Props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeItem(id));
  };
  return (
    <div>
      <button
        className="btn h-50 btn-danger"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation()
          handleClick();
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default RemoveFromCart;
