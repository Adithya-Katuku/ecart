import { Link } from "react-router-dom";

interface Props {
  id: number;
}
const ShowDetails = ({ id }: Props) => {
  return (
    <Link to={"/home/" + id}>
      <button className="btn btn-primary mx-1">Details</button>
    </Link>
  );
};

export default ShowDetails;
