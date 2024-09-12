import { useId } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const emailId = useId();

  return (
    <>
      <div className="cart-wrapper">
        <h1>Your cart</h1>
        {/* <p>
          Your cart is empty. Add a product from the{" "}
          <Link to="/products">products</Link> page.
        </p> */}
        <div className="cart-product">
          <img
            src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png"
            alt="Product name here"
            width="126"
            height="84"
          />
          <div className="cart-product-details">
            <div className="cart-product-name">
              <p>Tomatoes (1kg) </p>
              <ul className="cart-buttons">
                <li>2</li>
                <li>
                  <button>+</button>
                </li>
                <li>
                  <button>-</button>
                </li>
              </ul>
            </div>
            <p>$2.20</p>
          </div>
          <p>$4.40</p>
        </div>
        <div className="cart-total">
          <h2>Your total price</h2>
          <p className="cart-total-value">$10.0</p>
        </div>
        <form>
          <label className="label" htmlFor={emailId}>
            Email<span className="required">*</span>:
          </label>
          <input
            id={emailId}
            type="email"
            className="input"
            placeholder="Enter your email"
          />
          <p className="text-dimmed cart-notice">
            Enter your email and then click on pay and your products will be
            delivered to you the same day!
          </p>
          <p className="cart-notice cart-warning">
            Enter your own Stripe Publishable Key in Cart.js for the checkout to
            work.
          </p>
          <div className="cart-button-wrapper">
            <input type="submit" value="Pay" className="btn" />
          </div>
        </form>
      </div>
    </>
  );
}
