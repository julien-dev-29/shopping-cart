import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.js";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes.jsx";

const router = createBrowserRouter(routes, {
  basename: "/shopping-cart",
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
