import styled from "styled-components";
import Image from "../../atoms/Image/Image";
import Heading from "../../atoms/Heading/Heading";
import LabeledInput from "../../molecules/LabeledInput/LabeledInput";
import { useState } from "react";
import Button from "../../atoms/Button/Button";
import Alert from "../../atoms/Alert/Alert";
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

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Card = ({
  product,
  handleAddProduct,
  isAddToCart,
  noInput,
  ...props
}) => {
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState("");
  function handleInputChange(e) {
    setQuantity(e.target.value);
  }
  return (
    <Wrapper to={`/product/${product.id}`} {...props}>
      <Image src={product.image} />
      <Heading label={product.title} />
      <Description>{product.description}</Description>
      {isAddToCart && <span>Déjà dans le panier!</span>}
    </Wrapper>
  );
};
export default Card;
