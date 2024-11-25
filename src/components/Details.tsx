import { useEffect, useState } from "react";
import Product from "../interfaces/ProductModel";
import axios from "axios";
import { IoIosStar } from "react-icons/io";
import AddToCart from "./Buttons/AddToCart";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
import Modal from "./Modal";

const Details = () => {
  const { id } = useParams();
  const isCartOpen = useSelector((state: RootState) => state.store.isCartOpen);

  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  // if(!localStorage.username) return <Navigate to={'/'}/>
  return product ? (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="p-2" style={{ maxWidth:"100%"}}>
          <div
            className="product-image m-2 pt-5 d-flex align-items-center justify-content-center"
            style={{ height: "30%", width: "100%", maxWidth:"100%" }}
          >
            <img
              src={product.image}
              style={{ maxHeight: "100%", maxWidth: "100%", }}
            />
          </div>
          <div className="card-body m-1 pt-5">
            <h5 className="card-title my-1">{product.title}</h5>
            <h6 className="text-secondary">{product.category}</h6>

            <span className="d-flex align-items-center p-1 my-2 border-bottom">
              <IoIosStar className="text-warning mb-1 me-1" />
              <span className="fw-bold">{product.rating.rate}/5</span>
              <span className="text-secondary mx-2">
                {product.rating.count} ratings
              </span>
            </span>

            <div className="d-flex justify-content-center my-3">
              <h5 className="fw-bold">$ {product.price}</h5>
            </div>

            <p className="my-1 fw-bold">Description:</p>
            <p>{product.description}</p>

            <div className=" m-1 d-flex justify-content-center">
              <AddToCart {...product} count={1} />
            </div>
          </div>
        </div>
      </div>
      {isCartOpen && <Modal />}
    </div>
  ) : (
    <h5>Loading...</h5>
  );
};

export default Details;
