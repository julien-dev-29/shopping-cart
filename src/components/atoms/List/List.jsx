import styled from "styled-components";

const StyledList = styled.ul``;

const List = ({ children, ...props }) => {
  return <StyledList {...props}>{children}</StyledList>;
};

export default List;
