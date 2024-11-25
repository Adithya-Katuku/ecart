import Rating from "./RatingModel";

interface Product{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image:string;
    rating:Rating;
}

export default Product