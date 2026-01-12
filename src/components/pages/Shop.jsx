import styled from "styled-components";
import Card from "../organisms/Card/Card";
import { useOutletContext } from "react-router";
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
  const [products] = useOutletContext();
  return (
    <Wrapper>
      <CardWrapper>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

export default Shop;
