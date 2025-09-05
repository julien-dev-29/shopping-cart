import styled from "styled-components";
import Header from "./components/organisms/Header/Header";
import { Outlet } from "react-router";
import Footer from "./components/organisms/Footer/Footer";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.backgrounds.base};
`;

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = () =>
      fetch("https://fakestoreapi.com/products").then((response) =>
        response.json()
      );
    const fetchCart = () =>
      fetch("https://fakestoreapi.com/carts/1").then((response) =>
        response.json()
      );
    Promise.all([fetchProducts(), fetchCart()])
      .then(([dataProducts, dataCart]) => {
        setProducts(dataProducts);
        setCart(dataCart);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <Wrapper>
      <Header cart={cart} isLoading={isLoading} />
      <Outlet context={[products, isLoading, cart, setCart, error]} />
      <Footer />
    </Wrapper>
  );
}

export default App;
