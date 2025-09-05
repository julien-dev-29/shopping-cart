import { NavLink } from "react-router";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};
  &.active {
    color: ${({ theme }) => theme.colors.accent.base};
    text-decoration: underline;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.accent.base};
  }
`;

const MyNavLink = ({ label, to, ...props }) => {
  return (
    <StyledNavLink
      to={to}
      {...props}
      className={({ isActive, isPending }) =>
        isActive ? "active" : isPending ? "pending" : ""
      }
    >
      {label}
    </StyledNavLink>
  );
};
export default MyNavLink;
