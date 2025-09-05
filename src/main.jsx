import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Shop from "./components/pages/Shop.jsx";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.js";
import { createBrowserRouter, RouterProvider } from "react-router";
import Cart from "./components/pages/Cart.jsx";
import Home from "./components/pages/Home.jsx";
import Error from "./components/pages/Error.jsx";
import Product from "./components/pages/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "product/:productId", element: <Product /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
