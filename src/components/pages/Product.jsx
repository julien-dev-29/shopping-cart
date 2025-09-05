import { useOutletContext, useParams } from "react-router";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 96px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const WrapperImage = styled.div`
  max-width: 300px;
  margin-bottom: 32px;
`;

const WrapperDetails = styled.div`
  margin-left: 64px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  & p {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Product = () => {
  const [products, isLoading, cart, setCart, error] = useOutletContext();
  const { productId } = useParams();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const product = products.find(
    (product) => product.id.toString() === productId
  );
  if (!product) return <div>Product not found.</div>;

  return (
    <Wrapper>
      <WrapperImage>
        <img src={product.image} alt={product.title} width="100%" />
      </WrapperImage>
      <WrapperDetails>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </WrapperDetails>
    </Wrapper>
  );
};

export default Product;
