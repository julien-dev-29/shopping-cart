import styled from "styled-components";
import Image from "../../atoms/Image/Image";
import Heading from "../../atoms/Heading/Heading";
import { NavLink } from "react-router";

const Wrapper = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 5px;
  padding: 45px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.base};
  background-color: ${({ theme }) => theme.colors.backgrounds.light};
  text-decoration: none;
  color: inherit;
  &:hover,
  &:focus,
  &:active,
  &.active {
    text-decoration: none;
    color: inherit;
    background-color: inherit;
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Card = ({ product }) => {
  return (
    <Wrapper to={`/product/${product.id}`}>
      <Image src={product.image} />
      <Heading label={product.title} />
      <Description>{product.description}</Description>
    </Wrapper>
  );
};
export default Card;
