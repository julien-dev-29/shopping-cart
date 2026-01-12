import styled from "styled-components";

const StyledAlert = styled.div`
  border-radius: 5px;
  outline:1px solid #ffc53d;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.warning.base};
  color: #ffc53d;
`;

const Alert = ({ message }) => {
  return <StyledAlert>{message}</StyledAlert>;
};

export default Alert;
