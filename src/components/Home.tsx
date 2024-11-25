import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import Product from "../interfaces/ProductModel";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
import Modal from "./Modal";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const isCartOpen = useSelector((state: RootState) => state.store.isCartOpen);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // if(!localStorage.username) return <Navigate to={'/'}/>

  return (
    <div >
      
      <div className="row row-cols-auto justify-content-center m-0">
        {products.map((product) => (
          <div className="col bg-white my-1 bg-red" style={{maxWidth:'fitcontent'}} key={product.id}>
            <Card {...product}></Card>
          </div>
        ))}
      </div>
      {isCartOpen && <Modal />}
    </div>
  );
};



export default Home;
