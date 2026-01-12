import Cart from "./components/pages/Cart.jsx";
import Home from "./components/pages/Home.jsx";
import Error from "./components/pages/Error.jsx";
import Product from "./components/pages/Product.jsx";
import App from "./App.jsx";
import Shop from "./components/pages/Shop.jsx";

const routes = [
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
]

export default routes