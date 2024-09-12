import { useState, useTransition } from "react";
import Product from "./Product";

const tempProducts = [
  {
    id: 1,
    name: "Product One",
    finalPrice: 100,
    originalPrice: 120,
    thumbnail:
      "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png",
  },
  {
    id: 2,
    name: "Product two",
    finalPrice: 200,
    originalPrice: 200,
    thumbnail:
      "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png",
  },
  {
    id: 3,
    name: "Product 3",
    finalPrice: 300,
    originalPrice: 320,
    thumbnail:
      "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png",
  },
  {
    id: 4,
    name: "Product Four",
    finalPrice: 400,
    originalPrice: 400,
    thumbnail:
      "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png",
  },
  {
    id: 5,
    name: "Product 5",
    finalPrice: 500,
    originalPrice: 520,
    thumbnail:
      "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png",
  },
  {
    id: 6,
    name: "Product 6",
    finalPrice: 600,
    originalPrice: 600,
    thumbnail:
      "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png",
  },
];

export default function Products() {
  const [, startTransition] = useTransition();
  const [query, setQuery] = useState("");

  function handleSearchChange(event) {
    startTransition(() => {
      setQuery(event.target.value.trim().toLowerCase());
    });
  }

  const filteredProducts = tempProducts.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <>
      <div className="products-title">
        <h1>Products</h1>
        <input
          type="search"
          className="search"
          value={query}
          placeholder="Search products"
          onChange={handleSearchChange}
        />
      </div>
      {filteredProducts.length === 0 ? (
        <div className="products-not-found">
          <div>
            <h2>No products found!</h2>
            <p>
              Your search &quot;<strong>{query}</strong>&quot; was not found in
              our store.
            </p>
            <button
              className="btn btn-dimmed"
              type="button"
              onClick={() => setQuery("")}
            >
              Reset search
            </button>
          </div>
        </div>
      ) : null}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
