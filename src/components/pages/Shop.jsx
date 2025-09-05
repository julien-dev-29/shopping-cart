import { useOutletContext } from "react-router";
import styled from "styled-components";
import Card from "../organisms/Card/Card";
const Wrapper = styled.div`
  padding: 96px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 400px);
  gap: 64px;
`;
const Shop = () => {
  const [products, isLoading, cart, setCart, error] = useOutletContext();
  function handleAddProduct(productId, quantity) {
    if (quantity <= 0) return;
    console.log(productId);

    setCart({
      ...cart,
      products: [
        ...cart.products,
        { productId: productId, quantity: quantity },
      ],
    });
  }
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <Wrapper>
      <CardWrapper>
        {products.map((product) => {
          let isAddToCart = null;
          cart.products.map((cartProduct) =>
            cartProduct.productId === product.id ? (isAddToCart = true) : false
          );
          return (
            <Card
              key={product.id}
              product={product}
              handleAddProduct={handleAddProduct}
              isAddToCart={isAddToCart}
              noInput={true}
            />
          );
        })}
      </CardWrapper>
    </Wrapper>
  );
};

export default Shop;
