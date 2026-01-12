import styled from "styled-components";
import Header from "./components/organisms/Header/Header";
import { Outlet } from "react-router";
import Footer from "./components/organisms/Footer/Footer";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import cartReducer from "./reducer/cartReducer";

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
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, dispatch] = useReducer(cartReducer, []);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => setError(error))
      .finally(setIsLoading(false));
  }, []);

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Wrapper>
      <Header cartItemsCount={cartItems.length} />
      <Outlet context={[products, dispatch, cartItems]} />
      <Footer />
    </Wrapper>
  );
}

export default App;
