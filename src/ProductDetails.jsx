import Price from "./Price";
import { Link, useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  const details = {
    id,
    name: "Product " + id,
    finalPrice: 100,
    originalPrice: 120,
    thumbnail:
      "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png",
    nutrition: {
      protein: 25,
      carbs: 10,
      fat: 5,
    },
    description: `400g pre-cut pineapple pieces sold at €4 per piece.<br><br>
    Deserunt consectetur commodo qui velit ea ex reprehenderit amet est ut cupidatat proident qui. Reprehenderit proident voluptate aliqua eu elit sit. Deserunt sit tempor occaecat nisi deserunt deserunt cupidatat labore id labore dolore sit amet.`,
  };

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
              finalPrice={details.finalPrice}
              originalPrice={details.originalPrice}
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
