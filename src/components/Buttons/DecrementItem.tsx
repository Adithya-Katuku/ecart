import { useDispatch } from "react-redux";
import { decrementItem } from "../../stores/store";

interface Props {
  id: number;
}

const DecrementItem = ({ id }: Props) => {
    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(decrementItem(id));
    };
    return (
      <div>
        <button
          className="btn border"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation()
            handleClick();
          }}
        >
          -
        </button>
      </div>
    );
};

export default DecrementItem;
