import styled from "styled-components";

const StyledAlert = styled.div`
  background-color: ${({ theme }) => theme.colors.warning.base};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Alert = ({ message }) => {
  return <StyledAlert>{message}</StyledAlert>;
};

export default Alert;
