import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Login from "./Login";
import Profile from "./Profile";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <h1>Page not found</h1>,
      },
    ],
  },
]);

function AppLayout() {
  return (
    <>
      <div className="wrapper-gray">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <div className="container page-wrapper">
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
