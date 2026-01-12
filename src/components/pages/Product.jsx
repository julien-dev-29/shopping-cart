import { useState } from "react";
import styled from "styled-components";
import LabeledInput from "../molecules/LabeledInput/LabeledInput";
import Button from "../atoms/Button/Button";
import Alert from "../atoms/Alert/Alert";
import { useOutletContext, useParams } from "react-router";
import { useEffect } from "react";

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

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Product = () => {
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState("");
  const [itemInCart, setItemInCart] = useState({});
  const [products, dispatch, cartItems] = useOutletContext();
  const { productId } = useParams();
  function handleInputChange(e) {
    setQuantity(e.target.value);
  }
  function handleAddCartItem(id) {
    if (quantity <= 0) setMessage("Quantité minimum: 1");
    else {
      let exisitingItem = cartItems.find((item) => item.id === id);
      if (exisitingItem) {
        dispatch({
          type: "updated",
          id: id,
          quantity: exisitingItem.quantity + quantity,
        });
      } else {
        dispatch({
          type: "added",
          id: id,
          quantity: quantity,
        });
      }
    }
  }
  const product = products.find((p) => p.id.toString() === productId);
  useEffect(() => {
    const existingItem = cartItems.find(
      (item) => item.id.toString() === productId
    );
    if (existingItem) {
      setItemInCart(existingItem);
      setMessage("Article dans le panier: " + existingItem.quantity)
    }
  }, [cartItems, productId]);

  return (
    <Wrapper>
      <WrapperImage>
        <img src={product.image} alt={product.title} width="100%" />
      </WrapperImage>
      <WrapperDetails>
        <h1>{product.title}</h1>
        <h2>{product.price}€</h2>
        <p>{product.description}</p>

        <InputWrapper>
          <LabeledInput
            quantity={quantity}
            handleInputChange={handleInputChange}
            setQuantity={setQuantity}
          />
          {message && <Alert message={message}></Alert>}
          <Price>
            Prix total: {product.price * quantity}€
            <Button
              label="Add to cart"
              handleClick={() => handleAddCartItem(product.id)}
            >
              Add to cart
            </Button>
          </Price>
        </InputWrapper>
      </WrapperDetails>
    </Wrapper>
  );
};

export default Product;
