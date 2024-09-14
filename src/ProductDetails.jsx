import Price from "./Price";
import { Link, useParams } from "react-router-dom";
import { useSuspenseQuery } from "@tanstack/react-query";
import { get } from "./lib/fetcher";

export default function ProductDetails() {
  const { id } = useParams();

  const { data } = useSuspenseQuery({
    queryKey: ["products/details", id],
    queryFn: () => get(`products?id=eq.${id}`),
  });

  const details = data[0];

  return (
    <>
      <Link to="/products" className="back">
        &lsaquo; Back to products
      </Link>
      <div className="details">
        <div>
          <img
            src={details.thumbnail}
            alt={details.name}
            width="612"
            height="408"
            className="details-image"
          />

          <h2>Product details</h2>
          <table className="nutrition">
            <thead>
              <tr>
                <th>Nutrient</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Protein</td>
                <td>{details.nutrition.protein} g</td>
              </tr>
              <tr>
                <td>Carbohydrates</td>
                <td>{details.nutrition.carbs} g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>{details.nutrition.fat} g</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h1 className="details-name">{details.name}</h1>
          <p className="details-price">
            <Price
              finalPrice={details.final_price}
              originalPrice={details.original_price}
            />
          </p>
          <p
            className="text-dimmed"
            dangerouslySetInnerHTML={{ __html: details.description }}
          ></p>
          <div className="details-a2c">
            <button className="btn btn-block">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
