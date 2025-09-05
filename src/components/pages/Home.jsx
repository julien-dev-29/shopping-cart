import styled from "styled-components";

const Wrapper = styled.div`
  padding: 48px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Home = () => {
  return (
    <Wrapper>
      <Title>HomePage</Title>
      <img src="/wtf.png" height="600" alt="" />
    </Wrapper>
  );
};

export default Home;
