import Button from "../atoms/Button/Button";
import { Trash2 } from "lucide-react";
import styled from "styled-components";
import { useOutletContext } from "react-router";

const Wrapper = styled.div`
  padding: 32px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;

/**
 *
 * @returns
 */
const Cart = () => {
  const [products, dispatch, cartItems] = useOutletContext();
  function handleDelete(id) {
    dispatch({
      type: "deleted",
      id: id,
    });
  }
  function handleUpdate(id, quantity) {
    if (quantity <= 0) {
      dispatch({
        type: "deleted",
        id: id,
      });
    }
    dispatch({
      type: "updated",
      id: id,
      quantity: quantity,
    });
  }
  return (
    <Wrapper>
      <h1>Mon Panier</h1>
      {cartItems.length > 0 && <h2>Produits :</h2>}
      <ul>
        {cartItems.map((cartItem) => {
          const item = products.find((p) => p.id === cartItem.id);
          if (!item) return null;
          return (
            <ListItem key={item.id}>
              <h3>
                {item.title}{" "}
                <Button handleClick={() => handleDelete(item.id)} type="error">
                  <Trash2 />
                </Button>
              </h3>
              <h4>Quantité: {cartItem.quantity}</h4>
              <img src={item.image} alt={item.title} height={100} />
              <p>
                {item.price * cartItem.quantity}€
                <button
                  onClick={() =>
                    handleUpdate(cartItem.id, cartItem.quantity + 1)
                  }
                >
                  +
                </button>
                <button
                  onClick={() =>
                    handleUpdate(cartItem.id, cartItem.quantity - 1)
                  }
                >
                  -
                </button>
              </p>
            </ListItem>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Cart;
