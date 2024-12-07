import { useState, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { ErrorBoundary } from "react-error-boundary";

import Navbar from "./Navbar";
import Landing from "./Landing";
import Login from "./Login";
import Profile from "./Profile";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

function Fallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <BrowserRouter>
        <div className="wrapper-gray">
          <div className="container">
            <Navbar user={user} />
          </div>
        </div>
        <div className="container page-wrapper">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route
              path="/profile"
              element={<Profile user={user} setUser={setUser} />}
            />
            <Route
              path="/products"
              element={
                <Suspense fallback={<p className="loading">Loading...</p>}>
                  <Products />
                </Suspense>
              }
            />
            <Route
              path="/products/:id"
              element={
                <Suspense fallback={<p className="loading">Loading...</p>}>
                  <ProductDetails />
                </Suspense>
              }
            />
            <Route path="/cart" element={<Cart user={user} />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
