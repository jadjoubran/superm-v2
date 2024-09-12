import { Link } from "react-router-dom";
import Price from "./Price";

export default function Product(props) {
  console.log(props);
  return (
    <div className="product">
      <Link to={`/products/${props.id}`}>
        <div>
          <img
            className="product-image"
            src={props.thumbnail}
            alt={props.name}
          />
        </div>
        <p className="product-name">{props.name}</p>
        <div className="product-price">
          <Price
            finalPrice={props.finalPrice}
            originalPrice={props.originalPrice}
          />
        </div>
      </Link>
    </div>
  );
}
