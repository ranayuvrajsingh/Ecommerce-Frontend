import { FaPlus } from "react-icons/fa";
import { server } from "../redux/store";

type ProductProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  // description: string;
  // category: string;
  // rating: number;
  // reviews: number;
  stock: number;

  handler: () => void;
};

const ProductCard = ({
  productId,
  name,
  photo,
  price,
  stock,
  handler,
}: ProductProps) => {
  return (
    <div className="product-card">
      <img src={`${server}/${photo}`} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>
      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
