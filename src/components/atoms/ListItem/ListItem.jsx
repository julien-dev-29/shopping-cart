import styled from "styled-components";

const StyledListItem = styled.li``;

const ListItem = ({ children, ...props }) => {
  return <StyledListItem {...props}>{children}</StyledListItem>;
};
export default ListItem;
