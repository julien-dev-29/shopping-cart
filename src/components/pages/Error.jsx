import styled from "styled-components";
import MyNavLink from "../atoms/MyNavLink/MyNavLink";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #232530;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 8rem;
  margin: 0;
  color: #ff6b6b;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
  color: #ccc;
`;

export default function Error() {
  return (
    <Wrapper>
      <Title>404</Title>
      <Message>Oups ! La page que vous recherchez n'existe pas.</Message>
      <MyNavLink to="/" label="Home" />
    </Wrapper>
  );
}
