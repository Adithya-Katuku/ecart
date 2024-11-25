import { useDispatch } from "react-redux";
import { incrementItem } from "../../stores/store";

interface Props {
    id: number;
}

const IncrementItem = ({id}:Props) => {
    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(incrementItem(id));
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
          +
        </button>
      </div>
    );
}

export default IncrementItem