import { useId, use } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function Cart() {
  const emailId = useId();
  const { cart, cartSum, handleAddProduct, handleRemoveProduct } =
    use(CartContext);
  const { user } = use(UserContext);

  if (cart.length === 0) {
    return (
      <div className="cart-wrapper">
        <h1>Your cart</h1>
        <p>
          Your cart is empty. Add a product from the{" "}
          <Link to="/products">products</Link> page.
        </p>
      </div>
    );
  }

  return (
    <div className="cart-wrapper">
      <h1>Your cart</h1>
      {cart.map((product) => (
        <div key={product.id} className="cart-product">
          <img
            src={product.thumbnail}
            alt={product.name}
            width="126"
            height="84"
          />
          <div className="cart-product-details">
            <div className="cart-product-name">
              <p>{product.name}</p>
              <ul className="cart-buttons">
                <li>{product.quantity}</li>
                <li>
                  <button onClick={() => handleAddProduct(product)}>+</button>
                </li>
                <li>
                  <button onClick={() => handleRemoveProduct(product)}>
                    -
                  </button>
                </li>
              </ul>
            </div>
            <p>{product.final_price}</p>
          </div>
          <p>{((product.final_price * product.quantity) / 100).toFixed(2)}</p>
        </div>
      ))}

      <div className="cart-total">
        <h2>Your total price</h2>
        <p className="cart-total-value">${(cartSum / 100).toFixed(2)}</p>
      </div>
      <form onSubmit={(event) => event.preventDefault()}>
        <label className="label" htmlFor={emailId}>
          Email<span className="required">*</span>:
        </label>
        <input
          id={emailId}
          type="email"
          className="input"
          placeholder="Enter your email"
          defaultValue={user ? user.email : ""}
        />
        <p className="text-dimmed cart-notice">
          Enter your email and then click on pay and your products will be
          delivered to you the same day!
        </p>
        <p className="cart-notice cart-warning">
          This is a demo, so the form does not submit any data.
        </p>
        <div className="cart-button-wrapper">
          <input type="submit" value="Pay" className="btn" />
        </div>
      </form>
    </div>
  );
}
