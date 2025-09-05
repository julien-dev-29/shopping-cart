import { useOutletContext } from "react-router";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 32px;
  color: ${({ theme }) => theme.colors.text.primary};
`;
const ListItem = styled.li`
  margin-bottom: 8px;
`;
const Cart = () => {
  const [products, isLoading, cart, setCart, error] = useOutletContext();

  /**
   *
   * @param {Number} productId
   */
  function handleDelete(productId) {
    const updatedProducts = cart.products.filter(
      (p) => p.productId !== productId
    );
    setCart({ ...cart, products: updatedProducts });
  }

  /**
   *
   * @param {Number} productId
   * @param {Number} newQuantity
   */
  function updateCart(productId, newQuantity) {
    if (newQuantity <= 0) {
      handleDelete(productId);
    } else {
      const updatedProducts = cart.products.map((p) =>
        p.productId === productId ? { ...p, quantity: newQuantity } : p
      );
      setCart({ ...cart, products: updatedProducts });
    }
  }

  if (isLoading) return <Wrapper>Chargement...</Wrapper>;
  if (error) return <Wrapper>Erreur : {error.message}</Wrapper>;
  if (!cart) return <Wrapper>Aucun panier disponible.</Wrapper>;

  return (
    <Wrapper>
      <h1>Mon Panier</h1>
      <p>Date : {new Date(cart.date).toLocaleDateString("fr-FR")}</p>
      {cart.products.length > 0 && <h2>Produits :</h2>}
      <ul>
        {cart.products.map((cartProduct) => {
          const product = products.find((p) => p.id === cartProduct.productId);
          if (!product) return null;
          return (
            <ListItem key={product.id}>
              <h3>
                {product.title}{" "}
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </h3>
              <h4>Quantité: {cartProduct.quantity}</h4>
              <img src={product.image} alt={product.title} height={100} />
              <p>
                {product.price * cartProduct.quantity}€
                <button
                  onClick={() =>
                    updateCart(cartProduct.productId, cartProduct.quantity + 1)
                  }
                >
                  +
                </button>
                <button
                  onClick={() =>
                    updateCart(cartProduct.productId, cartProduct.quantity - 1)
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
