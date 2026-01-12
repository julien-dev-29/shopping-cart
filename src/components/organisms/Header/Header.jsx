import styled from "styled-components";
import Heading from "../../atoms/Heading/Heading";
import Nav from "../Nav/Nav";
import MyNavLink from "../../atoms/MyNavLink/MyNavLink";
import BadgedNavLink from "../../molecules/BadgedNavLink/BadgedNavLink";

const StyledHeader = styled.header`
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgrounds.light};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Header = ({ cartItemsCount, isLoading }) => {
  return (
    <StyledHeader>
      <Heading label="My Funky Cart" />
      <Nav>
        <MyNavLink to="/" label={"home"} />
        <MyNavLink to="/shop" label={"shop"} />
        <BadgedNavLink
          to="/cart"
          cartItemsCount={cartItemsCount}
          isLoading={isLoading}
        />
      </Nav>
    </StyledHeader>
  );
};

export default Header;
