import styled from "styled-components";
import MyNavLink from "../../atoms/MyNavLink/MyNavLink";
import Badge from "../../atoms/Badge/Badge";

const BadgedLinkWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BadgedNavLink = ({ isLoading, cartItemsCount, to }) => {
  return (
    <BadgedLinkWrapper>
      <MyNavLink to={to} label={"cart"} />
      {!isLoading && cartItemsCount > 0 && <Badge label={cartItemsCount} />}
    </BadgedLinkWrapper>
  );
};

export default BadgedNavLink;
