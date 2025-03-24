import { Link } from "react-router";
import Price from "./Price";

export default function Product(props) {
    return (
        <div className="product">
            <Link to={`/products/${props.id}`}>
                <img
                    className="product-image"
                    width="272"
                    height="300"
                    src={props.thumbnail}
                    alt={props.name}
                />
                <p className="product-name">{props.name}</p>
                <div className="product-price">
                    <Price
                        finalPrice={props.final_price}
                        originalPrice={props.original_price}
                    />
                </div>
            </Link>
        </div>
    );
}
