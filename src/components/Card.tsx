import Product from "../interfaces/ProductModel";
import { IoIosStar } from "react-icons/io";
import AddToCart from "./Buttons/AddToCart";
import ShowDetails from "./Buttons/ShowDetails";

const Card = ({ id, title, price, image, rating }: Product) => {
  return (
    <div className="card p-1 my-2" style={{ width: "20rem", height: "28rem" }}>
      <div
        className="product-image d-flex"
        style={{ height: "18rem", width: "18rem" }}
      >
        <img
          src={image}
          className="m-auto"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          {title.length > 35 ? title.substring(0, 35) + "..." : title}
        </h5>

        <div className="d-flex justify-content-between">
          <h5 className="fw-bold">$ {price.toFixed(2)}</h5>
          <span className="d-flex align-items-center">
            <IoIosStar className="text-warning mb-1 me-1" />
            <span className="fw-bold">{rating.rate}/5</span>
            <span className="text-secondary">[{rating.count}]</span>
          </span>
        </div>

        <div className=" m-1 d-flex justify-content-center">
          <ShowDetails id={id} />
          <AddToCart id={id} image={image} title={title} price={price} count={1} />
        </div>
      </div>
    </div>
  );
};

export default Card;
