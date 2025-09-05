import styled from "styled-components";

const StyledNav = styled.nav`
  width: 25%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Nav = ({ children, ...props }) => {
  return <StyledNav {...props}>{children}</StyledNav>;
};
export default Nav;
